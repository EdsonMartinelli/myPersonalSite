export default function MenuScreen() {
  return (
    <div className="w-full border-textComponentDark border-b-[1px] flex items-center py-1.5 px-2">
      <div
        className="h-[10px] w-[10px] bg-textComponentDark rounded-full
          after:content-[''] after:absolute after:h-[10px] after:w-[10px] after:bg-textComponentDark after:rounded-full after:translate-x-[150%]
          before:content-[''] before:absolute before:h-[10px] before:w-[10px] before:bg-textComponentDark before:rounded-full before:translate-x-[300%]
          "
      ></div>
    </div>
  );
}
