import CardTitle from "./CardTitle";
import Card from "./Card";
import CardItem from "./CardItem";
import Item from "./Item";
import Image from "next/image";
import typescript from "@/client/assets/typescript.svg";
import java from "@/client/assets/java.svg";
import react from "@/client/assets/react.svg";
import angular from "@/client/assets/angular.svg";
import javascript from "@/client/assets/javascript.svg";
import nodejs from "@/client/assets/nodejs.svg";
import nextjs from "@/client/assets/nextjs.svg";
import gcp from "@/client/assets/gcp.svg";
import { CodeIcon, MixIcon, PlusIcon, StackIcon } from "@radix-ui/react-icons";

import tailwindcss from "@/client/assets/tailwindcss.svg";
import c from "@/client/assets/c.svg";
import csharp from "@/client/assets/csharp.svg";
import postgresql from "@/client/assets/postgresql.svg";
import mongodb from "@/client/assets/mongodb.svg";
import git from "@/client/assets/git.svg";
import haskell from "@/client/assets/haskell.svg";
import python from "@/client/assets/python.svg";
import sequelize from "@/client/assets/sequelize.svg";
import prisma from "@/client/assets/prisma.svg";
import cplusplus from "@/client/assets/cplusplus.svg";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full h-fit xl:h-screen xl:max-h-[900px] transparent"
    >
      <div className="w-full h-fit p-8 xl:p-[8rem] box-border">
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
          <Card>
            <CardTitle>
              <CodeIcon className="w-[28px] h-[28px] inline mr-2" />
              Linguagens
            </CardTitle>
            <div className="flex flex-col justify-center">
              <CardItem name="typescript" level="avançado">
                <Image src={typescript} alt="Logotype of Typescript" />
              </CardItem>
              <CardItem name="javascript" level="avançado">
                <Image src={javascript} alt="Logotype of javascript" />
              </CardItem>
              <CardItem name="java" level="avançado">
                <Image src={java} alt="Logotype of Java" />
              </CardItem>
            </div>
          </Card>

          <Card>
            <CardTitle>
              <StackIcon className="w-[28px] h-[28px] inline mr-2" />
              Frameworks
            </CardTitle>
            <div className="flex flex-col justify-center">
              <CardItem name="nextjs" level="Avançado">
                <Image src={nextjs} alt="Logotype of Nextjs" />
              </CardItem>
              <CardItem name="react" level="avançado">
                <Image src={react} alt="Logotype of React" />
              </CardItem>
              <CardItem name="angular" level="Intermediário">
                <Image src={angular} alt="Logotype of Angular" />
              </CardItem>
            </div>
          </Card>

          <Card>
            <CardTitle>
              <MixIcon className="w-[28px] h-[28px] inline mr-2" />
              Ambiente
            </CardTitle>
            <div className="flex flex-col justify-center">
              <CardItem name="nodejs" level="avançado">
                <Image src={nodejs} alt="logo" />
              </CardItem>
              <CardItem name="GCP" level="iniciante">
                <Image src={gcp} alt="logo" />
              </CardItem>
            </div>
          </Card>
        </div>
        <p
          className="text-2xl font-bold text-center mt-24 mb-8 text-textTitle
         dark:text-textTitleDark"
        >
          Outras linguagens, banco de dados, bibliotecas e frameworks que já
          utilizei em algum projeto:
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          <div
            className="grid grid-cols-4 grid-rows-3 gap-y-3 w-fit justify-items-center
            items-center lg:flex lg:flex-row lg:justify-center"
          >
            <Item>
              <Image src={tailwindcss} alt="Logotype of Tailwind CSS" />
            </Item>
            <Item>
              <Image src={c} alt="Logotype of C Language" />
            </Item>
            <Item>
              <Image src={cplusplus} alt="Logotype of C++" />
            </Item>
            <Item>
              <Image src={csharp} alt="Logotype of C Sharp" />
            </Item>
            <Item>
              <Image src={postgresql} alt="Logotype of PostgreSQL" />
            </Item>
            <Item>
              <Image src={mongodb} alt="Logotype of MongoDB" />
            </Item>
            <Item>
              <Image src={git} alt="Logotype of Git" />
            </Item>
            <Item>
              <Image src={haskell} alt="Logotype of Haskell" />
            </Item>
            <Item>
              <Image src={python} alt="Logotype of Python" />
            </Item>
            <Item>
              <Image src={sequelize} alt="Logotype of Sequelize" />
            </Item>
            <Item>
              <Image src={prisma} alt="Logotype of Prisma" />
            </Item>
            <button
              className="w-[64px] h-[64px] p-[12px] rounded-full bg-component flex 
              items-center justify-center dark:bg-componentDark text-borderTextImportant
            hover:text-borderTextImportantHover hover:bg-componentHover 
            dark:hover:bg-componentHoverDark border-[1px] border-borderTextImportant
            hover:border-borderTextImportantHover dark:text-borderTextImportantDark
            dark:hover:text-borderTextImportantHoverDark dark:border-borderTextImportantDark
            dark:hover:border-borderTextImportantHoverDark box-border ml-[-8px]"
            >
              <PlusIcon className="w-full h-full" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
