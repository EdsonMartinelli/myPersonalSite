import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  DiscordLogoIcon,
  ArrowDownIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

//https://api.github.com/users/EdsonMartinelli , avatar_url
export default function Hero({ avatar }: { avatar: string }) {
  console.log(avatar);
  return (
    <div
      id="hero"
      className="w-full max-h-[800px] h-screen bg-radial dark:bg-radialDark"
    >
      <div
        className="w-full h-full bg-grid dark:bg-gridDark overflow-hidden 
           flex flex-col justify-around"
      >
        <div
          className="w-full box-border grid 
            grid-cols-1 grid-rows-[25%_55%_10%_10%] p-[2rem] gap-4
            lg:grid-rows-[40%_40%_10%_10%]
            xl:grid-cols-[2fr_3fr] xl:grid-rows-[80%_20%] xl:p-[4rem] xl:pr-[8rem]
            xl:gap-x-32 xl:gap-y-16 "
        >
          <aside className="flex items-end justify-center">
            <div
              className="rounded-full bg-purple-500 outline outline-textTitle
              dark:outline-textTitleDark w-[128px] h-[128px] outline-[3px] outline-offset-4
              lg:w-[200px] lg:h-[200px] lg:outline-[5px] lg:outline-offset-6
              xl:w-[300px] xl:h-[300px] xl:outline-[6px] xl:outline-offset-8 overflow-hidden"
            >
              <Image src={avatar} alt="avatar" width={300} height={300} />
            </div>
          </aside>

          <main className="flex items-end justify-end">
            <div>
              <h2
                className="font-black text-3xl tracking-wide text-textTitle 
                    dark:text-textTitleDark lg:text-5xl text-center xl:text-left"
              >
                Olá, meu nome é
              </h2>
              <h1
                className="font-black text-4xl tracking-wide mb-16 text-textTitle
                    dark:text-textTitleDark lg:text-6xl text-center xl:text-left"
              >
                Edson Martinelli
              </h1>
              <span
                className="font-light text-lg block text-textComponent
                        dark:text-textComponentDark text-center xl:text-left"
              >
                Sou estudante de Ciência da Computação na Universidade Federal
                do ABC, Full Stack Developer e este é meu site pessoal. Aqui
                você poderá descobrir um pouco sobre mim e encontrar meus
                projetos.
              </span>
            </div>
          </main>

          <div className="flex flex-row gap-5 justify-center">
            <SocialIcons>
              <GitHubLogoIcon className="h-full w-full" />
            </SocialIcons>
            <SocialIcons>
              <LinkedInLogoIcon className="h-full w-full" />
            </SocialIcons>
            <SocialIcons>
              <DiscordLogoIcon className="h-full w-full" />
            </SocialIcons>
            <SocialIcons>
              <EnvelopeClosedIcon className="h-5/6 w-5/6" />
            </SocialIcons>
          </div>

          <div className="flex items-start justify-center xl:justify-end">
            <button
              className="py-2 px-4 rounded-md bg-component flex items-center justify-center
              dark:bg-componentDark text-borderTextImportant hover:text-borderTextImportantHover
              hover:bg-componentHover dark:hover:bg-componentHoverDark
              border-[1px] border-borderTextImportant hover:border-borderTextImportantHover text-lg
              flex-row gap-2"
            >
              Baixar Currículo <DownloadIcon className="w-[28px] h-[28px]" />
            </button>
          </div>
        </div>

        <div className="w-full h-fit flex justify-center">
          <div
            className="animate-bounce w-[48px] h-[48px] rounded-full flex items-center
            justify-center p-3 border-[1px] bg-component text-textComponent
            border-separator dark:bg-componentDark dark:text-textComponentDark
            dark:border-separatorDark hover:bg-componentHover dark:hover:bg-componentHoverDark
            hover:animate-none"
          >
            <ArrowDownIcon className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
