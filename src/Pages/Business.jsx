// import { Link } from "react-router-dom";

// function Business() {
//   const posts = [
//   {
//     id: 1,
//     title: "Analyzing the Latest Trends in Global Trade",
//     image:
//       "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
//     date: "February 24, 2025",
//     description:
//       "Global trade is undergoing a major transformation due to supply chain digitization, geopolitical shifts, and changing trade policies. Businesses are focusing on resilient logistics, regional manufacturing, and technology-driven trade solutions to reduce risk and improve efficiency in international markets."
//   },
//   {
//     id: 2,
//     title: "Understanding Cryptocurrency: Risks and Opportunities",
//     image:
//       "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
//     date: "February 24, 2025",
//     description:
//       "Cryptocurrency is reshaping the financial ecosystem by offering decentralized payment systems and investment opportunities. However, market volatility, regulatory uncertainty, and cybersecurity risks remain key challenges. Companies are adopting blockchain cautiously while exploring its long-term business potential."
//   }
// ];


//   return (
//     <section className="bg-[#faf9f6]">
//       <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

//         {/* LEFT CONTENT */}
//         <div className="lg:col-span-2">
//           <h1 className="text-4xl font-bold mb-4">Business</h1>
//           <hr className="mb-10" />

//           <div className="grid md:grid-cols-2 gap-12">
//             {posts.map(post => (
//               <div key={post.id}>
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="rounded-lg mb-4 h-48 w-full object-cover"
//                 />

//                 <span className="text-red-600 text-sm font-semibold">
//                   BUSINESS
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
//               <li>Olympics 2025: The Cyclists to Watch</li>
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
//               <li>
//                 <Link to="/arts" className="hover:text-red-600">
//                   Arts (4)
//                 </Link>
//               </li>
//               <li className="text-red-600 font-semibold">
//                 Business (2)
//               </li>
//               <li>
//                 <Link to="/health" className="hover:text-red-600">
//                   Health (5)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/politics" className="hover:text-red-600">
//                   Politics (2)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/science" className="hover:text-red-600">
//                   Science (2)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/sports" className="hover:text-red-600">
//                   Sports (2)
//                 </Link>
//               </li>
//             </ul>
//           </div>

//         </aside>
//       </div>
//     </section>
//   );
// }

// export default Business;





import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Business() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ================= DUMMY FALLBACK =================
  const dummyPosts = [
    {
      id: 1,
      title: "Analyzing the Latest Trends in Global Trade",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
      date: "February 24, 2025",
      description:
        "Global trade is undergoing a major transformation due to supply chain digitization, geopolitical shifts, and changing trade policies."
    },
    {
      id: 2,
      title: "Understanding Cryptocurrency: Risks and Opportunities",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
      date: "February 24, 2025",
      description:
        "Cryptocurrency is reshaping the financial ecosystem while facing volatility and regulatory challenges."
    }
  ];

  // ================= FETCH NEWS =================
  const fetchNews = async (query = "") => {
    setLoading(true);
    setMessage("");

    try {
      const url = query
        ? `https://newsapi.org/v2/everything?q=${query}&pageSize=6&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        : `https://newsapi.org/v2/top-headlines?category=business&pageSize=6&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if (!data.articles || data.articles.length === 0) {
        setPosts(dummyPosts);
        setMessage("No news found. Showing latest updates.");
        return;
      }

      setPosts(
        data.articles.map((item, index) => ({
          id: index,
          title: item.title,
          image:
            item.urlToImage ||
            "https://via.placeholder.com/600x400?text=Business+News",
          date: new Date(item.publishedAt).toDateString(),
          description:
            item.description ||
            "More details will be available soon.",
        }))
      );
    } catch (error) {
      console.error("API Error:", error);
      setPosts(dummyPosts);
      setMessage("API failed. Showing dummy data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">Business</h1>
          <hr className="mb-10" />

          {loading && <p className="text-gray-500">Loading news...</p>}
          {message && <p className="text-red-600 mb-4">{message}</p>}

          <div className="grid md:grid-cols-2 gap-12">
            {posts.map(post => (
              <div
                key={post.id}
                onClick={() =>
                  navigate(`/news/business/${post.id}`, {
                    state: post,
                  })
                }
                className="cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-lg mb-4 h-48 w-full object-cover"
                />

                <span className="text-red-600 text-sm font-semibold">
                  BUSINESS
                </span>

                <h2 className="text-xl font-bold mt-2">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {post.date}
                </p>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="space-y-10">

          {/* SEARCH */}
          <div>
            <h3 className="font-semibold mb-3">Search</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search business news..."
                className="border px-3 py-2 w-full"
              />
              <button
                onClick={() => fetchNews(search)}
                className="bg-black text-white px-4"
              >
                Search
              </button>
            </div>
          </div>

          {/* RECENT POSTS */}
          <div>
            <h3 className="font-semibold mb-4 text-xl">
              Recent Posts
            </h3>

            <ul className="space-y-3 text-red-600">
              {posts.slice(0, 5).map(post => (
                <li
                  key={post.id}
                  onClick={() =>
                    navigate(`/news/business/${post.id}`, {
                      state: post,
                    })
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
            <h3 className="font-semibold mb-4 text-xl">
              Categories
            </h3>

            <ul className="space-y-2">
              <li><Link to="/arts">Arts</Link></li>
              <li className="text-red-600 font-semibold">Business</li>
              <li><Link to="/health">Health</Link></li>
              <li><Link to="/politics">Politics</Link></li>
              <li><Link to="/science">Science</Link></li>
              <li><Link to="/technology">Technology</Link></li>
            </ul>
          </div>

        </aside>
      </div>
    </section>
  );
}

export default Business;
