import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main className="mt-[90px] w-full max-w-screen-lg px-7 mx-auto lg:px-2 xl:max-w-screen-xl">
      <Hero />
      <Posts />
      <Latest />
      <Featured />
    </main>
  );
}
