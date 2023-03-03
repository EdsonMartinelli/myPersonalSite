"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  getTheme: () => string;
  setDark: () => void;
  setLight: () => void;
}
const ThemeContext = createContext<ContextProps>({
  getTheme: () => {
    return "dark";
  },
  setDark: () => {
    return;
  },
  setLight: () => {
    return;
  },
});

interface ContextCompProps {
  font: string;
  cookie: string | undefined;
  children: ReactNode;
}

function findCookie(name: string) {
  return document.cookie.split("; ").find((item) => {
    if (item.split("=")[0] == name) return item.split("=")[1];
  });
}

export function ThemeContextComponent({
  cookie,
  children,
  font,
}: ContextCompProps) {
  const [theme, setTheme] = useState<string | undefined>(cookie);

  useEffect(() => {
    if (theme == undefined) {
      const systemTheme = "light";
      document.cookie = `personal_site_theme=${systemTheme}; path=/;`;
      setTheme(systemTheme);
    }
  }, [theme, setTheme]);

  function setDark() {
    document.cookie = `personal_site_theme=dark; path=/;`;
    setTheme("dark");
  }

  function setLight() {
    document.cookie = `personal_site_theme=light; path=/;`;
    setTheme("light");
  }

  function getTheme() {
    return theme ?? "light";
  }

  return (
    <ThemeContext.Provider value={{ getTheme, setDark, setLight }}>
      <body className={`${theme} ${font}`}>{children}</body>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
