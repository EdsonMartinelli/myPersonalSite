import { Pencil2Icon } from "@radix-ui/react-icons";
import Topic from "./Topic";

export default function About() {
  return (
    <div
      id="about"
      className="w-full h-fit xl:h-screen xl:max-h-[900px] transparent"
    >
      <div
        className="w-full h-full bg-grid dark:bg-gridDark p-8 xl:p-[8rem] 
        overflow-hidden"
      >
        <h2
          className="font-black text-2xl tracking-wide text-textTitle 
          dark:text-textTitleDark lg:text-3xl text-center xl:text-left mb-16"
        >
          Sobre
        </h2>
        <div className="flex flex-col gap-16 pb-16 xl:flex-row xl:gap-32">
          <span
            className="flex-1 font-light text-md block text-textComponent
          dark:text-textComponentDark text-justify xl:text-left"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet libero nec mi ultrices porttitor. Sed laoreet tempus mauris id
            tempor. Aenean accumsan in tellus nec aliquam. Nunc et nulla tortor.
            Etiam sollicitudin hendrerit risus sit amet molestie. Nulla mattis
            nisi ex, sit amet ultricies elit lobortis non. Quisque venenatis
            lorem quis congue mattis. Maecenas magna augue, maximus nec aliquet
            ut, sollicitudin a tortor. Curabitur lacinia arcu quis justo
            bibendum, fringilla imperdiet sem vestibulum. Donec ultrices
            ullamcorper semper. Maecenas interdum, nulla a suscipit viverra,
            lacus dolor convallis lacus, sit amet maximus justo ex in nisl. In
            dictum ligula nibh, ornare mollis sapien fermentum accumsan. Duis
            consectetur ex et mauris tempor lacinia. Etiam vestibulum nulla in
            metus auctor viverra. Ut rutrum eleifend libero, sed semper arcu
            pulvinar tristique.
            <br />
            Sed purus magna, porttitor eget semper nec, vulputate eu mi. Proin
            volutpat ultrices lacus eu accumsan. Maecenas vulputate ex hendrerit
            tincidunt tincidunt. Praesent pulvinar tellus ultricies, vestibulum
            risus eu, dignissim urna. Donec tristique, justo quis porttitor
            vulputate, urna diam ornare enim, quis euismod lacus lacus ut magna.
            Cras finibus felis ut lectus posuere, sed rutrum justo fermentum.
          </span>
          <div className="flex-1">
            <h1
              className="font-black text-xl xl:text-2xl tracking-wide text-textTitle 
              dark:text-textTitleDark text-left mb-8 xl:mb-6"
            >
              <Pencil2Icon
                className="absolute w-[32px] h-[32px] -translate-x-[16px]
              -translate-y-[3px] xl:translate-y-0"
              />
              <span className="pl-6">Formação</span>
            </h1>
            <ul
              className="border-l-[4px] border-dotted h-full flex flex-col justify-around
              gap-8 xl:gap-0 border-separator dark:border-separatorDark"
            >
              <Topic
                interval="2013 - 2015"
                title="Técnico em Informática"
                institution="ETEC Lauro Gomes"
                description="Curso técnico integrado ao ensino médio, com projeto
                de conclusão de curso sendo um sistema de gerenciamento escolar 
                com desktop, site e aplicativo."
              />
              <Topic
                interval="2016 - 2023"
                title="Bacharelado em Ciência da Computação"
                institution="Universidade Federal do ABC (UFABC)"
                description="Atualmente no último ano do bacharelado feito em
                conjunto com o Bacharelado em Ciência e Tecnologia (BC&T) oferecido
                pela mesma instituição."
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
