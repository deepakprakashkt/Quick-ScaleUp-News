// import { useNavigate } from "react-router-dom";

// function Technology() {
//   const navigate = useNavigate();

//   const techPosts = [
//     {
//       id: 1,
//       category: "Technology",
//       title: "Artificial Intelligence Transforming Modern Businesses",
//       image:
//         "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//       date: "February 24, 2025",
//       description:
//         "Artificial Intelligence is reshaping industries by automating operations, enhancing decision-making, and improving customer experiences. From predictive analytics to intelligent chatbots, AI-driven solutions are enabling organizations to scale faster while reducing operational costs."
//     },
//     {
//       id: 2,
//       category: "Technology",
//       title: "Cybersecurity Trends Every Organization Must Know",
//       image:
//         "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
//       date: "February 24, 2025",
//       description:
//         "With the rise of digital transformation, cybersecurity has become a strategic priority for businesses. Companies are adopting zero-trust architectures, AI-powered threat detection, and compliance-driven security frameworks to protect sensitive data and maintain trust."
//     },
//     {
//       id: 3,
//       category: "Technology",
//       title: "The Future of Cloud Computing and Enterprise Innovation",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475",
//       date: "February 24, 2025",
//       description:
//         "Cloud computing continues to drive enterprise innovation by enabling scalability, flexibility, and cost optimization. Hybrid and multi-cloud strategies are helping organizations modernize legacy systems and accelerate digital product development."
//     }
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
//       {/* LEFT CONTENT */}
//       <div className="lg:col-span-3">
//         <h1 className="text-4xl font-bold mb-4">Technology</h1>
//         <hr className="mb-10" />

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {techPosts.map((post) => (
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
//               Artificial Intelligence Transforming Modern Businesses
//             </li>
//             <li className="cursor-pointer hover:underline">
//               Cybersecurity Trends Every Organization Must Know
//             </li>
//             <li className="cursor-pointer hover:underline">
//               The Future of Cloud Computing and Enterprise Innovation
//             </li>
//             <li className="cursor-pointer hover:underline">
//               Understanding the Evolution of Digital Art Marketplaces
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
//             <li className="cursor-pointer hover:underline">Technology (3)</li>
//             <li className="cursor-pointer hover:underline">Sports (2)</li>
//           </ul>
//         </div>
//       </aside>
//     </section>
//   );
// }

// export default Technology;



// checking purposes 





import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ================= TECHNOLOGY DATA ================= */
const techPostsData = [
  {
    id: "tech-1",
    category: "Technology",
    title: "Artificial Intelligence Transforming Modern Businesses",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "February 24, 2025",
    description:
      "Artificial Intelligence is reshaping industries by automating operations, enhancing decision-making, and improving customer experiences."
  },
  {
    id: "tech-2",
    category: "Technology",
    title: "Cybersecurity Trends Every Organization Must Know",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    date: "February 24, 2025",
    description:
      "Organizations are adopting zero-trust architectures, AI-powered threat detection, and compliance-driven security frameworks."
  },
  {
    id: "tech-3",
    category: "Technology",
    title: "The Future of Cloud Computing and Enterprise Innovation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: "February 24, 2025",
    description:
      "Hybrid and multi-cloud strategies are helping enterprises modernize systems and accelerate digital innovation."
  }
];

function Technology() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  /* ================= SEARCH FILTER ================= */
  const filteredPosts = techPostsData.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
      {/* LEFT CONTENT */}
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-bold mb-4">Technology</h1>
        <hr className="mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() =>
                navigate(`/news/technology/${post.id}`, { state: post })
              }
              className="group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition"
              />

              <span className="text-sm font-semibold text-red-600 uppercase">
                Technology
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
              placeholder="Search technology news..."
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
                  navigate(`/news/technology/${post.id}`, { state: post })
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
            <li className="font-bold text-red-600 underline">
              Technology
            </li>
            <li onClick={() => navigate("/world")} className="cursor-pointer hover:underline">
              World
            </li>
            <li onClick={() => navigate("/politics")} className="cursor-pointer hover:underline">
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

export default Technology;
