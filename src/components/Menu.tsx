"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setMenu((prev) => !prev);
  };

  const openMenu = (e: any) => {
    if (!e.target.className.includes("menu")) {
      setMenu(false);
    }
  };

  return (
    <div className="lg:hidden menu">
      <button title="menu" type="button" onClick={handleOpenMenu}>
        <FaBars size={22} />
      </button>
      <div
        onClick={openMenu}
        style={{ top: menu ? "0" : "-1000px" }}
        className="absolute transition-all duration-500 left-0 z-[-3] flex items-end justify-end w-full h-screen px-8 pb-8"
      >
        <nav
          style={{ top: menu ? "0" : "-1000px" }}
          className="menu absolute shadow transition-all duration-500 left-0 z-[-1] flex items-end justify-end w-full h-[350px] px-8 pb-8 bg-white"
        >
          <ul className="flex flex-col gap-[40px]">
            <li>
              <Link
                onClick={handleOpenMenu}
                className="text-lg font-libre"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOpenMenu}
                className="text-lg font-libre"
                href="/latest"
              >
                Latest
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOpenMenu}
                className="text-lg font-libre"
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
