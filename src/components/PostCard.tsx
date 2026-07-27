import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { PostPlaceholder } from "@/lib/placeholder-data";

interface Props {
  post: PostPlaceholder;
  aspect?: string;
}

export default function PostCard({ post, aspect = "aspect-[4/5]" }: Props) {
  return (
    <Link href={`/writing/${post.slug}`} className="group mb-8 block break-inside-avoid">
      <div className={`overflow-hidden rounded-lg ${aspect}`}>
        <ImagePlaceholder className="h-full w-full" />
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-xs text-neutral-500">
          {post.date} · {post.tag}
        </p>
        <h3 className="text-lg font-bold text-neutral-900">{post.title}</h3>
      </div>
    </Link>
  );
}
