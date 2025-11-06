import { Search, User, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white px-3 sm:px-6 py-3 flex items-center justify-between z-50">
      <div className="text-lg sm:text-2xl font-bold">
        LOREM
        <div className="text-[10px] sm:text-xs pl-5 sm:pl-10.5 text-gray-300">
          IPSUM
        </div>
      </div>

      <div className="flex max-w-[180px] xs:max-w-xs sm:max-w-3xl lg:max-w-7xl relative">
        <Search className="absolute lg:-left-6 md:-left-6 left-2 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer text-black sm:text-white" />
        <input
          type="text"
          placeholder="Search for Lorem Ipsum dolor sit amet"
          className="w-full md:w-72 lg:w-150 bg-gray-200 text-black placeholder-black pl-8 pr-4 py-2 rounded-full text-xs sm:text-sm focus:outline-none"
        />
        <button className="hidden sm:flex cursor-pointer items-center text-gray-400 pl-4 text-xs">
          Toggle Panel <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div
        className="flex items-center ml-2">
        <button className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer bg-gray-700 rounded-full flex items-center justify-center">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
