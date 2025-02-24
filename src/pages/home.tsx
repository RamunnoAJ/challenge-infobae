import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/base";
import { Tag } from "../types";
import PostCard from "../components/post-card";
import TagScroll from "../components/tag-scroll";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${BASE_URL}/posts/tags`);
        setTags(response.data);
      } catch (e) {
        console.error(e);
      }
    })();

    (async () => {
      try {
        const response = await axios.get(`${BASE_URL}/posts?limit=20`);
        setPosts(response.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedTag) {
        try {
          const response = await axios.get(
            `${BASE_URL}/posts/tag/${selectedTag.slug}`,
          );
          setPosts(response.data.posts);
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, [selectedTag]);

  return (
    <main className="space-y-8 my-10 mx-auto">
      <TagScroll
        tags={tags}
        setSelectedTag={setSelectedTag}
        selectedTag={selectedTag}
      />
      <section className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-8 items-center justify-center">
        {posts.map((p) => (
          <PostCard post={p} key={p.id} />
        ))}
      </section>
    </main>
  );
}
