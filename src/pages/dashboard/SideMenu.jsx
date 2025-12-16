import { LuLayoutDashboard, LuWallet, LuTrendingUp, LuLogOut } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";



const SideMenu = ({ username }) => {
  const { pathname } = useLocation();
  // const {username} = Usercontext

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LuLayoutDashboard size={20} /> },
    { name: "Income", path: "/income", icon: <LuTrendingUp size={20} /> },
    { name: "Expense", path: "/expense", icon: <LuWallet size={20} /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="w-60 h-screen bg-white shadow-lg flex flex-col p-4 border-r">
      {/* USER SECTION */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-primary">Hi, {username} 👋</h2>
      </div>

      {/* MENU ITEMS */}
      <div className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer font-medium transition-all
              ${pathname === item.path ? "bg-primary text-white" : "hover:bg-gray-100 text-gray-700"}
            `}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>

      {/* LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-3 rounded-lg font-medium text-red-500 hover:bg-red-50 transition-all"
      >
        <LuLogOut size={20} />
        Logout
      </button>
    </div>
  );
};

export default SideMenu;
