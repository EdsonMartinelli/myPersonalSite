import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import AsideContent from "./AsideContent";
import SocialIcons from "./SocialIcons";

export default function ThisStart() {
  return (
    <div
      id="this.start"
      className="w-full max-h-[900px] h-screen bg-radial dark:bg-radialDark flex flex-col"
    >
      <div
        className="w-full h-full bg-grid dark:bg-gridDark flex flex-row 
            items-center px-16 box-border"
      >
        <main className="flex-1 p-3 box-border">
          <h2
            className="font-black text-4xl tracking-wide text-textTitle 
              dark:text-textTitleDark lg:text-5xl"
          >
            Olá, eu sou
          </h2>
          <h1
            className="font-black text-5xl tracking-wide mb-16 text-textTitle
               dark:text-textTitleDark lg:text-6xl"
          >
            Edson Martinelli
          </h1>
          <span
            className="font-light text-lg block mb-16 text-textComponent
                 dark:text-textComponentDark"
          >
            Estudante de Ciência da Computação na Universidade Federal do ABC,
            Full Stack Developer e este é meu site pessoal. Aqui você poderá
            descobrir um pouco sobre mim e encontrar meus projetos.
          </span>

          <div className="flex flex-row gap-5">
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
        </main>
        <aside className="hidden flex-1 lg:flex items-center justify-center ">
          <div className="w-[320px] h-[320px] rounded-full bg-purple-500 mb-8"></div>
        </aside>
      </div>
    </div>
  );
}
