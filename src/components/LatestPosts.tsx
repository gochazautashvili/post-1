import { posts } from "@/db/db";
import Card from "./Card";

const LatestPosts = () => {
  return (
    <section className="pt-[90px] pb-[90px]">
      <p className="text-4xl mb-[30px] text-black font-tenor">LATEST POSTS</p>
      <div className="w-full min-h-screen md:grid grid-cols-3 gap-[25px]">
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              title={post.title}
              text={post.text}
              link={post.link}
              url={post.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LatestPosts;
