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







import { NavLink } from "react-router-dom";
import { useState } from "react";
import SubscribeModal from "./SubscribeModal";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-600 font-semibold border-b-2 border-red-600 pb-1"
      : "hover:text-red-600";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b overflow-visible">
        {/* Top bar */}
        <div className="hidden md:block bg-gray-900 text-gray-200 text-sm">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
            <span>Breaking News • Stay Updated</span>
            <span>2025</span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <h1 className="text-3xl font-extrabold text-red-600">
            Quick ScaleUp<span className="text-gray-900">News</span>
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 font-semibold text-gray-700">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/business" className={linkClass}>Business</NavLink>
            <NavLink to="/health" className={linkClass}>Health</NavLink>
            <NavLink to="/technology" className={linkClass}>Technology</NavLink>
            <NavLink to="/world" className={linkClass}>World</NavLink>
            <NavLink to="/politics" className={linkClass}>Politics</NavLink>
            <NavLink to="/arts" className={linkClass}>Arts</NavLink>
            <NavLink to="/science" className={linkClass}>Science</NavLink>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSubscribe(true)}
              className="hidden md:block border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white"
            >
              Subscribe
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(prev => !prev)}
              className="lg:hidden text-3xl"
            >
              ☰
            </button>
          </div>

          {/* ================= MOBILE DROPDOWN MENU ================= */}
          <div
            className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-[9999]
            transition-all duration-300
            ${open ? "block" : "hidden"}`}
          >
            <nav className="flex flex-col px-6 py-4 gap-4 font-medium">
              {[
                ["Home", "/"],
                ["Business", "/business"],
                ["Health", "/health"],
                ["Technology", "/technology"],
                ["World", "/world"],
                ["Politics", "/politics"],
                ["Arts", "/arts"],
                ["Science", "/science"],
              ].map(([name, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="hover:text-red-600"
                >
                  {name}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  setShowSubscribe(true);
                  setOpen(false);
                }}
                className="mt-3 border border-red-600 text-red-600 py-2 rounded-full hover:bg-red-600 hover:text-white"
              >
                Subscribe
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Subscribe Modal */}
      {showSubscribe && (
        <SubscribeModal onClose={() => setShowSubscribe(false)} />
      )}
    </>
  );
}

export default Navbar;