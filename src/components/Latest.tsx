import { posts } from "@/db/db";
import Card from "./Card";

const Latest = () => {
  return (
    <section className="pt-[90px] pb-[90px] border-b-2 border-[#999]">
      <p className="text-[10px] mb-[30px] text-[#999] font-libre">
        LATEST POSTS
      </p>
      <div className="w-full min-h-screen md:grid grid-cols-4 gap-[25px]">
        {posts.slice(0, 8).map((post) => {
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
      <button
        type="button"
        className="uppercase mt-[90px] px-[25px] py-[20px] border border-black text-[10px] font-libre flex items-center justify-center mx-auto transition hover:bg-black hover:text-white"
      >
        view all latest posts
      </button>
    </section>
  );
};

export default Latest;
