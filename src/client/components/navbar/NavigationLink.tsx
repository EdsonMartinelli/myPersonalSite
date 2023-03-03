"use client";
import { Link } from "@radix-ui/react-navigation-menu";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavigationLinkProps {
  path: string;
  children: ReactNode;
}

export default function NavigationLink({
  children,
  path,
}: NavigationLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      className="flex items-center gap-2 p-[8px] rounded-md
            text-sm font-medium hover:cursor-pointer
            hover:bg-componentHover dark:hover:bg-componentHoverDark
            text-textComponent dark:text-textComponentDark
            data-[active]:bg-componentActive dark:data-[active]:bg-componentActiveDark"
      active={pathname == path}
      href={path}
    >
      {children}
    </Link>
  );
}
