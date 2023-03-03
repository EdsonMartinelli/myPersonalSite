import { useEffect, useRef, useState } from "react";

interface ToastProps {
  id: number;
  title: string;
  message: string;
  positonY: number;
  removeToast: (id: number) => void;
}

export default function Toast({
  id,
  title,
  message,
  positonY,
  removeToast,
}: ToastProps) {
  const [isOpen, setIsOpen] = useState(true);
  const refToast = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const x = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => {
      clearTimeout(x);
    };
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) return;
    const node = refToast.current;
    const handleAnimationEnd = () => removeToast(id);
    if (node != null) {
      node.addEventListener("animationend", handleAnimationEnd);
    }
    return () => node?.removeEventListener("animationend", handleAnimationEnd);
  }, [isOpen, removeToast, id]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: `${positonY * (75 + 10) + 20}px`,
        left: "10px",
        transition: "all 200ms ease-in-out",
      }}
      className={`w-[300px] h-[75px] bg-app rounded-md shadow border-[1px] border-separate ${
        isOpen ? "animate-toastShow" : "animate-toastClose"
      }`}
      ref={refToast}
    >
      <div className="flex flex-row h-full p-2">
        <div className="h-full flex flex-col justify-around flex-[4]">
          <span className="text-md font-semibold text-slate-900">{title}</span>
          <span className="text-xs text-slate-700">{message}</span>
        </div>
        <div className="h-full flex-[1] flex items-center justify-center">
          <button
            className="text-sm bg-emerald-100 text-emerald-700 border-[1px]
            border-emerald-700 px-2 py-1 rounded-md 
            hover:bg-emerald-200 hover:text-emerald-900 hover:border-emerald-900
            active:bg-emerald-300 active:text-emerald-900 active:border-emerald-900"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
