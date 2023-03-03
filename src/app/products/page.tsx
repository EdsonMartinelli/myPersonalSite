"use client";

import Toast from "@/client/components/teste/Toast";
import { useState } from "react";

interface ToastProps {
  id: number;
  title: string;
  message: string;
}
export default function Products() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  function addToast(title: string, message: string) {
    const id = Date.now();
    setToasts((oldToasts) => [...oldToasts, { id, title, message }]);
  }

  function removeToast(id: number) {
    setToasts((oldToasts) => oldToasts.filter((item) => item.id != id));
  }

  return (
    <div className="w-full h-screen">
      <h1>Products</h1>
      <button
        onClick={() => {
          addToast("Scheduled", new Date().toUTCString());
        }}
      >
        Add Toast
      </button>

      {toasts.map((toast, index) => {
        return (
          <Toast
            key={toast.id}
            id={toast.id}
            title={toast.title}
            message={toast.message}
            removeToast={removeToast}
            positonY={toasts.length - index - 1}
          />
        );
      })}
    </div>
  );
}
