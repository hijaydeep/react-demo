import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between px-6 py-4">
      <img src="/img/logo.png" alt="logo" className="h-12" />
      <img
        src="/img/Avatar.png"
        alt="user"
        className="h-10 w-10 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute right-3 mt-20 w-32 bg-white hover:bg-red-500 border border-gray-400 rounded-lg shadow-md z-50">
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:text-white cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
