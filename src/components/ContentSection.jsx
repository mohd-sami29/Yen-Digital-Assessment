import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ContentTile from "./ContentTile";
const ContentSection = () => {
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');

  const categories = ['All Categories', 'DATA', 'AI & ML', 'Research', 'Analytics', 'Reports'];

  const contentItems = [
    { title: 'This should be Tile Title', category: 'DATA', date: '07 Oct 2022', author: 'Vladimir Galabov' },
    { title: 'This should be Tile Title', category: 'AI & ML', date: '15 Mar 2023', author: 'Emma Clarke' },
    { title: 'This should be Tile Title', category: '', date: '', author: '' },
    { title: 'This should be Tile Title', category: 'AI & ML', date: '15 Mar 2023', author: 'Emma Clarke' },
    { title: 'This should be Tile Title', category: '', date: '', author: '' },
  ];

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryDropdownOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Section Title</h2>
        <div className="relative">
          <button 
            onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
            className="flex items-center cursor-pointer gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50"
          >
            <span className="w-4 h-4 absolute -left-6 bg-black text-white rounded-full flex items-center justify-center text-xs">i</span>
            {selectedCategory} <ChevronDown className={`w-4 h-4 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {categoryDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => selectCategory(category)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Sub Title</h3>
            <button className="text-sm cursor-pointer underline">View</button>
          </div>

          <div className="ml-4 mt-1 max-h-78 overflow-y-auto">
            {contentItems.map((item, idx) => (
            <ContentTile key={idx} {...item} />
           ))}
          </div>

        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Sub Title</h3>
            <button className="text-sm cursor-pointer underline">View</button>
          </div>

          <div className="ml-4 mt-1 max-h-78 overflow-y-auto">
            {contentItems.map((item, idx) => (
            <ContentTile key={idx} {...item} />
           ))}
          </div>

        </div>
      </div>
    </>
  );
};
export default ContentSection;