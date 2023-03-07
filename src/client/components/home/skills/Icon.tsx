import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
  name: string;
  level: string;
}

export default function Icon({ children, name, level }: IconProps) {
  return (
    <div
      className="p-3 flex text-textComponent dark:text-textComponentDark
      justify-between flex-row items-center gap-2"
    >
      <div className="flex flex-row items-center gap-2">
        <div className="w-[28px] h-[28px]">{children}</div>
        <span className="text-sm font-bold capitalize">{name}</span>
      </div>
      <span className="text-xs capitalize">{level}</span>
    </div>
  );
}
