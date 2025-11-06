import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CarouselSection from "./components/CarouselSection";
import ContentSection from "./components/ContentSection";
import { PanelLeftClose, TextAlignJustify } from "lucide-react";


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <Header />

      <div className="flex pt-16 h-full">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className={`flex-1 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-0'}`}>
          <div className="p-4">
            <button 
              onClick={toggleSidebar} 
              className="mb-4 pt-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? <PanelLeftClose size={24} /> : <TextAlignJustify />}
            </button>

            <h1 className="text-3xl font-semibold mb-8">Hello, User</h1>

            <CarouselSection />
            <ContentSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;