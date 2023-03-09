import { ReactNode } from "react";

interface CardTitleProps {
  children: ReactNode;
}

export default function CardTitle({ children }: CardTitleProps) {
  return (
    <h4
      className="text-lg font-bold mb-4 w-full pb-4 border-b-[1px]
    border-separator dark:border-separatorDark text-textTitle 
    dark:text-textTitleDark"
    >
      {children}
    </h4>
  );
}
