// import Hero from "../Components/Hero";
// import CategorySection from "../Components/CategorySection";
// import Newsletter from "../Components/NewsLetter";

// function Home() {
//   return (
//     <>
//       <Hero />
//       <CategorySection title="Health" />
//       <CategorySection title="Business" />
//       <CategorySection title="Technology" />
//       <Newsletter />
//     </>
//   );
// }

// export default Home;



// src/pages/Home.jsx
// import Hero from "../Components/Hero";
// import CategorySection from "../Components/CategorySection";
// import Newsletter from "../Components/NewsLetter";
// import { newsData } from "../data/newsData";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <Hero />

//       {/* ================= TOP STORIES ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold">Top Stories</h2>
//           <button
//             onClick={() => navigate("/world")}
//             className="text-red-600 font-semibold hover:underline"
//           >
//             View All
//           </button>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div
//             onClick={() => navigate("/politics")}
//             className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
//               className="h-56 w-full object-cover rounded-t-xl"
//             />
//             <div className="p-4">
//               <span className="text-red-600 text-sm font-semibold">
//                 Politics
//               </span>
//               <h3 className="font-bold mt-2">
//                 Government Policies Shape National Economy
//               </h3>
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/world")}
//             className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2"
//               className="h-56 w-full object-cover rounded-t-xl"
//             />
//             <div className="p-4">
//               <span className="text-red-600 text-sm font-semibold">
//                 World
//               </span>
//               <h3 className="font-bold mt-2">
//                 Global Markets React to Inflation Trends
//               </h3>
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/business")}
//             className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa"
//               className="h-56 w-full object-cover rounded-t-xl"
//             />
//             <div className="p-4">
//               <span className="text-red-600 text-sm font-semibold">
//                 Business
//               </span>
//               <h3 className="font-bold mt-2">
//                 Corporate Earnings Drive Stock Market Growth
//               </h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= BUSINESS ================= */}
//       <CategorySection
//         title="Business"
//         posts={newsData.business}
//       />

//       {/* ================= TECHNOLOGY & SCIENCE ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold mb-6">
//           Technology & Science
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div
//             onClick={() => navigate("/technology")}
//             className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg p-6"
//           >
//             <h3 className="text-xl font-bold mb-2">
//               Artificial Intelligence & Innovation
//             </h3>
//             <p className="text-gray-600">
//               How emerging technologies are reshaping industries and
//               redefining digital transformation.
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/science")}
//             className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg p-6"
//           >
//             <h3 className="text-xl font-bold mb-2">
//               Scientific Discoveries & Space Research
//             </h3>
//             <p className="text-gray-600">
//               Breakthrough research, space missions, and future
//               scientific advancements.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= HEALTH ================= */}
//       <CategorySection
//         title="Health"
//         posts={newsData.health}
//       />

//       {/* ================= NEWSLETTER ================= */}
//       <Newsletter />
//     </>
//   );
// }

// export default Home;





// import { useEffect, useState } from "react";
// import Hero from "../Components/Hero";
// import CategorySection from "../Components/CategorySection";
// import Newsletter from "../Components/NewsLetter";
// import BreakingNews from "../Components/BreakingNews";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   const [business, setBusiness] = useState([]);
//   const [technology, setTechnology] = useState([]);
//   const [health, setHealth] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ================= SEO ================= */
//   useEffect(() => {
//     document.title =
//       "Quick ScaleUp News – Latest Business, Technology, Health & World News";

//     const setMeta = (name, content) => {
//       let meta = document.querySelector(`meta[name="${name}"]`);
//       if (!meta) {
//         meta = document.createElement("meta");
//         meta.name = name;
//         document.head.appendChild(meta);
//       }
//       meta.content = content;
//     };

//     setMeta(
//       "description",
//       "Quick ScaleUp News provides the latest Business, Technology, Science, Health, Politics and World news with fast and reliable updates."
//     );

//     setMeta(
//       "keywords",
//       "Business News, Technology News, Science News, World News, Politics News, Indian News"
//     );
//   }, []);

//   /* ================= API FETCH ================= */
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const API_URL = import.meta.env.VITE_NEWS_API_URL;
//         const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

//         const fetchCategory = async (category) => {
//           const res = await fetch(
//             `${API_URL}?country=in&category=${category}&pageSize=6&apiKey=${API_KEY}`
//           );
//           const data = await res.json();

//           return data.articles.map((item, index) => ({
//             id: `${category}-${index}`,
//             title: item.title,
//             image: item.urlToImage || "https://via.placeholder.com/400",
//             description: item.description || "Read full article on Quick ScaleUp News",
//           }));
//         };

//         const [biz, tech, healthNews] = await Promise.all([
//           fetchCategory("business"),
//           fetchCategory("technology"),
//           fetchCategory("health"),
//         ]);

//         setBusiness(biz);
//         setTechnology(tech);
//         setHealth(healthNews);
//       } catch (error) {
//         console.error("News API Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-32 text-xl font-semibold">
//         Loading Latest News...
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* ================= BREAKING NEWS ================= */}
//       <BreakingNews />

