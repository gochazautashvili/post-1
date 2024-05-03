import { teamType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ title, text, url }: teamType) => {
  return (
    <div className="flex flex-col">
      <div className="w-full max-h-[200px] cursor-pointer">
        <Image
          className="w-auto min-w-[280px] h-full object-cover"
          src={url}
          alt={title}
          width={285}
          height={200}
        />
      </div>
      <div className="flex flex-col mt-[15px]">
        <Link
          className="text-[18px] font-bold text-black uppercase font-source"
          href="/"
        >
          {title}
        </Link>
        <Link className="text-[10px] text-[#999] uppercase font-tenor" href="/">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default Profile;
