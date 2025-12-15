// import PostCard from "../Components/PostCard";

// const politicsPosts = [
//   {
//     id: "p1",
//     image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
//     category: "Politics",
//     title: "Understanding Voter Turnout Trends in Democratic Elections",
//     date: "February 24, 2025",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur blandit justo ut tempor turpis.",
//   },
//   {
//     id: "p2",
//     image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9",
//     category: "Politics",
//     title: "Election 2025: Key Issues Shaping the Campaign Trail",
//     date: "February 24, 2025",
//     description:
//       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
// ];

// function Politics() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-14">
//       {/* Page Title */}
//       <h1 className="text-4xl font-bold mb-10 border-b pb-4">
//         Politics
//       </h1>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
//         {/* LEFT CONTENT */}
//         <div className="lg:col-span-3 grid md:grid-cols-2 gap-10">
//           {politicsPosts.map((post) => (
//             <div key={post.id} className="group cursor-pointer">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-56 object-cover rounded-xl mb-4"
//               />

//               <span className="text-red-600 text-sm font-semibold uppercase">
//                 {post.category}
//               </span>

//               <h2 className="text-xl font-bold mt-2 group-hover:text-red-600 transition">
//                 {post.title}
//               </h2>

//               <p className="text-sm text-gray-500 mt-1">{post.date}</p>

//               <p className="text-gray-600 mt-3">
//                 {post.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <aside className="space-y-10">
//           {/* Search */}
//           <div>
//             <h3 className="font-semibold mb-2">Search</h3>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="border px-3 py-2 w-full rounded"
//               />
//               <button className="bg-black text-white px-4 rounded">
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Recent Posts */}
//           <div>
//             <h3 className="font-semibold mb-4 text-xl">Recent Posts</h3>
//             <ul className="space-y-3 text-red-600">
//               <li>Olympics 2025: The Cyclists to Watch</li>
//               <li>The Top Film Festivals Showcasing Emerging Talent</li>
//               <li>How Virtual Reality is Revolutionizing the Art World</li>
//               <li>Understanding the Evolution of Digital Art Marketplaces</li>
//               <li>Understanding Voter Turnout Trends in Democratic Elections</li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="font-semibold mb-4 text-xl">Categories</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li>Arts (4)</li>
//               <li>Business (3)</li>
//               <li>Health (2)</li>
//               <li>Politics (5)</li>
//               <li>Science (3)</li>
//               <li>World (4)</li>
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }

// export default Politics;




// correct version down




// import { Link } from "react-router-dom";
// import politics1 from "../assets/politics1.jpg";
// import politics2 from "../assets/politics2.jpg";

// function Politics() {
//   return (
//     <section className="bg-[#faf9f6]">
//       <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

//         {/* ================= LEFT CONTENT ================= */}
//         <div className="lg:col-span-2">
//           <h1 className="text-4xl font-bold mb-4">Politics</h1>
//           <hr className="mb-10" />

//           <div className="grid md:grid-cols-2 gap-10">

//             {/* Card 1 */}
//             <div>
//               <img
//                 src={politics1}
//                 alt="Politics"
//                 className="rounded-lg mb-4"
//               />
//               <span className="text-red-600 text-sm font-semibold">
//                 POLITICS
//               </span>

//               <h2 className="text-xl font-bold mt-2">
//                 Understanding Voter Turnout Trends in Democratic Elections
//               </h2>

//               <p className="text-sm text-gray-500 mt-1">
//                 February 24, 2025
//               </p>

//               <p className="text-gray-600 mt-3">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Nam facilisis orci consectetur, blandit justo ut.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div>
//               <img
//                 src={politics2}
//                 alt="Politics"
//                 className="rounded-lg mb-4"
//               />
//               <span className="text-red-600 text-sm font-semibold">
//                 POLITICS
//               </span>

//               <h2 className="text-xl font-bold mt-2">
//                 Election 2025: Key Issues Shaping the Campaign Trail
//               </h2>

//               <p className="text-sm text-gray-500 mt-1">
//                 February 24, 2025
//               </p>

//               <p className="text-gray-600 mt-3">
//                 Excepteur sint occaecat cupidatat non proident,
//                 sunt in culpa qui officia deserunt mollit.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT SIDEBAR ================= */}
//         <aside className="space-y-10">

//           {/* Search */}
//           <div>
//             <h3 className="font-semibold mb-3">Search</h3>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="border px-3 py-2 w-full"
//               />
//               <button className="bg-black text-white px-4">
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Recent Posts */}
//           <div>
//             <h3 className="font-semibold mb-4 text-xl">
//               Recent Posts
//             </h3>