//       {/* ================= HERO ================= */}
//       <Hero />

//       {/* ================= TOP STORIES ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-14">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold">Top Stories</h2>
//           <button
//             onClick={() => navigate("/world")}
//             className="text-red-600 font-semibold hover:underline"
//           >
//             View All
//           </button>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {business.slice(0, 3).map((item) => (
//             <div
//               key={item.id}
//               onClick={() =>
//                 navigate(`/news/business/${item.id}`, {
//                   state: item,
//                 })
//               }
//               className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-56 w-full object-cover rounded-t-xl"
//               />
//               <div className="p-4">
//                 <span className="text-red-600 text-sm font-semibold">
//                   Business
//                 </span>
//                 <h3 className="font-bold mt-2">{item.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= BUSINESS ================= */}
//       <CategorySection title="Business" posts={business} />

//       {/* ================= TECHNOLOGY ================= */}
//       <CategorySection title="Technology" posts={technology} />

//       {/* ================= HEALTH ================= */}
//       <CategorySection title="Health" posts={health} />

//       {/* ================= NEWSLETTER ================= */}
//       <Newsletter />
//     </>
//   );
// }

// export default Home;









//here api collection   but bad condition rule here need updation    






//perfect here down code



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Hero from "../Components/Hero";
// import CategorySection from "../Components/CategorySection";
// import Newsletter from "../Components/Newsletter";
// import BreakingNews from "../Components/BreakingNews";

// function Home() {
//   const navigate = useNavigate();

//   // ================= STATE =================
//   const [business, setBusiness] = useState([]);
//   const [technology, setTechnology] = useState([]);
//   const [health, setHealth] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ================= DUMMY FALLBACK DATA =================
//   const dummyBusiness = [
//     {
//       id: "b1",
//       title: "Corporate Earnings Drive Stock Market Growth",
//       description: "Strong quarterly results boost investor confidence.",
//       image:
//         "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa",
//     },
//     {
//       id: "b2",
//       title: "Indian Startups See Record Funding in 2025",
//       description: "VC investments surge across fintech and AI sectors.",
//       image:
//         "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
//     },
//     {
//       id: "b3",
//       title: "RBI Maintains Interest Rates",
//       description: "Focus remains on inflation control and stability.",
//       image:
//         "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
//     },
//   ];

//   const dummyTechnology = [
//     {
//       id: "t1",
//       title: "AI Transforming Software Development",
//       description: "Developers adopt AI tools to boost productivity.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475",
//     },
//     {
//       id: "t2",
//       title: "Cybersecurity Becomes Top Priority",
//       description: "Companies invest heavily in digital security.",
//       image:
//         "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
//     },
//   ];

//   const dummyHealth = [
//     {
//       id: "h1",
//       title: "Doctors Recommend Daily Exercise",
//       description: "Regular physical activity reduces health risks.",
//       image:
//         "https://images.unsplash.com/photo-1580281657521-2bfae3b9e8a7",
//     },
//     {
//       id: "h2",
//       title: "Healthy Diet Key to Long Life",
//       description: "Nutrition experts highlight balanced eating habits.",
//       image:
//         "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
//     },
//   ];

//   // ================= SEO =================
//   useEffect(() => {
//     document.title =
//       "Quick ScaleUp News – Latest Business, Technology & Health News";

//     const setMeta = (name, content) => {
//       let meta = document.querySelector(`meta[name="${name}"]`);
//       if (!meta) {
//         meta = document.createElement("meta");
//         meta.name = name;
//         document.head.appendChild(meta);
//       }
//       meta.content = content;
//     };

//     setMeta(
//       "description",
//       "Quick ScaleUp News provides fast and reliable Business, Technology, Health and World news."
//     );
//   }, []);

//   // ================= API FETCH =================
//   const fetchCategory = async (category) => {
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_NEWS_API_URL}?country=us&category=${category}&pageSize=6&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
//       );

//       const data = await res.json();

//       if (!data.articles || !Array.isArray(data.articles)) {
//         throw new Error("Invalid API structure");
//       }

//       return data.articles.map((item, index) => ({
//         id: `${category}-${index}`,
//         title: item.title || "News will be updated soon",
//         description:
//           item.description || "More details will be available shortly.",
//         image:
//           item.urlToImage ||
//           "https://via.placeholder.com/600x400?text=No+Image",
//       }));
//     } catch (error) {
//       console.warn(`API failed for ${category}, using dummy data`);
//       return null;
//     }
//   };

//   const fetchNews = async () => {
//     setLoading(true);

//     const [businessData, techData, healthData] = await Promise.all([
//       fetchCategory("business"),
//       fetchCategory("technology"),
//       fetchCategory("health"),
//     ]);

//     setBusiness(businessData?.length ? businessData : dummyBusiness);
//     setTechnology(techData?.length ? techData : dummyTechnology);
//     setHealth(healthData?.length ? healthData : dummyHealth);

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   // ================= UI =================
//   return (
//     <main className="bg-gray-100">
//       {/* Breaking News */}
//       <BreakingNews />

//       {/* Hero */}
//       <Hero />

//       {/* ================= TOP STORIES ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-14">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold">Top Stories</h2>
//           <button
//             onClick={() => navigate("/world")}
//             className="text-red-600 font-semibold hover:underline"
//           >
//             View All
//           </button>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Government Policies Shape National Economy",
//               category: "Politics",
//               image:
//                 "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
//               path: "/politics",
//             },
//             {
//               title: "Global Markets React to Inflation Trends",
//               category: "World",
//               image:
//                 "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
//               path: "/world",
//             },
//             {
//               title: "Corporate Earnings Drive Stock Market Growth",
//               category: "Business",
//               image:
//                 "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa",
//               path: "/business",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(item.path)}
//               className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-56 w-full object-cover rounded-t-xl"
//               />
//               <div className="p-4">
//                 <span className="text-red-600 text-sm font-semibold">
//                   {item.category}
//                 </span>
//                 <h3 className="font-bold mt-2">{item.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CATEGORY SECTIONS ================= */}
//       <CategorySection title="Business" posts={business} />
//       <CategorySection title="Technology" posts={technology} />
//       <CategorySection title="Health" posts={health} />

//       {/* ================= NEWSLETTER ================= */}
//       <Newsletter />
//     </main>
//   );
// }

// export default Home;







import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import Newsletter from "../Components/Newsletter";
import BreakingNews from "../Components/BreakingNews";

/* ================= DUMMY FALLBACK ================= */
const dummyNews = (category) => [
  {
    id: `${category}-1`,
    title: `${category} news update will be available soon`,
    description:
      "We are fetching the latest updates. Please stay connected with Quick ScaleUp News.",
    image: "/news-placeholder.jpg",
  },
  {
    id: `${category}-2`,
    title: `Top ${category} story of the day`,
    description:
      "This section will soon show real-time news fetched from trusted sources.",
    image: "/news-placeholder.jpg",
  },
  {
    id: `${category}-3`,
    title: `Important ${category} headline`,
    description:
      "Our team is working to bring you the most accurate and latest news.",
    image: "/news-placeholder.jpg",
  },
];

function Home() {
  const navigate = useNavigate();

  /* ================= STATE ================= */
  const [business, setBusiness] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [health, setHealth] = useState([]);

  /* ================= SEO ================= */
  useEffect(() => {
    document.title =
      "Quick ScaleUp News – Latest Business, Technology, Health & World News";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta(
      "description",
      "Quick ScaleUp News brings you the latest Business, Technology, Health, Politics and World news with fast and reliable updates."
    );

    setMeta(
      "keywords",
      "Business News, Technology News, Health News, World News, Politics News, Indian News"
    );
  }, []);

  /* ================= API FETCH ================= */
  const fetchCategory = async (category) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_NEWS_API_URL}?q=${category}&pageSize=6&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );

      const data = await res.json();

      // ❌ Invalid or empty response
      if (!data.articles || !Array.isArray(data.articles)) {
        console.warn("Invalid API response, loading dummy news");
        return dummyNews(category);
      }

      // ✅ Map + image safety
      return data.articles.slice(0, 3).map((item, index) => ({
        id: `${category}-${index}`,
        title: item.title || "Latest news update",
        description:
          item.description ||
          "More details will be available soon on Quick ScaleUp News.",
        image:
          item.urlToImage && item.urlToImage.startsWith("https")
            ? item.urlToImage
            : "/news-placeholder.jpg",
      }));
    } catch (error) {
      console.error("News API Error:", error);
      return dummyNews(category);
    }
  };

  const fetchNews = async () => {
    const [b, t, h] = await Promise.all([
      fetchCategory("business"),
      fetchCategory("technology"),
      fetchCategory("health"),
    ]);

    setBusiness(b);
    setTechnology(t);
    setHealth(h);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  /* ================= UI ================= */
  return (
    <main className="bg-gray-100">
      {/* Breaking News */}
      <BreakingNews />

      {/* Hero */}
      <Hero />

      {/* ================= TOP STORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Top Stories</h2>
          <button
            onClick={() => navigate("/world")}
            className="text-red-600 font-semibold hover:underline"
          >
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {business.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate("/business")}
              className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => (e.target.src = "/news-placeholder.jpg")}
                className="h-56 w-full object-cover rounded-t-xl"
              />
              <div className="p-4">
                <span className="text-red-600 text-sm font-semibold">
                  Business
                </span>
                <h3 className="font-bold mt-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BUSINESS ================= */}
      <CategorySection title="Business" posts={business} />

      {/* ================= TECHNOLOGY ================= */}
      <CategorySection title="Technology" posts={technology} />

      {/* ================= HEALTH ================= */}
      <CategorySection title="Health" posts={health} />

      {/* ================= NEWSLETTER ================= */}
      <Newsletter />
    </main>
  );
}

export default Home;
