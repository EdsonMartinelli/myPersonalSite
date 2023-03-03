export default function ScreenSmall() {
  return (
    <div className="rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="hover:animate-pulse">
        <div className="flex flex-1 space-x-4 mb-2">
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded col-span-2"></div>
              <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded"></div>
            <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded col-span-2"></div>
              <div className="h-2 bg-textComponent dark:bg-textComponentDark rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
