import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/base";
import { Comment } from "../types";
import CommentCard from "./comment-card";
import { X } from "lucide-react";
import Spinner from "./spinner";

export default function PostComments({
  postId,
  setShowComment,
}: {
  postId: number;
  setShowComment: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${BASE_URL}/comments/post/${postId}`);
        setComments(response.data.comments);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col p-4 relative pt-8 items-center">
      <button
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => setShowComment(false)}
      >
        <X />
      </button>
      {loading ? (
        <Spinner />
      ) : comments && comments.length > 0 ? (
        comments?.map((c) => <CommentCard comment={c} key={c.id} />)
      ) : (
        <article className="h-full">No comments</article>
      )}
    </div>
  );
}
