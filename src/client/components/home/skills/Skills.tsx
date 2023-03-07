import Icon from "./Icon";
import Image from "next/image";
import language from "@/client/assets/util/language.svg";
import library from "@/client/assets/util/library.svg";
import framework from "@/client/assets/util/framework.svg";
import environment from "@/client/assets/util/environment.svg";
import typescript from "@/client/assets/typescript.svg";
import java from "@/client/assets/java.svg";
import react from "@/client/assets/react.svg";
import angular from "@/client/assets/angular.svg";
import css from "@/client/assets/css.svg";
import html from "@/client/assets/html.svg";
import javascript from "@/client/assets/javascript.svg";
import nodejs from "@/client/assets/nodejs.svg";
import nextjs from "@/client/assets/nextjs.svg";
import postgres from "@/client/assets/postgres.svg";
import tailwindcss from "@/client/assets/tailwindcss.svg";
import python from "@/client/assets/python.svg";
import mongodb from "@/client/assets/mongodb.svg";
import gcp from "@/client/assets/gcp.svg";
import haskell from "@/client/assets/haskell.svg";
import { CodeIcon, MixIcon, StackIcon } from "@radix-ui/react-icons";
import SocialIcons from "../hero/SocialIcons";

export default function Skills() {
  return (
    <section id="skills" className="w-full h-fit">
      <div className="w-full h-fit p-8 xl:p-[8rem] pb-0 xl:pb-[0rem] ">
        <h2
          className="font-black text-2xl tracking-wide text-textTitle 
            dark:text-textTitleDark lg:text-3xl text-center xl:text-left mb-16"
        >
          Habilidades
        </h2>
        <div
          className="flex flex-col xl:flex-row items-start center gap-4 justify-between
            h-fit box-border"
        >
          <div
            className="flex-1 w-full p-4 box-border rounded-md h-full bg-app 
            dark:bg-appDark border-[1px] border-separator dark:border-separatorDark"
          >
            <h4
              className="text-lg font-bold mb-4 w-full pb-4 border-b-[1px]
            border-separator dark:border-separatorDark text-textTitle 
            dark:text-textTitleDark"
            >
              <CodeIcon className="w-[28px] h-[28px] inline mr-2" />
              Linguagens
            </h4>
            <div className="flex flex-col justify-center">
              <Icon name="typescript" level="avançado">
                <Image src={typescript} alt="logo" />
              </Icon>
              <Icon name="javascript" level="avançado">
                <Image src={javascript} alt="logo" />
              </Icon>
              <Icon name="java" level="avançado">
                <Image src={java} alt="logo" />
              </Icon>
            </div>
          </div>
          <div
            className="flex-1 w-full p-4 box-border rounded-md h-full bg-app 
            dark:bg-appDark border-[1px] border-separator dark:border-separatorDark"
          >
            <h4
              className="text-lg font-bold mb-4 w-full pb-4 border-b-[1px]
            border-separator dark:border-separatorDark text-textTitle 
            dark:text-textTitleDark"
            >
              <StackIcon className="w-[28px] h-[28px] inline mr-2" />
              Frameworks
            </h4>
            <div className="flex flex-col justify-center">
              <Icon name="nextjs" level="Avançado">
                <Image src={nextjs} alt="logo" />
              </Icon>
              <Icon name="react" level="avançado">
                <Image src={react} alt="logo" />
              </Icon>
              <Icon name="angular" level="Intermediário">
                <Image src={angular} alt="logo" />
              </Icon>
            </div>
          </div>
          <div
            className="flex-1 w-full p-4 box-border rounded-md h-full bg-app 
            dark:bg-appDark border-[1px] border-separator dark:border-separatorDark"
          >
            <h4
              className="text-lg font-bold mb-4 w-full pb-4 border-b-[1px]
              border-separator dark:border-separatorDark text-textTitle 
              dark:text-textTitleDark"
            >
              <MixIcon className="w-[28px] h-[28px] inline mr-2" />
              Ambiente
            </h4>
            <div className="flex flex-col justify-center">
              <Icon name="nodejs" level="avançado">
                <Image src={nodejs} alt="logo" />
              </Icon>
              <Icon name="GCP" level="iniciante">
                <Image src={gcp} alt="logo" />
              </Icon>
            </div>
          </div>
        </div>
        <p className="text-xl font-bold text-center mt-24 text-textTitle dark:text-textTitleDark">
          Outras linguagens, banco de dados, bibliotecas e frameworks que já
          utilizei em algum projeto:
        </p>
      </div>
      <div
        className="w-full h-[128px] bg-app dark:bg-appDark border-y-[1px] 
        border-separator dark:border-separatorDark mt-8 mb-8 xl:mb-[8rem] flex 
        flex-row items-center justify-center gap-16"
      >
        <SocialIcons>
          <Image src={typescript} alt="logo" />
        </SocialIcons>
        <SocialIcons>
          <Image src={typescript} alt="logo" />
        </SocialIcons>
        <SocialIcons>
          <Image src={typescript} alt="logo" />
        </SocialIcons>
        <SocialIcons>
          <Image src={typescript} alt="logo" />
        </SocialIcons>
        <SocialIcons>
          <Image src={typescript} alt="logo" />
        </SocialIcons>
        <SocialIcons>
          <Image src={typescript} alt="logo" />
        </SocialIcons>
        <SocialIcons>
          <Image src={typescript} alt="logo" />
        </SocialIcons>
      </div>
    </section>
  );
}
