import { team } from "@/db/db";
import Profile from "./Profile";

const Team = () => {
  return (
    <section className="w-full max-w-screen-lg xl:max-w-screen-xl px-3 mx-auto border-b border-[#999]">
      <section className="py-[90px]">
        <p className="text-[20px] mb-[30px] text-black font-tenor">OUR TEAM</p>
        <div className="w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-[50px] gap-x-[25px]">
          {team.map((post) => {
            return (
              <Profile
                key={post.id}
                title={post.title}
                text={post.text}
                url={post.url}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Team;
