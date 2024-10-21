"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

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

  if (!mounted) return <FaMoon className="text-xl" />;

  return (
    <button onClick={handleSwitchTheme}>
      {theme === "dark" && <MdSunny className="text-2xl" />}
      {theme === "light" && <FaMoon className="text-xl" />}
    </button>
  );
}
