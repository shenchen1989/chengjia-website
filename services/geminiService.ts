import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const getSystemInstruction = (lang: Language) => {
  if (lang === 'zh') {
    return "你是一个名为“CJ Studio”的专业室内设计与装修顾问。你的服务地区主要是北欧（丹麦、瑞典）和意大利。你的目标是帮助当地华人解决装修难、人工贵的问题。请重点推荐‘全屋定制’和‘装修落地’服务。回答要简短、务实、高情商。如果用户问价格，给出一个合理的估算范围（参考北欧高昂的人工费，但强调我们能通过供应链帮他们省钱）。";
  } else {
    return "You are a professional interior design and renovation consultant for 'CJ Studio', serving the Nordics (Denmark, Sweden) and Italy. Your goal is to help clients solve the problem of expensive labor and material sourcing. Emphasize 'Full House Customization' and 'Turnkey Renovation'. Be concise, practical, and polite. If asked about price, give a realistic range (acknowledging high Nordic labor costs) but emphasize how your supply chain saves money.";
  }
};

export const generateDesignAdvice = async (
  prompt: string,
  history: { role: string; text: string }[],
  lang: Language
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const model = 'gemini-2.5-flash'; 
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: getSystemInstruction(lang),
      },
      history: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message: prompt });
    return result.text || (lang === 'zh' ? "抱歉，我现在无法回答，请稍后再试。" : "Sorry, I cannot answer right now.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'zh' 
      ? "目前咨询人数较多，请直接发邮件至 info@chengjiadesign.com 或添加微信 ChengjiaDesign 联系我们。" 
      : "High traffic currently. Please contact us via email at info@chengjiadesign.com or WeChat (ChengjiaDesign).";
  }
};