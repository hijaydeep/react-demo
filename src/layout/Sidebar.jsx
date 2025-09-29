import React from "react";

const categories = [
  { id: 1, icon: "/img/left-2.png", name: "Category 1" },
  { id: 2, icon: "/img/left-3.png", name: "Category 2" },
  { id: 3, icon: "/img/left-4.png", name: "Category 3" },
  { id: 4, icon: "/img/left-5.png", name: "Category 4" },
  { id: 5, icon: "/img/left-6.png", name: "Category 5" },
];

const Sidebar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="w-40 border-r border-gray-400 px-6 py-4 flex flex-col items-center space-y-6">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`flex flex-col items-center cursor-pointer ${
            activeCategory === cat.id ? "text-purple-600" : "text-gray-600"
          }`}
          onClick={() => setActiveCategory(cat.id)}
        >
          <img src={cat.icon} alt={cat.name} className="w-20" />
          <span className="mt-2 text-sm font-semibold">{cat.name}</span>
        </div>
      ))}

      <div className="h-10"></div>
    </div>
  );
};

export default Sidebar;