"use client";

import { useParams, useRouter } from "next/navigation";

export default function LanguageChangerButton() {
  const router = useRouter();
  const { locale } = useParams();

  const handleChange = () => {
    if (locale === "vi") {
      // Chuyen sang tieng anh
      router.push("en");
      localStorage.setItem("locale", "en");
    } else if (locale === "en") {
      // Chuyen sang tieng viet
      router.push("vi");
      localStorage.setItem("locale", "vi");
    }
  };

  return (
    <button
      onClick={handleChange}
      className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-500"
    >
      {locale === "vi" ? "en" : "vi"}
    </button>
  );
}
