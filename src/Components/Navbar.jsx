// function Navbar() {
//     return (
//         <nav className="bg-white shadow-md">
//             <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//                 <h1 className="text-2xl font-bold text-red-600">Quick ScaleUp News</h1>
//                 <ul className="hidden md:flex gap-6 font-medium">
//                     <li>Home</li>
//                     <li>World</li>
//                     <li>Health</li>
//                     <li>Business</li>
//                     <li>Tech</li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }


// export default Navbar;




// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import SubscribeModal from "./SubscribeModal";

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [showSubscribe, setShowSubscribe] = useState(false);

//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "text-red-600 font-semibold border-b-2 border-red-600 pb-1"
//       : "hover:text-red-600 transition";

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <header className="sticky top-0 z-50 bg-white border-b">
        
//         {/* Top Breaking Bar */}
//         <div className="hidden md:block bg-gray-900 text-gray-200 text-sm">
//           <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
//             <span>Breaking News • Stay Updated with Quick ScaleUp News</span>
//             <span>2025</span>
//           </div>
//         </div>

//         {/* Main Navbar */}
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <h1 className="text-3xl font-extrabold text-red-600 cursor-pointer">
//             Quick ScaleUp
//             <span className="text-gray-900">News</span>
//           </h1>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex gap-8 font-semibold text-gray-700">
//             <NavLink to="/" className={linkClass}>Home</NavLink>
//             <NavLink to="/business" className={linkClass}>Business</NavLink>
//             <NavLink to="/health" className={linkClass}>Health</NavLink>
//             <NavLink to="/technology" className={linkClass}>Technology</NavLink>
//             <NavLink to="/world" className={linkClass}>World</NavLink>
//             <NavLink to="/politics" className={linkClass}>Politics</NavLink>
//             <NavLink to="/arts" className={linkClass}>Arts</NavLink>
//             <NavLink to="/science" className={linkClass}>Science</NavLink>
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center gap-4">
//             {/* Subscribe Button */}
//             <button
//               onClick={() => setShowSubscribe(true)}
//               className="hidden md:block border border-red-600 text-red-600 px-5 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition"
//             >
//               Subscribe
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="lg:hidden text-3xl"
//             >
//               ☰
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {open && (
//           <div className="lg:hidden bg-white border-t">
//             <nav className="flex flex-col px-6 py-4 gap-4 font-semibold">
//               {[
//                 ["Home", "/"],
//                 ["Business", "/business"],
//                 ["Health", "/health"],
//                 ["Technology", "/technology"],
//                 ["World", "/world"],
//                 ["Politics", "/politics"],
//                 ["Arts", "/arts"],
//                 ["Science", "/science"],
//               ].map(([name, path]) => (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   onClick={() => setOpen(false)}
//                   className="hover:text-red-600"
//                 >
//                   {name}
//                 </NavLink>
//               ))}

//               {/* Mobile Subscribe */}
//               <button
//                 onClick={() => {
//                   setShowSubscribe(true);
//                   setOpen(false);
//                 }}
//                 className="mt-3 border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
//               >
//                 Subscribe
//               </button>
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* ================= SUBSCRIBE MODAL ================= */}
//       {showSubscribe && (
//         <SubscribeModal onClose={() => setShowSubscribe(false)} />
//       )}
//     </>
//   );
// }

// export default Navbar;







// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import SubscribeModal from "./SubscribeModal";

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [showSubscribe, setShowSubscribe] = useState(false);

//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "text-red-600 font-semibold border-b-2 border-red-600 pb-1"
//       : "hover:text-red-600";

//   return (
//     <>
//       <header className="sticky top-0 z-50 bg-white border-b overflow-visible">
//         {/* Top bar */}
//         <div className="hidden md:block bg-gray-900 text-gray-200 text-sm">
//           <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
//             <span>Breaking News • Stay Updated</span>
//             <span>2025</span>
//           </div>
//         </div>

//         {/* Main Navbar */}
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
//           <h1 className="text-3xl font-extrabold text-red-600">
//             Quick ScaleUp<span className="text-gray-900">News</span>
//           </h1>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex gap-8 font-semibold text-gray-700">
//             <NavLink to="/" className={linkClass}>Home</NavLink>
//             <NavLink to="/business" className={linkClass}>Business</NavLink>
//             <NavLink to="/health" className={linkClass}>Health</NavLink>
//             <NavLink to="/technology" className={linkClass}>Technology</NavLink>
//             <NavLink to="/world" className={linkClass}>World</NavLink>
//             <NavLink to="/politics" className={linkClass}>Politics</NavLink>
//             <NavLink to="/arts" className={linkClass}>Arts</NavLink>
//             <NavLink to="/science" className={linkClass}>Science</NavLink>
//           </nav>

//           {/* Right Buttons */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setShowSubscribe(true)}
//               className="hidden md:block border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white"
//             >
//               Subscribe
//             </button>

//             {/* Mobile Toggle */}
//             <button
//               onClick={() => setOpen(prev => !prev)}
//               className="lg:hidden text-3xl"
//             >
//               ☰
//             </button>
//           </div>

//           {/* ================= MOBILE DROPDOWN MENU ================= */}
//           <div
//             className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-[9999]
//             transition-all duration-300
//             ${open ? "block" : "hidden"}`}
//           >
//             <nav className="flex flex-col px-6 py-4 gap-4 font-medium">
//               {[
//                 ["Home", "/"],
//                 ["Business", "/business"],
//                 ["Health", "/health"],
//                 ["Technology", "/technology"],
//                 ["World", "/world"],
//                 ["Politics", "/politics"],
//                 ["Arts", "/arts"],
//                 ["Science", "/science"],
//               ].map(([name, path]) => (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   onClick={() => setOpen(false)}
//                   className="hover:text-red-600"
//                 >
//                   {name}
//                 </NavLink>
//               ))}

//               <button
//                 onClick={() => {
//                   setShowSubscribe(true);
//                   setOpen(false);
//                 }}
//                 className="mt-3 border border-red-600 text-red-600 py-2 rounded-full hover:bg-red-600 hover:text-white"
//               >
//                 Subscribe
//               </button>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Subscribe Modal */}
//       {showSubscribe && (
//         <SubscribeModal onClose={() => setShowSubscribe(false)} />
//       )}
//     </>
//   );
// }

// export default Navbar;



// best but down code new update testing  

 


// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import SubscribeModal from "./SubscribeModal";

// function Navbar() {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   const [showSubscribe, setShowSubscribe] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   return (
//     <header className="bg-white shadow sticky top-0 z-50">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* LOGO */}
//         <Link to="/" className="text-2xl font-bold">
//           QuickScaleUp
//         </Link>

//         {/* ===== MENU (UNCHANGED) ===== */}
//         <ul className="hidden md:flex gap-6 font-medium">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/business">Business</Link></li>
//           <li><Link to="/health">Health</Link></li>
//           <li><Link to="/technology">Technology</Link></li>
//           <li><Link to="/world">World</Link></li>
//           <li><Link to="/politics">Politics</Link></li>
//           <li><Link to="/arts">Arts</Link></li>
//           <li><Link to="/science">Science</Link></li>
//         </ul>

//         {/* ===== RIGHT SIDE (ONLY THIS PART UPDATED) ===== */}
//         <div className="relative">
//           {!user ? (
//             <>
//               {/* SUBSCRIBE */}
//               <button
//                 onClick={() => setShowSubscribe(true)}
//                 className="bg-red-600 text-white px-4 py-2 rounded font-semibold"
//               >
//                 Subscribe
//               </button>

//               {showSubscribe && (
//                 <SubscribeModal onClose={() => setShowSubscribe(false)} />
//               )}
//             </>
//           ) : (
//             <>
//               {/* USER NAME */}
//               <button
//                 onClick={() => setShowUserMenu(!showUserMenu)}
//                 className="font-semibold flex items-center gap-1"
//               >
//                 {user.name}
//                 <span className="text-sm">▼</span>
//               </button>

//               {/* DROPDOWN */}
//               {showUserMenu && (
//                 <div className="absolute right-0 mt-2 bg-white shadow-lg rounded w-44">
//                   <button
//                     onClick={() => {
//                       setShowUserMenu(false);
//                       navigate("/auth");
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     Another Account
//                   </button>

//                   <button
//                     onClick={() => {
//                       logout();
//                       setShowUserMenu(false);
//                       navigate("/");
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;




// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu, X, User } from "lucide-react";

// function Navbar({ user, logout }) {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [userMenu, setUserMenu] = useState(false);
//   const navigate = useNavigate();

//   const menuItems = [
//     "Home",
//     "Business",
//     "Health",
//     "Technology",
//     "World",
//     "Politics",
//     "Arts",
//     "Science",
//   ];

//   return (
//     <header className="w-full bg-white shadow sticky top-0 z-50">
//       {/* TOP STRIP */}
//       <div className="bg-slate-900 text-white text-sm py-2 px-6 flex justify-between">
//         <span>Breaking News • Stay Updated</span>
//         <span>2025</span>
//       </div>

//       {/* MAIN NAVBAR */}
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link to="/" className="text-2xl font-extrabold">
//           <span className="text-red-600">Quick</span>
//           <span className="text-black">ScaleUp</span>
//           <span className="text-red-600">News</span>
//         </Link>

//         {/* DESKTOP MENU */}
//         <nav className="hidden md:flex items-center gap-6 font-medium">
//           {menuItems.map((item) => (
//             <Link
//               key={item}
//               to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//               className="hover:text-red-600 transition"
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>

//         {/* DESKTOP RIGHT */}
//         <div className="hidden md:flex items-center gap-4 relative">
//           {!user ? (
//             <button
//               onClick={() => navigate("/auth")}
//               className="border border-red-600 text-red-600 px-5 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
//             >
//               Subscribe
//             </button>
//           ) : (
//             <>
//               <button
//                 onClick={() => setUserMenu(!userMenu)}
//                 className="flex items-center gap-2 border px-4 py-2 rounded-full hover:bg-gray-100"
//               >
//                 <User size={18} />
//                 {user.name}
//               </button>

//               {userMenu && (
//                 <div className="absolute right-0 top-12 bg-white shadow-lg rounded-xl w-48 overflow-hidden">
//                   <button
//                     onClick={() => {
//                       navigate("/auth");
//                       setUserMenu(false);
//                     }}
//                     className="w-full text-left px-4 py-3 hover:bg-gray-100"
//                   >
//                     Another Account
//                   </button>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setUserMenu(false);
//                     }}
//                     className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setMobileMenu(!mobileMenu)}
//           className="md:hidden"
//         >
//           {mobileMenu ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {mobileMenu && (
//         <div className="md:hidden bg-gray-50 border-t shadow-inner">
//           <div className="px-5 py-6 space-y-6">

//             {/* MENU LINKS */}
//             <div className="grid grid-cols-2 gap-4 text-sm font-medium">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item}
//                   to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//                   onClick={() => setMobileMenu(false)}
//                   className="bg-white rounded-xl px-4 py-3 shadow hover:bg-red-50 transition text-center"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>

//             {/* USER SECTION */}
//             <div className="bg-white rounded-xl shadow p-4">
//               {!user ? (
//                 <button
//                   onClick={() => {
//                     navigate("/auth");
//                     setMobileMenu(false);
//                   }}
//                   className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition"
//                 >
//                   Subscribe
//                 </button>
//               ) : (
//                 <>
//                   <p className="text-sm text-gray-500 mb-1">
//                     Logged in as
//                   </p>
//                   <p className="font-bold text-lg mb-4">
//                     {user.name}
//                   </p>

//                   <button
//                     onClick={() => {
//                       navigate("/auth");
//                       setMobileMenu(false);
//                     }}
//                     className="w-full border border-gray-300 rounded-lg py-2 mb-2 hover:bg-gray-100 transition"
//                   >
//                     Another Account
//                   </button>

//                   <button
//                     onClick={() => {
//                       logout();
//                       setMobileMenu(false);
//                     }}
//                     className="w-full border border-red-600 text-red-600 rounded-lg py-2 hover:bg-red-50 transition"
//                   >
//                     Logout
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;





import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "../context/AuthContext"; // ✅ CONTEXT

function Navbar() {
  const { user, logout } = useAuth(); // ✅ FIX
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    "Home",
    "Business",
    "Health",
    "Technology",
    "World",
    "Politics",
    "Arts",
    "Science",
  ];

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      {/* TOP STRIP */}
      <div className="bg-slate-900 text-white text-sm py-2 px-6 flex justify-between">
        <span>Breaking News • Stay Updated</span>
        <span>2025</span>
      </div>

      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold">
          <span className="text-red-600">Quick</span>
          <span className="text-green-600">ScaleUp</span>
          <span className="text-black-600">News</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="hover:text-red-600 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-4 relative">
          {!user ? (
            <button
              onClick={() => navigate("/auth")}
              className="border border-red-600 text-red-600 px-5 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
            >
              Subscribe
            </button>
          ) : (
            <>
              <button
                onClick={() => setUserMenu(!userMenu)}
                className="flex items-center gap-2 border px-4 py-2 rounded-full hover:bg-gray-100"
              >
                <User size={18} />
                {user.name}
              </button>

              {userMenu && (
                <div className="absolute right-0 top-12 bg-white shadow-lg rounded-xl w-48 overflow-hidden">
                  <button
                    onClick={() => {
                      navigate("/auth");
                      setUserMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    Another Account
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setUserMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="md:hidden bg-gray-50 border-t shadow-inner">
          <div className="px-5 py-6 space-y-6">

            {/* MENU LINKS */}
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  onClick={() => setMobileMenu(false)}
                  className="bg-white rounded-xl px-4 py-3 shadow hover:bg-red-50 transition text-center"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* USER SECTION */}
            <div className="bg-white rounded-xl shadow p-4">
              {!user ? (
                <button
                  onClick={() => {
                    navigate("/auth");
                    setMobileMenu(false);
                  }}
                  className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition"
                >
                  Subscribe
                </button>
              ) : (
                <>
                  <p className="text-sm text-gray-500 mb-1">
                    Logged in as
                  </p>
                  <p className="font-bold text-lg mb-4">
                    {user.name}
                  </p>

                  <button
                    onClick={() => {
                      navigate("/auth");
                      setMobileMenu(false);
                    }}
                    className="w-full border border-gray-300 rounded-lg py-2 mb-2 hover:bg-gray-100 transition"
                  >
                    Another Account
                  </button>

                  <button
                    onClick={() => {
                      logout();
                      setMobileMenu(false);
                    }}
                    className="w-full border border-red-600 text-red-600 rounded-lg py-2 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
