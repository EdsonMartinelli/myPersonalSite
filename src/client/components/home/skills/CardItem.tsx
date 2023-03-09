import { ReactNode } from "react";

interface CardItemProps {
  children: ReactNode;
  name: string;
  level: string;
}

export default function CardItem({ children, name, level }: CardItemProps) {
  return (
    <div
      className="p-3 flex text-textComponent dark:text-textComponentDark
      justify-between flex-row items-center gap-2"
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="w-[56px] h-[56px] p-[8px] border-[1px] border-separator
        dark:border-separatorDark rounded-md bg-componentActive 
        dark:bg-componentActiveDark flex items-center justify-center"
        >
          {children}
        </div>
        <span className="text-sm font-bold capitalize">{name}</span>
      </div>
      <span className="text-xs capitalize">{level}</span>
    </div>
  );
}
