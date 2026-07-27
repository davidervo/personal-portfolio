import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { posts } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Writing",
};

const aspects = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/5]", "aspect-square"];

export default function WritingPage() {
  return (
    <>
      <h1 className="mb-10 text-3xl font-medium tracking-tight text-neutral-900">Writing</h1>
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {posts.map((post, index) => (
          <PostCard key={post.slug} post={post} aspect={aspects[index % aspects.length]} />
        ))}
      </div>
    </>
  );
}
