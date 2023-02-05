import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

export const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      sub: matterResult.data.subs,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export default getPostMetadata;
