interface ShieldProps {
  label: string;
  value: string;
}

export default function Shield({ label, value }: ShieldProps) {
  return (
    <div className="flex w-fit mb-2 items-center rounded-md overflow-hidden text-textTitleDark text-sm ">
      <span
        className="px-4 py-1 h-full flex items-center justify-center bg-appDark 
            border-t-[1px] border-t-white/10 border-b-[1px] border-b-black/50"
      >
        {label}
      </span>
      <span
        className="px-4 py-1 h-full  flex items-center justify-center bg-pink-500 
            border-t-[1px] border-t-white/20 border-b-[1px] border-b-black/50"
      >
        {value}
      </span>
    </div>
  );
}
