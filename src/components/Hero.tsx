import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-14 w-full lg:flex lg:gap-x-[50px]">
      <Link className="lg:flex-[1.5]" href="/">
        <div className="w-full h-full max-h-[560px]">
          <Image
            className="w-full h-auto"
            src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e5a3c57559300cd83d22_image-15.jpg"
            alt="hero-img"
            width={600}
            height={500}
            priority
          />
        </div>
      </Link>
      <div className="w-full mt-7 flex flex-col lg:flex-[0] xl:flex-[0.5px] lg:mt-0">
        <Link className="text-[10px] text-[#999] uppercase font-libre" href="/">
          ILLUSTRATION
        </Link>
        <Link
          className="mb-6 mt-4 text-[20px] uppercase font-tenor sm:text-4xl"
          href="/"
        >
          JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY.
        </Link>
        <p className="text-[16px] text-[#666] font-source">
          Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam
          accusata, hinc justo falli id eum, ferri novum molestie eos cu.
        </p>
        <Link className="font-libre uppercase text-[10px] mt-7" href="/">
          BY RETA TORPHY
        </Link>
      </div>
    </section>
  );
};

export default Hero;