//             <ul className="space-y-3 text-red-600">
//               <li>
//                 <Link to="/sports" className="hover:underline">
//                   Olympics 2025: The Cyclists to Watch
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/arts" className="hover:underline">
//                   The Top Film Festivals Showcasing Emerging Talent
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/arts" className="hover:underline">
//                   How Virtual Reality is Revolutionizing the Art World
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/arts" className="hover:underline">
//                   Understanding the Evolution of Digital Art Marketplaces
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/politics" className="hover:underline">
//                   Understanding Voter Turnout Trends in Democratic Elections
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="font-semibold mb-4 text-xl">
//               Categories
//             </h3>

//             <ul className="space-y-2">
//               <li>
//                 <Link to="/arts" className="hover:text-red-600">
//                   Arts (4)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/business" className="hover:text-red-600">
//                   Business (3)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/health" className="hover:text-red-600">
//                   Health (2)
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/politics"
//                   className="text-red-600 font-semibold"
//                 >
//                   Politics (5)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/science" className="hover:text-red-600">
//                   Science (3)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/world" className="hover:text-red-600">
//                   World (4)
//                 </Link>
//               </li>
//             </ul>
//           </div>

//         </aside>
//       </div>
//     </section>
//   );
// }

// export default Politics;


// after search checking


import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ================= POLITICS DATA ================= */
const politicsPostsData = [
  {
    id: "politics-1",
    category: "Politics",
    title: "Understanding Voter Turnout Trends in Democratic Elections",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
    date: "February 24, 2025",
    description:
      "Analysis of voter participation trends highlights the impact of digital campaigns, youth engagement, and policy awareness on democratic elections."
  },
  {
    id: "politics-2",
    category: "Politics",
    title: "Election 2025: Key Issues Shaping the Campaign Trail",
    image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9",
    date: "February 24, 2025",
    description:
      "Economic reforms, employment, national security, and social welfare are dominating the political discourse ahead of the 2025 elections."
  },
  {
    id: "politics-3",
    category: "Politics",
    title: "How Global Politics Are Reshaping International Alliances",
    image: "https://images.unsplash.com/photo-1502920514313-52581002a659",
    date: "February 23, 2025",
    description:
      "Shifting geopolitical interests are redefining long-standing alliances and influencing global power dynamics."
  }
];

function Politics() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  /* ================= SEARCH FILTER ================= */
  const filteredPosts = politicsPostsData.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
      {/* LEFT CONTENT */}
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-bold mb-4">Politics</h1>
        <hr className="mb-10" />

        <div className="grid md:grid-cols-2 gap-10">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() =>
                navigate(`/news/politics/${post.id}`, { state: post })
              }
              className="group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-lg mb-4 group-hover:scale-105 transition"
              />

              <span className="text-sm font-semibold text-red-600 uppercase">
                Politics
              </span>

              <h2 className="text-xl font-bold mt-2 group-hover:text-red-600 transition">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">{post.date}</p>

              <p className="text-gray-700 mt-3">{post.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="lg:col-span-1 border-l pl-6 space-y-10">
        {/* SEARCH */}
        <div>
          <h3 className="font-semibold mb-2">Search</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search politics news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-3 py-2 w-full rounded"
            />
            <button className="bg-black text-white px-4 rounded">
              Search
            </button>
          </div>
        </div>

        {/* RECENT POSTS */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>
          <ul className="space-y-3 text-red-600">
            {filteredPosts.slice(0, 4).map((post) => (
              <li
                key={post.id}
                onClick={() =>
                  navigate(`/news/politics/${post.id}`, { state: post })
                }
                className="cursor-pointer hover:underline"
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li onClick={() => navigate("/")} className="cursor-pointer hover:underline">
              Home
            </li>
            <li onClick={() => navigate("/business")} className="cursor-pointer hover:underline">
              Business
            </li>
            <li onClick={() => navigate("/health")} className="cursor-pointer hover:underline">
              Health
            </li>
            <li onClick={() => navigate("/technology")} className="cursor-pointer hover:underline">
              Technology
            </li>
            <li onClick={() => navigate("/world")} className="cursor-pointer hover:underline">
              World
            </li>
            <li className="font-bold text-red-600 underline">
              Politics
            </li>
            <li onClick={() => navigate("/arts")} className="cursor-pointer hover:underline">
              Arts
            </li>
            <li onClick={() => navigate("/science")} className="cursor-pointer hover:underline">
              Science
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
}

export default Politics;

