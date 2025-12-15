// import { useNavigate } from "react-router-dom";

// function World() {
//   const navigate = useNavigate();

//   const worldNews = [
//     {
//       id: 1,
//       category: "World",
//       title: "Global Economy Faces Uncertainty Amid Rising Inflation",
//       image:
//         "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
//       date: "February 24, 2025",
//       description:
//         "Major economies across the globe are facing inflationary pressures driven by supply chain disruptions, geopolitical tensions, and energy price volatility. Policymakers are responding with interest rate adjustments and fiscal reforms."
//     },
//     {
//       id: 2,
//       category: "World",
//       title: "International Summit Focuses on Climate Action Commitments",
//       image:
//         "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
//       date: "February 23, 2025",
//       description:
//         "World leaders gathered to discuss urgent climate strategies, carbon neutrality goals, and sustainable development initiatives. The summit emphasized collaboration between governments, industries, and research institutions."
//     },
//     {
//       id: 3,
//       category: "World",
//       title: "Advancements in Global Healthcare Systems Post-Pandemic",
//       image:
//         "https://images.unsplash.com/photo-1584036561584-b03c19da874c",
//       date: "February 22, 2025",
//       description:
//         "Countries are investing heavily in digital healthcare, emergency preparedness, and cross-border medical research to strengthen resilience after recent global health crises."
//     },
//     {
//       id: 4,
//       category: "World",
//       title: "Geopolitical Tensions Impact Global Trade Routes",
//       image:
//         "https://images.unsplash.com/photo-1502920514313-52581002a659",
//       date: "February 22, 2025",
//       description:
//         "Rising geopolitical conflicts have affected shipping lanes and trade corridors, increasing costs for businesses and prompting diversification of supply chains worldwide."
//     },
//     {
//       id: 5,
//       category: "World",
//       title: "Artificial Intelligence Policies Emerge Across Nations",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475",
//       date: "February 21, 2025",
//       description:
//         "Governments are drafting AI regulations to balance innovation with ethical concerns, data privacy, and workforce transformation in an increasingly automated world."
//     },
//     {
//       id: 6,
//       category: "World",
//       title: "Energy Transition Accelerates with Renewable Investments",
//       image:
//         "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
//       date: "February 20, 2025",
//       description:
//         "Renewable energy projects are expanding rapidly as countries aim to reduce dependence on fossil fuels and meet long-term sustainability targets."
//     }
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
//       {/* MAIN CONTENT */}
//       <div className="lg:col-span-3">
//         <h1 className="text-4xl font-bold mb-4">World News</h1>
//         <p className="text-gray-600 mb-6">
//           Latest international news covering global politics, economy,
//           climate, technology, and major world events.
//         </p>
//         <hr className="mb-10" />

//         <div className="grid md:grid-cols-2 gap-12">
//           {worldNews.map((news) => (
//             <div
//               key={news.id}
//               className="group cursor-pointer"
//               onClick={() =>
//                 navigate("/news-details", { state: news })
//               }
//             >
//               <img
//                 src={news.image}
//                 alt={news.title}
//                 className="w-full h-60 object-cover rounded-lg mb-4 group-hover:scale-105 transition"
//               />

//               <span className="text-sm font-semibold text-red-600 uppercase">
//                 {news.category}
//               </span>

//               <h2 className="text-2xl font-bold mt-2 group-hover:text-red-600 transition">
//                 {news.title}
//               </h2>

//               <p className="text-sm text-gray-500 mt-1">{news.date}</p>

