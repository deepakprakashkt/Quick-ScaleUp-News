import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/*
  This component:
  - Loads recent news for ALL navbar categories
  - Works with API
  - Falls back to dummy data if API fails
*/

const categories = [
  "business",
  "health",
  "technology",
  "world",
  "politics",
  "arts",
  "science",
];

const dummyData = [
  {
    id: "dummy-1",
    title: "Breaking update coming soon",
    category: "business",
    description: "Latest news will be updated shortly.",
  },
  {
    id: "dummy-2",
    title: "Major development in global affairs",
    category: "world",
    description: "Stay tuned for verified updates.",
  },
];

function RecentPosts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  const fetchRecentPosts = async () => {
    try {
      const responses = await Promise.all(
        categories.map((cat) =>
          fetch(
            `${import.meta.env.VITE_NEWS_API_URL}?category=${cat}&pageSize=1&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
          ).then((res) => res.json())
        )
      );

      const collected = responses.flatMap((res, index) => {
        if (!res.articles || !res.articles.length) return [];

        const article = res.articles[0];

        return {
          id: `${categories[index]}-recent`,
          title: article.title,
          description: article.description,
          image:
            article.urlToImage ||
            "https://via.placeholder.com/300x200?text=News",
          category: categories[index],
        };
      });

      setPosts(collected.length ? collected : dummyData);
    } catch (error) {
      console.error("Recent posts API failed, using dummy data");
      setPosts(dummyData);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() =>
              navigate(`/news/${post.category}/${post.id}`, {
                state: post,
              })
            }
            className="cursor-pointer hover:text-red-600 transition"
          >
            <span className="block text-xs uppercase text-gray-500">
              {post.category}
            </span>
            <span className="font-semibold">{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentPosts;
