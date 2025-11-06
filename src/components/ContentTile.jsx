import { Bookmark, FileText } from "lucide-react";

const ContentTile = ({ title, category, date, author }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium">{title}</h4>
        <Bookmark className="w-5 h-5 text-gray-400" />
      </div>
      {category && (
        <div className="flex items-center gap-3 text-xs text-gray-600">
          <span className="font-medium">{category}</span>
          <span>|</span>
          <span>{date}</span>
          <span>|</span>
          <span>{author}</span>
          <span>|</span>
          <div className="flex cursor-pointer gap-2">
            <span><FileText size={16} /></span>
            <span><FileText size={16} /></span>
            <span className="bg-black text-white px-2 py-0.5  cursor-pointer rounded">Pill</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentTile;