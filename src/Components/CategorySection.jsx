// import PostCard from "./PostCard";

// function CategorySection({ title }) {
//     return (
//         <section className="max-w-7xl mx-auto px-6 py-10">
//             <h2 className="text-2xl font-bold mb-6">{title}</h2>
//             <div className="grid md:grid-cols-3 gap-6">
//                 <PostCard />
//                 <PostCard />
//                 <PostCard />
//             </div>
//         </section>
//     );
// }


// export default CategorySection;




// import PostCard from "./PostCard";

// // Health images
// import health1 from "../assets/health/health1.jpg";
// import health2 from "../assets/health/health2.jpg";
// import health3 from "../assets/health/health3.jpg";

// // Business images
// import business1 from "../assets/business/business1.jpg";
// import business2 from "../assets/business/business2.jpg";
// import business3 from "../assets/business/business3.jpg";

// // Technology images
// import technology1 from "../assets/technology/technology1.jpg";
// import technology2 from "../assets/technology/technology2.jpg";
// import technology3 from "../assets/technology/technology3.jpg";

// function CategorySection({ title }) {
//   const data = {
//     Health: [
//       { id: 1, image: health1, title: "Healthy Living Tips" },
//       { id: 2, image: health2, title: "Morning Yoga Benefits" },
//       { id: 3, image: health3, title: "Foods That Boost Immunity" },
//     ],
//     Business: [
//       { id: 1, image: business1, title: "Market Trends Today" },
//       { id: 2, image: business2, title: "Startup Growth in India" },
//       { id: 3, image: business3, title: "Investment Tips 2025" },
//     ],
//     Technology: [
//       { id: 1, image: technology1, title: "AI Changing the World" },
//       { id: 2, image: technology2, title: "Top Web Dev Trends" },
//       { id: 3, image: technology3, title: "Future of Programming" },
//     ],
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-10">
//       <h2 className="text-2xl font-bold mb-6">{title}</h2>

//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//         {data[title].map((post) => (
//           <PostCard
//             key={post.id}
//             image={post.image}
//             category={title}
//             title={post.title}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CategorySection;




// import PostCard from "./PostCard";

// import health1 from "../assets/health/health1.jpg";
// import health2 from "../assets/health/health2.jpg";
// import health3 from "../assets/health/health3.jpg";

// import business1 from "../assets/business/business1.jpg";
// import business2 from "../assets/business/business2.jpg";
// import business3 from "../assets/business/business3.jpg";

// import technology1 from "../assets/technology/technology1.jpg";
// import technology2 from "../assets/technology/technology2.jpg";
// import technology3 from "../assets/technology/technology3.jpg";

// function CategorySection({ title }) {
//   const data = {
//     Health: [
//       { id: 1, image: health1, title: "Healthy Living Tips", description: "Health article details..." },
//       { id: 2, image: health2, title: "Morning Yoga Benefits", description: "Yoga details..." },
//       { id: 3, image: health3, title: "Boost Immunity Naturally", description: "Immunity tips..." },
//     ],
//     Business: [
//       { id: 1, image: business1, title: "Market Trends", description: "Market insights..." },
//       { id: 2, image: business2, title: "Startup Growth", description: "Startup news..." },
//       { id: 3, image: business3, title: "Investment Tips", description: "Investment ideas..." },
//     ],
//     Technology: [
//       { id: 1, image: technology1, title: "AI Revolution", description: "AI future..." },
//       { id: 2, image: technology2, title: "Web Trends", description: "Web dev..." },
//       { id: 3, image: technology3, title: "Programming Future", description: "Coding future..." },
//     ],
//   };

//   const posts = data[title];
//   if (!posts) return null;

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-10">
//       <h2 className="text-2xl font-bold mb-6">{title}</h2>

//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//         {posts.map(post => (
//           <PostCard
//             key={post.id}
//             {...post}
//             category={title}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CategorySection;


import { useNavigate } from "react-router-dom";

function CategorySection({ title, posts = [] }) {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>

        <button
          onClick={() => navigate(`/${title.toLowerCase()}`)}
          className="text-red-600 font-semibold hover:underline"
        >
          View All
        </button>
      </div>

      {/* EMPTY / LOADING */}
      {posts.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center text-gray-500">
          News loading… Please wait
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                navigate(`/news/${title.toLowerCase()}/${item.id}`, {
                  state: item,
                })
              }
              className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={item.image || "/news-placeholder.png"}
                alt={item.title}
                onError={(e) => {
                  e.currentTarget.src = "/news-placeholder.png";
                }}
                className="h-52 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h3 className="font-bold line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CategorySection;


