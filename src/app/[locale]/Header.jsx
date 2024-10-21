import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/images/avatar.jpg";
import f8_fullstack from "@/public/images/f8.jpg";
import ThemeChangerButton from "./_components/ThemeChangerButton";
import LanguageChangerButton from "./_components/LanguageChangerButton";

export default function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 bg-white bg-background/70 dark:bg-black dark:text-white">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <ul className="flex items-center gap-4">
          <li className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image alt="logo" src={f8_fullstack} className="size-9" />
              <p className="font-bold">Fullstack.edu.vn F8</p>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/"
              className="font-bold text-green-500 hover:text-green-400 hover:underline"
            >
              Home
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-2">
          <li className="flex items-center">
            <Link
              href="https://fullstack.edu.vn/@nguyenxuanphong3"
              target="_blank"
            >
              <Image
                alt="avatar"
                src={avatar}
                className="size-8 rounded-full"
              />
            </Link>
          </li>
          <li className="flex items-center">
            <ThemeChangerButton />
          </li>
          <li className="flex items-center">
            <LanguageChangerButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
