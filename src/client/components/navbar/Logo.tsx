import { Component1Icon } from "@radix-ui/react-icons";

export default function Logo() {
  return (
    <a href="/#hero" aria-label="Icon to hero section in root page.">
      <div
        className="flex flex-row items-center gap-2 text-lg font-semibold
        text-textTitle dark:text-textTitleDark"
      >
        <Component1Icon className="w-7 h-7" />
        Edson Martinelli
      </div>
    </a>
  );
}
