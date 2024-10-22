"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export default function ThemeChangerButton() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else if (resolvedTheme === "light") {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <FaMoon className="text-xl" />;

  return (
    <button onClick={handleSwitchTheme}>
      {resolvedTheme === "dark" && <MdSunny className="text-2xl" />}
      {resolvedTheme === "light" && <FaMoon className="text-xl" />}
    </button>
  );
}
