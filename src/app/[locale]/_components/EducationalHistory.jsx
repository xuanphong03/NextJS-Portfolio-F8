import { getTranslations } from "next-intl/server";

export default async function EducationalHistory({ locale }) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <div>
      <h2 className="text-2xl">{t("HistoriesTitle")}</h2>
      <ul className="space-y-1">
        <li className="flex">
          <h3 className="font-bold">
            2014-2018:{" "}
            <span className="font-normal">{t("JuniorHighSchool")}</span>
          </h3>
        </li>
        <li>
          <hr></hr>
        </li>
        <li>
          <h3 className="font-bold">
            2018-2021:{" "}
            <span className="font-normal">{t("HighSchoolName")}</span>
          </h3>
        </li>
        <li>
          <hr></hr>
        </li>
        <li>
          <h3 className="font-bold">
            2021-2024
            <span className="font-normal">{t("UniversityName")}</span>
          </h3>
        </li>
      </ul>
    </div>
  );
}
