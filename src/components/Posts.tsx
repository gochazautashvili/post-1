import { posts } from "@/db/db";
import Card from "./Card";

const Posts = () => {
  return (
    <section className="w-full min-h-screen md:grid grid-cols-3 gap-[25px] pb-[90px] border-b-2 border-[#999]">
      {posts.slice(0, 6).map((post) => {
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
    </section>
  );
};

export default Posts;
