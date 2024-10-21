import { getTranslations } from "next-intl/server";
import React from "react";

export default async function PersonalPreference({ locale }) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <div>
      <h2 className="text-center text-2xl">{t("MyHobbies")}</h2>
      <ul className="space-y-1 mt-2">
        <li>{t("FirstMyHobby")}</li>
        <li>{t("SecondMyHobby")}</li>
        <li>{t("ThirstMyHobby")}</li>
      </ul>
    </div>
  );
}
