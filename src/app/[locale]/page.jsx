import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Sidebar from "./Sidebar";
import ContactInformation from "./_components/ContactInformation";
import PersonalProjects from "./_components/PersonalProjects";
import PersonalPreference from "./_components/PersonalPreference";

export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className="container mx-auto shadow-box rounded-md bg-white dark:bg-[#18181B] dark:text-white">
      <h1 className="text-center p-3 text-2xl">Fullstack.edu.vn F8</h1>
      <div className="grid grid-cols-12 gap-x-8 p-3 bg-white dark:bg-[#18181B]">
        <Sidebar locale={locale} />
        <div className="col-span-9 space-y-2">
          <ContactInformation locale={locale} />
          <hr></hr>
          <PersonalProjects locale={locale} />
          <hr></hr>
          <PersonalPreference locale={locale} />
        </div>
      </div>
      <div className="p-3 text-center text-primary">
        © 2024 Fullstack.edu.vn F8. All rights reserved.
      </div>
    </div>
  );
}
