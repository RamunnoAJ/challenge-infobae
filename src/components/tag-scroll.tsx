import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tag } from "../types";

export default function TagScroll({
  tags,
  selectedTag,
  setSelectedTag,
}: {
  tags: Tag[];
  selectedTag: Tag | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<Tag | null>>;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        className="absolute -left-4 z-10 bg-orange-300 p-2 rounded-full shadow-md hover:bg-orange-400"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={20} />
      </button>

      <section
        ref={scrollRef}
        className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide px-8"
      >
        {tags?.map((t) => (
          <button
            key={t.slug}
            className={`${
              selectedTag?.name === t.name ? "bg-orange-300" : "bg-orange-200"
            } px-4 py-2 cursor-pointer text-xs font-medium rounded-md transition-all ease-in-out duration-300`}
            onClick={() => setSelectedTag(t)}
          >
            {t.name}
          </button>
        ))}
      </section>

      <button
        className="absolute -right-4 z-10 bg-orange-300 p-2 rounded-full shadow-md hover:bg-orange-400"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
