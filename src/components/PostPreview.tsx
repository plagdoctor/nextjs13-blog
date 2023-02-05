import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-lg
    bg-white"
    >
      <p className="text-sm text-slate-400">{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-lg text-violet-600 hover:underline mb-4">
          {props.title}
        </h2>
      </Link>
      <p className="text-slate-700">{props.sub}</p>
      <p className="text-slate-400 text-xs">
        {props.tags.split(", ").map((tag) => "#" + tag + " ")}
      </p>
    </div>
  );
};

export default PostPreview;
