import { ChevronDown, CircleX, ExternalLink } from "lucide-react";
import { useState } from "react";
const Sidebar = ({ isOpen, onClose }) => {
  const [expandedMenus, setExpandedMenus] = useState({
    first: true,
    third: true,
    quick: true
  });
  
  const submenuData = ["Submenu two", "Submenu three", "Submenu four", "Submenu five", "Submenu six", "Submenu seven"]

  const linkData = ["Link One", "Link Two", "Link Three", "Link Four", "Link Five", "Link Six"]

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <aside className={`fixed left-0 top-16 bottom-0 bg-gray-100 overflow-y-auto transition-all duration-300 z-40 ${isOpen ? 'w-full sm:w-72 md:w-72 lg:w-72' : 'w-0'}`}>
      <nav className={`p-4 ${isOpen ? 'block' : 'hidden'}`}>

        <div className="flex cursor-pointer justify-end sm:hidden mb-4">
          <button
            onClick={onClose}
          >
            <CircleX className="w-7 h-7 text-gray-700" />
          </button>
        </div>

        <button className="w-full bg-black text-white px-4 py-2 rounded-lg text-left font-medium mb-2">
          Home
        </button>

        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg font-semibold mb-2">
          Search
        </button>

        <div className="mb-2">
          <button
            onClick={() => toggleMenu('first')}
            className="w-full cursor-pointer flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg text-sm sm:text-base"
          >
            <span className="font-semibold">First Navigation</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedMenus.first ? '' : '-rotate-90'}`} />
          </button>
          {expandedMenus.first && (
            <div className="ml-4 mt-1 max-h-38 overflow-y-auto">
              {submenuData.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 sm:px-4 py-1 text-sm sm:text-base text-gray-600 hover:bg-gray-200 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-200 font-semibold rounded-lg mb-2">
          Second Navigation
        </button>

        <div className="mb-2">
          <button
            onClick={() => toggleMenu('third')}
            className="w-full cursor-pointer flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
          >
            <span className="font-semibold">Third Navigation</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedMenus.third ? '' : '-rotate-90'}`} />
          </button>
          {expandedMenus.third && (
            <div className="ml-4 mt-1">
              <button className="w-full text-left px-4 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded">Bookmarks</button>
              <button className="w-full text-left px-4 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded">Research Briefs</button>
              <button className="w-full text-left px-4 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded">Surveys</button>
            </div>
          )}
        </div>

        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg font-semibold mb-2">
          Fourth Navigation
        </button>

        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg font-semibold mb-2">
          Fifth Navigation
        </button>

        <div className="mb-2">
          <button
            onClick={() => toggleMenu('quick')}
            className="w-full cursor-pointer flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
          >
            <span className="font-semibold">Quick Links</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedMenus.quick ? '' : '-rotate-90'}`} />
          </button>
          {expandedMenus.quick && (
            <div className="ml-4 mt-1 max-h-38 overflow-y-auto">
              {linkData.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 sm:px-4 py-1 text-sm sm:text-base text-gray-600 hover:bg-gray-200 rounded flex items-center justify-between"
                >
                  {item}<ExternalLink className="w-4 h-4" />
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar