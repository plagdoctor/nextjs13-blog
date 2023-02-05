import PostPreview from "@/components/PostPreview";

import { getPostMetadata } from "../components/getPostMetadata";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post}></PostPreview>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {postPreviews}</div>
  );
};

export default HomePage;
