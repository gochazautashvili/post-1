import { postsType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, text, link, url }: postsType) => {
  return (
    <div className="flex flex-col gap-[20px] py-[25px]">
      <div className="w-full max-h-[430px] cursor-pointer">
        <Image
          className="w-full h-auto object-cover"
          src={url}
          alt={title}
          width={360}
          height={220}
        />
      </div>
      <div className="flex flex-col">
        <Link className="text-[10px] text-[#999] uppercase font-libre" href="/">
          {title}
        </Link>
        <Link
          className="mb-6 my-4 md:my-2 text-[20px] uppercase font-tenor"
          href="/"
        >
          {text}
        </Link>
        <Link className="font-libre uppercase text-[10px]" href="/">
          {link}
        </Link>
      </div>
    </div>
  );
};

export default Card;
