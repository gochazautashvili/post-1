import Image from "next/image";

const Bg = () => {
  return (
    <section className="relative w-full h-[40vh] md:h-[70vh] max-h-[600px]">
      <Image
        className="w-full h-full"
        src="https://assets.website-files.com/5b471332a0fccf5aded82f96/5b48f0f59918ea8b73ae22ee_image-header.jpg"
        alt="about-hero-img"
        fill
      />
    </section>
  );
};

export default Bg;
