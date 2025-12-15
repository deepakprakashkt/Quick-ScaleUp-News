// import { useNavigate } from "react-router-dom";

// function Science() {
//   const navigate = useNavigate();

//   const sciencePosts = [
//     {
//       id: 1,
//       category: "Science",
//       title: "ISRO’s Upcoming Space Missions and Strategic Goals",
//       image:
//         "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
//       date: "February 24, 2025",
//       description:
//         "India’s space program continues to expand with ambitious missions focused on satellite deployment, deep-space exploration, and international collaboration. ISRO’s roadmap highlights advancements in launch vehicle technology and scientific research capabilities."
//     },
//     {
//       id: 2,
//       category: "Science",
//       title: "Climate Science: Understanding Global Warming Trends",
//       image:
//         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//       date: "February 24, 2025",
//       description:
//         "Climate scientists are analyzing long-term data to understand rising global temperatures and extreme weather patterns. Research-driven insights are helping governments and organizations design sustainable policies and climate-resilient infrastructure."
//     },
//     {
//       id: 3,
//       category: "Science",
//       title: "Breakthroughs in Medical Research and Biotechnology",
//       image:
//         "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
//       date: "February 24, 2025",
//       description:
//         "Recent advances in biotechnology and medical science are accelerating drug discovery, improving diagnostics, and enabling personalized treatments. These innovations are reshaping healthcare delivery and long-term disease management."
//     }
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
//       {/* LEFT CONTENT */}
//       <div className="lg:col-span-3">
//         <h1 className="text-4xl font-bold mb-4">Science</h1>
//         <hr className="mb-10" />

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {sciencePosts.map((post) => (
//             <div
//               key={post.id}
//               className="group cursor-pointer"
//               onClick={() => navigate("/news-details", { state: post })}
//             >
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition"
//               />

//               <span className="text-sm font-semibold text-red-600 uppercase">
//                 {post.category}
//               </span>

//               <h2 className="text-xl font-bold mt-2 group-hover:text-red-600 transition">
//                 {post.title}
//               </h2>

//               <p className="text-sm text-gray-500 mt-1">{post.date}</p>

//               <p className="text-gray-700 mt-3 leading-relaxed">
//                 {post.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT SIDEBAR */}
//       <aside className="lg:col-span-1 border-l pl-6 space-y-10">
//         {/* Search */}
//         <div>
//           <h3 className="font-semibold mb-2">Search</h3>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="border px-3 py-2 w-full rounded"
//             />
//             <button className="bg-black text-white px-4 rounded">
//               Search
//             </button>
//           </div>
//         </div>

//         {/* Recent Posts */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>
//           <ul className="space-y-3 text-red-600">
//             <li className="cursor-pointer hover:underline">
//               ISRO’s Upcoming Space Missions and Strategic Goals
//             </li>
//             <li className="cursor-pointer hover:underline">
//               Climate Science: Understanding Global Warming Trends
//             </li>
//             <li className="cursor-pointer hover:underline">
//               Breakthroughs in Medical Research and Biotechnology
//             </li>
//             <li className="cursor-pointer hover:underline">
//               Artificial Intelligence Transforming Modern Businesses
//             </li>
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Categories</h3>
//           <ul className="space-y-2 text-red-600">
//             <li className="cursor-pointer hover:underline">Arts (4)</li>
//             <li className="cursor-pointer hover:underline">Business (2)</li>
//             <li className="cursor-pointer hover:underline">Health (5)</li>
//             <li className="cursor-pointer hover:underline">Politics (2)</li>
//             <li className="cursor-pointer hover:underline">Science (3)</li>
//             <li className="cursor-pointer hover:underline">Sports (2)</li>
//           </ul>
//         </div>
//       </aside>
//     </section>
//   );
// }

// export default Science;


// checking update 


import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ================= SCIENCE DATA ================= */
const sciencePosts = [
  {
    id: "science-1",
    category: "Science",
    title: "ISRO’s Upcoming Space Missions and Strategic Goals",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    date: "February 24, 2025",
    description:
      "India’s space program continues to expand with ambitious missions focused on satellite deployment and deep-space exploration."
  },
  {
    id: "science-2",
    category: "Science",
    title: "Climate Science: Understanding Global Warming Trends",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    date: "February 24, 2025",
    description:
      "Climate scientists are analyzing long-term data to understand rising temperatures and extreme weather patterns."
  },
  {
    id: "science-3",
    category: "Science",
    title: "Breakthroughs in Medical Research and Biotechnology",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    date: "February 24, 2025",
    description:
      "Advances in biotechnology are accelerating drug discovery and enabling personalized treatments."
  }
];

function Science() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  /* ================= SEARCH FILTER ================= */
  const filteredPosts = sciencePosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
      {/* ================= LEFT CONTENT ================= */}
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-bold mb-4">Science</h1>
        <hr className="mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() =>
                navigate(`/news/science/${post.id}`, { state: post })
              }
              className="group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition"
              />

              <span className="text-sm font-semibold text-red-600 uppercase">
                Science
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

      {/* ================= RIGHT SIDEBAR ================= */}
      <aside className="lg:col-span-1 border-l pl-6 space-y-10">
        {/* Search */}
        <div>
          <h3 className="font-semibold mb-2">Search</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search science news..."
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
          <h3 className="text-2xl font-bold mb-4">
            Recent Posts
          </h3>

          <ul className="space-y-3 text-red-600">
            {sciencePosts.map((post) => (
              <li
                key={post.id}
                onClick={() =>
                  navigate(`/news/science/${post.id}`, { state: post })
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
          <h3 className="text-2xl font-bold mb-4">
            Categories
          </h3>

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
            <li onClick={() => navigate("/politics")} className="cursor-pointer hover:underline">
              Politics
            </li>
            <li className="text-red-600 font-semibold underline">
              Science
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
}

export default Science;
