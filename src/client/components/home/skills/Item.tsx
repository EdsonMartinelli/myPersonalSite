import { ReactNode } from "react";

interface ItemProps {
  children: ReactNode;
}

export default function Item({ children }: ItemProps) {
  return (
    <div
      className="w-[64px] h-[64px] p-[12px] flex items-center justify-center 
      rounded-full border-[1px] ml-[-8px] border-separator dark:border-separatorDark
      bg-component dark:bg-componentDark"
    >
      {children}
    </div>
  );
}
