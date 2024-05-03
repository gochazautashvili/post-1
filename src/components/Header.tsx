import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <header className="border-b-2 border-[#e6e6e6] fixed inset-0 z-50 h-[90px] w-full bg-white">
        <div className="flex w-full max-w-screen-lg px-7 mx-auto items-center justify-between h-full xl:max-w-screen-xl lg:px-2">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={135}
              height={17}
              priority
            />
          </Link>
          <nav className="hidden lg:flex">
            <ul className="flex">
              <li>
                <Link
                  className="text-sm px-5 font-libre hover:border-b-4 border-black pb-8 transition-all"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm px-5 font-libre hover:border-b-4 border-black pb-8 transition-all"
                  href="/latest"
                >
                  Latest
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm px-5 font-libre hover:border-b-4 border-black pb-8 transition-all"
                  href="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <Menu />
        </div>
      </header>
    </>
  );
};

export default Header;
