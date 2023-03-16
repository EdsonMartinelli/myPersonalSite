"use client";
import { useThemeContext } from "@/client/contexts/ThemeContext";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Root, Item } from "@radix-ui/react-toggle-group";

export default function ThemeSwitcher() {
  const theme = useThemeContext();
  return (
    <Root
      type="single"
      value={theme.getTheme()}
      className="w-fit flex items-center rounded-md overflow-hidden gap-[1px]"
    >
      <Item
        value="light"
        onClick={() => theme.setLight()}
        className="w-[32px] h-[32px] flex items-center justify-center 
                bg-component dark:bg-componentDark
                hover:bg-componentHover dark:hover:bg-componentHoverDark
                text-app dark:text-textComponentDark
                data-[state=on]:bg-borderTextImportant"
        disabled={theme.getTheme() == "light"}
      >
        <AccessibleIcon.Root label="Turn light mode on">
          <SunIcon className="h-5 w-5" />
        </AccessibleIcon.Root>
      </Item>
      <Item
        value="dark"
        onClick={() => theme.setDark()}
        className="w-[32px] h-[32px] flex items-center justify-center 
                bg-component dark:bg-componentDark
                hover:bg-componentHover dark:hover:bg-componentHoverDark
                text-textComponent dark:text-app
                dark:data-[state=on]:bg-borderTextImportantDark"
        disabled={theme.getTheme() == "dark"}
      >
        <AccessibleIcon.Root label="Turn dark mode on">
          <MoonIcon className="h-5 w-5" />
        </AccessibleIcon.Root>
      </Item>
    </Root>
  );
}
