import React, { useState } from 'react';
import { Plus, Trash2, Copy, Save, Image as ImageIcon, X } from 'lucide-react';
import { PORTFOLIO_ITEMS, CONTENT } from '../constants';
import { PortfolioItem, Content } from '../types';

const AdminGenerator: React.FC = () => {
  // Initialize state with existing content
  const [items, setItems] = useState<PortfolioItem[]>(PORTFOLIO_ITEMS);
  const [heroTitle, setHeroTitle] = useState(CONTENT.zh.hero.title);
  const [heroSubtitle, setHeroSubtitle] = useState(CONTENT.zh.hero.subtitle);
  
  // New item form state
  const [newItem, setNewItem] = useState<Partial<PortfolioItem>>({
    title: '',
    category: 'Residential',
    imageUrl: ''
  });

  const [generatedCode, setGeneratedCode] = useState('');
  const [activeTab, setActiveTab] = useState<'portfolio' | 'text'>('portfolio');

  // Handlers
  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAddItem = () => {
    if (!newItem.title || !newItem.imageUrl) {
      alert("请输入标题和图片链接");
      return;
    }
    const id = Math.max(...items.map(i => i.id), 0) + 1;
    setItems([...items, { ...newItem, id } as PortfolioItem]);
    setNewItem({ title: '', category: 'Residential', imageUrl: '' });
  };

  const generateCode = () => {
    // Generate the full constants.ts file content string
    // We are simplifying to just show the updated variables for the user to copy
    
    const portfolioString = JSON.stringify(items, null, 2);
    
    // Constructing a string that looks like the constants.ts file parts
    const codeBlock = `
// 将以下内容复制并覆盖 constants.ts 中的 PORTFOLIO_ITEMS 部分：

export const PORTFOLIO_ITEMS: PortfolioItem[] = ${portfolioString};
    `;
    setGeneratedCode(codeBlock);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-serif font-bold">CJ Studio 后台管理</h1>
            <p className="text-stone-400 text-sm mt-1">可视化编辑内容，生成代码后复制即可</p>
          </div>
          <a href="/" className="text-sm bg-stone-700 px-3 py-1 rounded hover:bg-stone-600 transition-colors">
            返回首页
          </a>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'portfolio' ? 'border-b-2 border-stone-900 text-stone-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            案例管理 (Portfolio)
          </button>
          <button 
            onClick={() => setActiveTab('text')}
            className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'text' ? 'border-b-2 border-stone-900 text-stone-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            文字修改 (Text)
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'portfolio' && (
            <div className="space-y-8">
              {/* Add New Item */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-sm font-bold uppercase text-gray-500 mb-4 flex items-center gap-2">
                  <Plus size={16} /> 添加新案例
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="项目标题 (例如: 哥本哈根火锅店)"
                    className="p-3 border rounded-md text-sm focus:ring-2 focus:ring-stone-900 outline-none"
                    value={newItem.title}
                    onChange={e => setNewItem({...newItem, title: e.target.value})}
                  />
                  <select
                    className="p-3 border rounded-md text-sm focus:ring-2 focus:ring-stone-900 outline-none bg-white"
                    value={newItem.category}
                    onChange={e => setNewItem({...newItem, category: e.target.value})}
                  >
                    <option value="Residential">Residential (住宅)</option>
                    <option value="Commercial">Commercial (商业/餐饮)</option>
                    <option value="Customization">Customization (定制)</option>
                  </select>
                </div>
                <div className="flex gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="图片链接 (您可以上传到 postimages.org 然后把直链贴在这里)"
                    className="flex-1 p-3 border rounded-md text-sm focus:ring-2 focus:ring-stone-900 outline-none"
                    value={newItem.imageUrl}
                    onChange={e => setNewItem({...newItem, imageUrl: e.target.value})}
                  />
                </div>
                {newItem.imageUrl && (
                    <div className="mb-4 w-32 h-24 bg-gray-200 rounded overflow-hidden relative">
                        <img src={newItem.imageUrl} className="w-full h-full object-cover" alt="Preview" />
                    </div>
                )}
                <button 
                  onClick={handleAddItem}
                  className="bg-stone-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-stone-800 transition-colors"
                >
                  确认添加
                </button>
              </div>

              {/* List Items */}
              <div>
                <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">当前列表 ({items.length})</h3>
                <div className="grid grid-cols-1 gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-stone-900">{item.title}</h4>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mt-1 inline-block">
                          {item.category}
                        </span>
                      </div>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 p-2 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'text' && (
            <div className="space-y-6">
                <div className="p-4 bg-yellow-50 border border-yellow-100 rounded text-sm text-yellow-800 mb-6">
                    目前仅支持修改首页主要文字作为演示。
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">中文主标题</label>
                    <input 
                        type="text" 
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                        className="w-full p-3 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">中文副标题</label>
                    <textarea 
                        value={heroSubtitle}
                        onChange={(e) => setHeroSubtitle(e.target.value)}
                        rows={3}
                        className="w-full p-3 border rounded-md"
                    />
                </div>
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col md:flex-row items-center gap-6">
            <button 
                onClick={generateCode}
                className="w-full md:w-auto bg-green-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
            >
                <Save size={20} />
                第一步：生成新代码
            </button>
            <p className="text-sm text-gray-500">
                点击生成后，复制下方代码替换到 <code>constants.ts</code> 文件中。
            </p>
        </div>

        {/* Code Output */}
        {generatedCode && (
            <div className="p-6 border-t border-gray-200 bg-stone-900 text-stone-300">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-mono text-green-400">generated_code.ts</span>
                    <button 
                        onClick={() => {navigator.clipboard.writeText(generatedCode); alert('代码已复制！')}}
                        className="text-white hover:text-green-400 flex items-center gap-1 text-xs uppercase tracking-wider"
                    >
                        <Copy size={14} /> Copy Code
                    </button>
                </div>
                <textarea 
                    readOnly
                    value={generatedCode}
                    className="w-full h-64 bg-black/50 p-4 font-mono text-xs rounded border border-stone-700 outline-none"
                />
            </div>
        )}
      </div>
    </div>
  );
};

export default AdminGenerator;