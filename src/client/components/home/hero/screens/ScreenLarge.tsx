export default function ScreenLarge() {
  return (
    <div className="rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="hover:animate-pulse ">
        <div className="flex space-x-4 mb-2">
          <div className="rounded-full bg-textComponent dark:bg-textComponentDark h-10 w-10"></div>

          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded col-span-2"></div>
              <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded"></div>
          </div>
        </div>

        <div className="flex space-x-4 mb-2">
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded"></div>
            <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded col-span-1"></div>
              <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded col-span-2"></div>
            </div>
            <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded"></div>
            <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded"></div>
          </div>
          <div className="rounded-md bg-textComponent dark:bg-textComponentDark h-30 w-10"></div>
        </div>
      </div>
    </div>
  );
}
