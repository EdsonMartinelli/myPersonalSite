import { Component1Icon } from "@radix-ui/react-icons";

export default function Logo() {
  return (
    <div
      className="flex flex-row items-center gap-2 text-lg font-semibold
        text-textTitle dark:text-textTitleDark"
    >
      <Component1Icon className="w-7 h-7" />
      My Personal Project
    </div>
  );
}
