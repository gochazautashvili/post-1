import { featured } from "@/db/db";
import Card from "./Card";

const Featured = () => {
  return (
    <section className="pt-[90px]">
      <p className="text-[10px] mb-[30px] text-[#999] font-libre">
        LATEST POSTS
      </p>
      <div className="w-full min-h-screen md:grid grid-cols-2 gap-[25px] pb-[90px] border-b-2 border-[#999]">
        {featured.map((post) => {
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

export default Featured;