//               <p className="text-gray-700 mt-4 leading-relaxed">
//                 {news.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* SIDEBAR */}
//       <aside className="lg:col-span-1 border-l pl-6 space-y-12">
//         {/* Search */}
//         <div>
//           <h3 className="font-semibold mb-2">Search</h3>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Search world news..."
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
//             <li className="hover:underline cursor-pointer">
//               Global Economy Faces Uncertainty Amid Rising Inflation
//             </li>
//             <li className="hover:underline cursor-pointer">
//               International Summit Focuses on Climate Action
//             </li>
//             <li className="hover:underline cursor-pointer">
//               AI Policies Emerge Across Nations
//             </li>
//             <li className="hover:underline cursor-pointer">
//               Energy Transition Accelerates Worldwide
//             </li>
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Categories</h3>
//           <ul className="space-y-2 text-red-600">
//             <li className="hover:underline cursor-pointer">Arts (4)</li>
//             <li className="hover:underline cursor-pointer">Business (2)</li>
//             <li className="hover:underline cursor-pointer">Health (5)</li>
//             <li className="hover:underline cursor-pointer">Politics (2)</li>
//             <li className="hover:underline cursor-pointer">Science (3)</li>
//             <li className="hover:underline cursor-pointer">World (6)</li>
//           </ul>
//         </div>
//       </aside>
//     </section>
//   );
// }

// export default World;


// checking update 



import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ================= WORLD DATA ================= */
const worldNewsData = [
  {
    id: "world-1",
    category: "World",
    title: "Global Economy Faces Uncertainty Amid Rising Inflation",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    date: "February 24, 2025",
    description:
      "Major economies across the globe are facing inflationary pressures driven by supply chain disruptions, geopolitical tensions, and energy price volatility."
  },
  {
    id: "world-2",
    category: "World",
    title: "International Summit Focuses on Climate Action Commitments",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    date: "February 23, 2025",
    description:
      "World leaders gathered to discuss urgent climate strategies, carbon neutrality goals, and sustainable development initiatives."
  },
  {
    id: "world-3",
    category: "World",
    title: "Advancements in Global Healthcare Systems Post-Pandemic",
    image: "https://images.unsplash.com/photo-1584036561584-b03c19da874c",
    date: "February 22, 2025",
    description:
      "Countries are investing heavily in digital healthcare, emergency preparedness, and cross-border medical research."
  },
  {
    id: "world-4",
    category: "World",
    title: "Geopolitical Tensions Impact Global Trade Routes",
    image: "https://images.unsplash.com/photo-1502920514313-52581002a659",
    date: "February 22, 2025",
    description:
      "Rising geopolitical conflicts have affected shipping lanes and trade corridors, increasing costs for businesses."
  },
  {
    id: "world-5",
    category: "World",
    title: "Artificial Intelligence Policies Emerge Across Nations",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: "February 21, 2025",
    description:
      "Governments are drafting AI regulations to balance innovation with ethical concerns and data privacy."
  },
  {
    id: "world-6",
    category: "World",
    title: "Energy Transition Accelerates with Renewable Investments",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    date: "February 20, 2025",
    description:
      "Renewable energy projects are expanding rapidly as countries reduce dependence on fossil fuels."
  }
];

function World() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  /* ================= SEARCH FILTER ================= */
  const filteredNews = worldNewsData.filter(
    (news) =>
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
      {/* MAIN CONTENT */}
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-bold mb-4">World News</h1>
        <p className="text-gray-600 mb-6">
          Latest international news covering global politics, economy,
          climate, technology, and major world events.
        </p>
        <hr className="mb-10" />

        <div className="grid md:grid-cols-2 gap-12">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              onClick={() =>
                navigate(`/news/world/${news.id}`, { state: news })
              }
              className="group cursor-pointer"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-60 object-cover rounded-lg mb-4 group-hover:scale-105 transition"
              />

              <span className="text-sm font-semibold text-red-600 uppercase">
                World
              </span>

              <h2 className="text-2xl font-bold mt-2 group-hover:text-red-600 transition">
                {news.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">{news.date}</p>

              <p className="text-gray-700 mt-4">{news.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SIDEBAR */}
      <aside className="lg:col-span-1 border-l pl-6 space-y-12">
        {/* SEARCH */}
        <div>
          <h3 className="font-semibold mb-2">Search</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search world news..."
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
            {filteredNews.slice(0, 4).map((news) => (
              <li
                key={news.id}
                onClick={() =>
                  navigate(`/news/world/${news.id}`, { state: news })
                }
                className="cursor-pointer hover:underline"
              >
                {news.title}
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
            <li className="font-bold text-red-600 underline">
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

export default World;
