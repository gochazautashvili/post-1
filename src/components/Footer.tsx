import Image from "next/image";
import Link from "next/link";
import Input from "./Input";
import Select from "./Select";

const Footer = () => {
  return (
    <footer className="bg-[#141414] w-full py-[90px] px-[30px]">
      <div className="w-full max-w-screen-lg mx-auto px-3">
        <div className="flex items-end gap-x-4">
          <Link href="/">
            <Image
              src="https://assets.website-files.com/5b471332a0fccf5aded82f96/5b4759f1ee75f16151397de3_logo-white.svg"
              alt="logo"
              width={135}
              height={17}
              priority
            />
          </Link>
          <p className="text-[#666] font-libre text-[10px]">
            © 2018 NOICELAND™, ALL RIGHTS RESERVED
          </p>
        </div>
        <hr className="w-full h-[1px] my-[60px] bg-[#4d4d4d] border-none" />
        <p className="font-libre text-[10px] mb-[15px] text-[#666]">
          SUBSCRIBE TO NEWSLETTER
        </p>
        <Input />
        <Select />
        <div className="flex flex-wrap justify-between gap-[25px] mt-[60px]">
          <div className="flex flex-col gap-[10px]">
            <p className="mb-[5px] font-libre text-[10px] text-[#666]">
              INFORMATION
            </p>
            <Link className="font-libre text-[14px] text-white" href="/">
              about
            </Link>
            <Link className="font-libre text-[14px] text-white" href="/">
              contact
            </Link>
            <Link className="font-libre text-[14px] text-white" href="/">
              terms
            </Link>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="mb-[5px] font-libre text-[10px] text-[#666]">
              FOLLOW US
            </p>
            <Link className="font-libre text-[14px] text-white" href="/">
              instagram
            </Link>
            <Link className="font-libre text-[14px] text-white" href="/">
              facebook
            </Link>
            <Link className="font-libre text-[14px] text-white" href="/">
              twitter
            </Link>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="mb-[5px] font-libre text-[10px] text-[#666]">
              TEMPLATE
            </p>
            <Link className="font-libre text-[14px] text-white" href="/">
              Image
            </Link>
            <Link className="font-libre text-[14px] text-white" href="/">
              License
            </Link>
            <Link className="font-libre text-[14px] text-white" href="/">
              Info
            </Link>
            <Link className="font-libre text-[14px] text-white" href="/">
              Powered by
            </Link>
            <Link className="font-libre text-[14px] text-white" href="/">
              Webflow
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
