// import { Link } from "react-router-dom";

// function Arts() {
//   const posts = [
//     {
//       id: 1,
//       title: "The Top Film Festivals Showcasing Emerging Talent",
//       image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
//       date: "February 24, 2025",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis."
//     },
//     {
//       id: 2,
//       title: "How Virtual Reality is Revolutionizing the Art World",
//       image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
//       date: "February 24, 2025",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis."
//     },
//     {
//       id: 3,
//       title: "Understanding the Evolution of Digital Art Marketplaces",
//       image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
//       date: "February 24, 2025",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis."
//     }
//   ];

//   return (
//     <section className="bg-[#faf9f6]">
//       <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

//         {/* LEFT CONTENT */}
//         <div className="lg:col-span-2">
//           <h1 className="text-4xl font-bold mb-4">Arts</h1>
//           <hr className="mb-10" />

//           <div className="grid md:grid-cols-3 gap-10">
//             {posts.map(post => (
//               <div key={post.id}>
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="rounded-lg mb-4 h-48 w-full object-cover"
//                 />

//                 <span className="text-red-600 text-sm font-semibold">
//                   ARTS
//                 </span>

//                 <h2 className="text-xl font-bold mt-2">
//                   {post.title}
//                 </h2>

//                 <p className="text-sm text-gray-500 mt-1">
//                   {post.date}
//                 </p>

//                 <p className="text-gray-600 mt-3 leading-relaxed">
//                   {post.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR */}
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
//               <li>The Top Film Festivals Showcasing Emerging Talent</li>
//               <li>How Virtual Reality is Revolutionizing the Art World</li>
//               <li>Understanding the Evolution of Digital Art Marketplaces</li>
//               <li>Understanding Voter Turnout Trends in Democratic Elections</li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="font-semibold mb-4 text-xl">
//               Categories
//             </h3>

//             <ul className="space-y-2">
//               <li className="text-red-600 font-semibold">Arts (4)</li>
//               <li>
//                 <Link to="/business" className="hover:text-red-600">
//                   Business (2)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/health" className="hover:text-red-600">
//                   Health (5)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/politics" className="hover:text-red-600">
//                   Politics (3)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/science" className="hover:text-red-600">
//                   Science (2)
//                 </Link>
//               </li>
//             </ul>
//           </div>

//         </aside>
//       </div>
//     </section>
//   );
// }

// export default Arts;



// checking update 




import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ================= ARTS DATA ================= */
const artsPosts = [
  {
    id: "arts-1",
    category: "Arts",
    title: "The Top Film Festivals Showcasing Emerging Talent",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    date: "February 24, 2025",
    description:
      "Major international film festivals are becoming launchpads for new filmmakers and experimental cinema."
  },
  {
    id: "arts-2",
    category: "Arts",
    title: "How Virtual Reality is Revolutionizing the Art World",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    date: "February 24, 2025",
    description:
      "Virtual Reality is transforming exhibitions, installations, and the way audiences experience art."
  },
  {
    id: "arts-3",
    category: "Arts",
    title: "Understanding the Evolution of Digital Art Marketplaces",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    date: "February 24, 2025",
    description:
      "NFTs and blockchain-based platforms are redefining how digital artists sell and showcase their work."
  }
];

function Arts() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  /* ================= SEARCH FILTER ================= */
  const filteredPosts = artsPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
      {/* LEFT CONTENT */}
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-bold mb-4">Arts</h1>
        <hr className="mb-10" />

        <div className="grid md:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() =>
                navigate(`/news/arts/${post.id}`, { state: post })
              }
              className="cursor-pointer group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-lg mb-4 h-48 w-full object-cover group-hover:scale-105 transition"
              />

              <span className="text-red-600 text-sm font-semibold uppercase">
                Arts
              </span>

              <h2 className="text-xl font-bold mt-2 group-hover:text-red-600 transition">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {post.date}
              </p>

              <p className="text-gray-700 mt-3 leading-relaxed">
                {post.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="space-y-10 border-l pl-6">
        {/* Search */}
        <div>
          <h3 className="font-semibold mb-3">Search</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search arts news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-3 py-2 w-full rounded"
            />
            <button className="bg-black text-white px-4 rounded">
              Search
            </button>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="font-semibold mb-4 text-xl">
            Recent Posts
          </h3>

          <ul className="space-y-3 text-red-600">
            {artsPosts.map((post) => (
              <li
                key={post.id}
                onClick={() =>
                  navigate(`/news/arts/${post.id}`, { state: post })
                }
                className="cursor-pointer hover:underline"
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4 text-xl">
            Categories
          </h3>

          <ul className="space-y-2">
            <li onClick={() => navigate("/")} className="cursor-pointer hover:underline">
              Home
            </li>
            <li
              className="text-red-600 font-semibold underline"
            >
              Arts
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
            <li onClick={() => navigate("/politics")} className="cursor-pointer hover:underline">
              Politics
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

export default Arts;
