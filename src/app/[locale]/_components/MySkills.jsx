import { getTranslations } from "next-intl/server";
import React from "react";

export default async function MySkills({ locale }) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <div>
      <h2 className="text-2xl">{t("MySkillsTitle")}</h2>
      <ul className="space-y-1">
        <li className="flex">
          <h3 className="font-bold">
            {t("WebDevSkillTitle")}:{" "}
            <span className="font-normal">{t("WebDevSkillDesc")}</span>
          </h3>
        </li>
        <li>
          <hr></hr>
        </li>
        <li>
          <h3 className="font-bold">
            {t("OtherSkillsTitle")}:{" "}
            <span className="font-normal">{t("OtherSkillsDesc")}</span>
          </h3>
        </li>
      </ul>
    </div>
  );
}
