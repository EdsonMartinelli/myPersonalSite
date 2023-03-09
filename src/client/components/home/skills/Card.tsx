import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="flex-1 w-full p-4 box-border rounded-md h-full bg-app 
    dark:bg-appDark border-[1px] border-separator dark:border-separatorDark"
    >
      {children}
    </div>
  );
}
