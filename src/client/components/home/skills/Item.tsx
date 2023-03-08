import { ReactNode } from "react";

interface ItemProps {
  children: ReactNode;
}

export default function Item({ children }: ItemProps) {
  return (
    <div className="w-[48px] h-[48px] p-[4px] flex items-center justify-center">
      {children}
    </div>
  );
}
