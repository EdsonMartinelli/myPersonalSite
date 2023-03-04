import About from "@/client/components/home/about/About";
import Hero from "@/client/components/home/hero/Hero";
import Skills from "@/client/components/home/skills/Skills";

export default async function Home() {
  const userResponse = await fetch(
    "https://api.github.com/users/EdsonMartinelli",
    {
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    }
  );
  const userInfo = await userResponse.json();
  return (
    <>
      <Hero avatar={userInfo.avatar_url} />
      <About />
      <Skills />
      <div
        id="contato"
        className="w-full h-screen bg-radial dark:bg-radialDark"
      >
        <div className="w-full h-full bg-grid dark:bg-gridDark">
          <h1 className="text-3xl font-bold underline dark:text-white">
            Contato
          </h1>
        </div>
      </div>
    </>
  );
}
