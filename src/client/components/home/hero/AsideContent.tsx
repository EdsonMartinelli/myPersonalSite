import MenuScreen from "./screens/MenuScreen";
import ScreenLarge from "./screens/ScreenLarge";
import ScreenMiddle from "./screens/ScreenMiddle";
import ScreenSmall from "./screens/ScreenSmall";
import ScreenVertical from "./screens/ScreenVertical";

export default function AsideContent() {
  return (
    <>
      <div
        className={`absolute w-[400px] h-[225px] bg-appDark/80 backdrop-blur opacity-90
        rounded-md z-[2] border-textComponentDark border-[1px] overflow-hidden 
        hover:bg-appDark dark:hover:bg-componentDark
        `}
      >
        <MenuScreen />
        <ScreenLarge />
      </div>

      <div
        className={`absolute w-[200px] h-[150px] bg-appDark/80 backdrop-blur rounded-md
        -translate-y-[105%] -translate-x-3/4 z-[1] opacity-90 hover:bg-appDark 
        border-slate-400 border-[1px] overflow-hidden dark:hover:bg-componentDark
        `}
      >
        <MenuScreen />
        <ScreenSmall />
      </div>
      <div
        className={`absolute w-[300px] h-[168px] bg-appDark/80 backdrop-blur rounded-md
        translate-y-3/4 translate-x-[30%] z-[3] opacity-90 hover:bg-appDark
        border-slate-400 border-[1px] overflow-hidden dark:hover:bg-componentDark
        `}
      >
        <MenuScreen />
        <ScreenMiddle />
      </div>

      <div
        className={`absolute w-[150px] h-[200px] bg-appDark/80 backdrop-blur rounded-md
        -translate-y-full translate-x-2/4 z-[3] opacity-90 hover:bg-appDark
        border-slate-400 border-[1px] overflow-hidden dark:hover:bg-componentDark
        `}
      >
        <MenuScreen />
        <ScreenVertical />
      </div>
    </>
  );
}
