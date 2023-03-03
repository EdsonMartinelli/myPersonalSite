"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import NavigationLink from "./NavigationLink";
import * as Separator from "@radix-ui/react-separator";
import * as Dialog from "@radix-ui/react-dialog";
import ToogleTheme from "./ToogleTheme";

export default function Menu() {
  return (
    <>
      <NavigationMenu.Root className="w-fit hidden lg:flex lg:justify-center lg:items-center">
        <NavigationMenu.List className="flex justify-center items-center py-[10px] gap-2 ">
          <NavigationMenu.Item>
            <NavigationLink path="/#hero">Inicio</NavigationLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationLink path="/#about">Sobre</NavigationLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationLink path="/#skills">Habilidades</NavigationLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationLink path="/#contato">Contato</NavigationLink>
          </NavigationMenu.Item>
          <Separator.Root
            orientation="vertical"
            decorative={true}
            className=" h-[35px] w-[1px] bg-separator dark:bg-separatorDark mr-4"
          />
          <NavigationMenu.Item>
            <ToogleTheme />
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <Dialog.Root defaultOpen={false}>
        <Dialog.Trigger asChild>
          <button
            className="lg:hidden w-[32px] h-[32px] flex items-center justify-center rounded-md
            hover:bg-componentHover dark:hover:bg-componentHoverDark
            text-textComponent dark:text-textComponentDark"
          >
            <HamburgerMenuIcon
              className="w-5 h-5 text-textComponent 
                             dark:text-textComponentDark"
            />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            className="backdrop-blur-[1px] fixed inset-0 
            data-[state=open]:animate-overlayShow
            data-[state=closed]:animate-overlayClose"
          />
          <Dialog.Content
            className="fixed top-[16px] right-[16px] rounded-md w-1/2
            min-w-[256px] max-w-[256px] bg-app dark:bg-appDark px-[16px]
            py-[15px] border-[1px] border-separator dark:border-separatorDark 
            data-[state=open]:animate-contentShow data-[state=closed]:animate-contentClose"
          >
            <Dialog.Title
              className="absolute top-[16px] left-[24px] text-textComponent
            dark:text-textComponentDark flex items-center h-[28px] text-xs font-bold"
            >
              <div>Menu</div>
            </Dialog.Title>

            <div className="mt-[64px] w-full h-full">
              <NavigationMenu.Root orientation="vertical">
                <NavigationMenu.List className=" flex flex-col gap-[8px]">
                  <NavigationMenu.Item>
                    <NavigationLink path="#hero">Inicio</NavigationLink>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationLink path="#about">Sobre</NavigationLink>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationLink path="#skills">Habilidades</NavigationLink>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationLink path="#contato">Contato</NavigationLink>
                  </NavigationMenu.Item>
                  <Separator.Root
                    orientation="horizontal"
                    decorative={true}
                    className="h-[1px] w-full bg-separator dark:bg-separatorDark
                    my-2"
                  />
                  <NavigationMenu.Item
                    className="w-full flex items-center 
                                       justify-between"
                  >
                    <span
                      className="text-sm pl-[8px] text-textComponent 
                        dark:text-textComponentDark"
                    >
                      Switch Theme
                    </span>
                    <ToogleTheme />
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>

            <Dialog.Close asChild>
              <button
                className="absolute top-[16px] right-[16px] h-[28px] w-[28px] flex 
                items-center justify-center rounded-md
                hover:bg-componentHover dark:hover:bg-componentHoverDark
                text-textComponent dark:text-textComponentDark"
                aria-label="Close"
              >
                <Cross1Icon className="w-3 h-3" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
