import { ReactNode } from "react";

interface SocialIcons {
  children: ReactNode;
}

export default function SocialIcons({ children }: SocialIcons) {
  return (
    <button
      className="w-[48px] h-[48px] p-2 rounded-md bg-component flex items-center
      justify-center dark:bg-componentDark text-textComponent dark:text-textComponentDark
    hover:bg-componentHover dark:hover:bg-componentHoverDark border-[1px]
    border-separator dark:border-separatorDark"
    >
      {children}
    </button>
  );
}
