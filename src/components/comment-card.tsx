import { Heart } from "lucide-react";
import { Comment } from "../types";
import { capitalizeFirstLetter } from "../utils";

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <article className="w-full h-full border-b last:border-none py-2 border-gray-300 relative">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold">
          {capitalizeFirstLetter(comment.user.username)}
        </h2>
        <span className="flex gap-1 font-bold items-center">
          {comment.likes} <Heart className="w-4 h-4" />
        </span>
      </div>
      <p>{comment.body}</p>
    </article>
  );
}
