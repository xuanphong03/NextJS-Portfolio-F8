"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeChangerButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    console.log("theme", theme);

    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <button className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-500">
        dark
      </button>
    );

  return (
    <button
      onClick={handleSwitchTheme}
      className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-500"
    >
      {theme === "dark" && "light"}
      {theme === "light" && "dark"}
    </button>
  );
}
