import { useEffect, useState } from "react";
import { Post, User } from "../types";
import axios from "axios";
import { BASE_URL } from "../services/base";

export default function PostCard({ post }: { post: Post }) {
  const [user, setUser] = useState<User | null>(null);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/${post.userId}`);
        setUser(response.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <article className="shadow-md rounded-md max-w-[260px] h-full">
      {!showComments ? (
        <>
          <img
            width={260}
            height={180}
            className="rounded-t-md"
            src="https://dummyjson.com/image/260x180"
          />
          <div className="p-4 space-y-4">
            <div className="flex gap-2 items-center justify-center w-full">
              {post.tags.map((t, index) => (
                <span
                  key={`${t}-${index}`}
                  className="px-4 py-2 text-xs rounded-full bg-orange-100 font-medium"
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">
                {user ? `${user?.firstName} ${user?.lastName}` : "Loading..."}
              </h1>
              <button
                onClick={() => setShowComments(true)}
                className="text-sm text-orange-500 font-medium hover:text-orange-700 hover:underline transition-all duration-300 ease-in-out cursor-pointer"
              >
                Comments
              </button>
            </div>
          </div>{" "}
        </>
      ) : (
        <></>
      )}
    </article>
  );
}
