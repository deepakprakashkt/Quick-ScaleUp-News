// import { useNavigate } from "react-router-dom";

// function Health() {
//   const navigate = useNavigate();

//   const healthPosts = [
//     {
//       id: 1,
//       category: "Health",
//       title: "The Role of Sleep in Immune System Support",
//       image:
//         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//       date: "February 24, 2025",
//       description:
//         "Quality sleep plays a critical role in strengthening the immune system and maintaining overall health. Adequate rest supports cellular repair, hormonal balance, and immune response, helping the body fight infections and reduce the risk of chronic diseases in the long term."
//     },
//     {
//       id: 2,
//       category: "Health",
//       title: "Breaking Down the Latest Nutritional Guidelines",
//       image:
//         "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
//       date: "February 24, 2025",
//       description:
//         "Modern nutritional guidelines emphasize balanced diets, portion control, and nutrient diversity to prevent lifestyle-related illnesses. Health experts recommend personalized nutrition plans that consider age, activity levels, and existing medical conditions to promote sustainable well-being."
//     },
//     {
//       id: 3,
//       category: "Health",
//       title: "How Climate Change is Impacting Global Health",
//       image:
//         "https://images.unsplash.com/photo-1584036561584-b03c19da874c",
//       date: "February 24, 2025",
//       description:
//         "Climate change is emerging as a major public health challenge, contributing to the spread of infectious diseases, heat-related illnesses, and food insecurity. Healthcare systems worldwide are adapting strategies to address environmental risks and protect vulnerable populations."
//     }
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
//       {/* LEFT CONTENT */}
//       <div className="lg:col-span-3">
//         <h1 className="text-4xl font-bold mb-4">Health</h1>
//         <hr className="mb-10" />

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {healthPosts.map((post) => (
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
//               Olympics 2025: The Cyclists to Watch
//             </li>
//             <li className="cursor-pointer hover:underline">
//               The Top Film Festivals Showcasing Emerging Talent
//             </li>
//             <li className="cursor-pointer hover:underline">
//               Understanding the Evolution of Digital Art Marketplaces
//             </li>
//             <li className="cursor-pointer hover:underline">
//               Understanding Voter Turnout Trends in Democratic Elections
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
//             <li className="cursor-pointer hover:underline">Science (2)</li>
//             <li className="cursor-pointer hover:underline">Sports (2)</li>
//           </ul>
//         </div>
//       </aside>
//     </section>
//   );
// }

// export default Health;





// checking down


import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/* ================= DUMMY DATA ================= */
const dummyHealth = [
  {
    id: "health-1",
    category: "Health",
    title: "The Role of Sleep in Immune System Support",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    date: "February 24, 2025",
    description:
      "Quality sleep plays a critical role in strengthening the immune system.",
  },
  {
    id: "health-2",
    category: "Health",
    title: "Breaking Down the Latest Nutritional Guidelines",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    date: "February 24, 2025",
    description:
      "Balanced diets and proper nutrition are essential for long-term health.",
  },
  {
    id: "health-3",
    category: "Health",
    title: "How Climate Change is Impacting Global Health",
    image: "https://images.unsplash.com/photo-1584036561584-b03c19da874c",
    date: "February 24, 2025",
    description:
      "Climate change is emerging as a major public health concern worldwide.",
  },
];

function Health() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  /* ================= FETCH HEALTH NEWS ================= */
  const fetchHealthNews = async () => {
    try {
      setLoading(true);

      const url = `${import.meta.env.VITE_NEWS_API_URL}?category=health&pageSize=20&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if (!data.articles || data.articles.length === 0) {
        setPosts(dummyHealth);
      } else {
        setPosts(
          data.articles.map((item, index) => ({
            id: `health-${index}`,
            category: "Health",
            title: item.title || "Health update coming soon",
            image:
              item.urlToImage ||
              "https://via.placeholder.com/600x400?text=Health+News",
            date: item.publishedAt
              ? new Date(item.publishedAt).toDateString()
              : "Unknown date",
            description:
              item.description ||
              "Detailed health news will be available shortly.",
          }))
        );
      }
    } catch (error) {
      console.error("Health API failed, loading dummy data");
      setPosts(dummyHealth);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthNews();
  }, []);

  /* ================= SEARCH (CLIENT SIDE) ================= */
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= UI ================= */
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
      {/* LEFT CONTENT */}
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-bold mb-4">Health</h1>
        <hr className="mb-10" />

        {loading ? (
          <p className="text-gray-500">Loading health news...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() =>
                  navigate(`/news/health/${post.id}`, { state: post })
                }
                className="group cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition"
                />

                <span className="text-sm font-semibold text-red-600 uppercase">
                  Health
                </span>

                <h2 className="text-xl font-bold mt-2 group-hover:text-red-600 transition">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">{post.date}</p>

                <p className="text-gray-700 mt-3">{post.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="lg:col-span-1 border-l pl-6 space-y-10">
        {/* SEARCH */}
        <form onSubmit={handleSearch}>
          <h3 className="font-semibold mb-2">Search</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search health news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-3 py-2 w-full rounded"
            />
            <button className="bg-black text-white px-4 rounded">
              Search
            </button>
          </div>
        </form>

        {/* RECENT POSTS */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>
          <ul className="space-y-3 text-red-600">
            {filteredPosts.slice(0, 4).map((post) => (
              <li
                key={post.id}
                onClick={() =>
                  navigate(`/news/health/${post.id}`, { state: post })
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
            <li className="font-bold text-red-600 underline">Health</li>
            <li onClick={() => navigate("/technology")} className="cursor-pointer hover:underline">
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

export default Health;
