"use client";
import Logo from "./Logo";
import * as Separator from "@radix-ui/react-separator";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-[-1px] w-full bg-app dark:bg-appDark z-[3]">
        <div className=" flex flex-row items-center w-full justify-between px-5 h-[64px]">
          <Logo />
          <Menu />
        </div>
        <Separator.Root
          orientation="horizontal"
          decorative={true}
          className="w-full h-[1px] bg-separator dark:bg-separatorDark"
        />
      </nav>
    </>
  );
}
