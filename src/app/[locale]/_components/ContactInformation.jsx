import Link from "next/link";
import React from "react";
import { getTranslations } from "next-intl/server";
export default async function ContactInformation({ locale }) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <div>
      <h2 className="text-2xl text-center">{t("ContactInformationTitle")}</h2>
      <ul>
        <li className="flex items-center gap-1">
          <h4>Phone:</h4>
          <Link className="text-primary" target="_blank" href="tel:0865783359">
            0865783348
          </Link>
        </li>
        <li className="flex items-center gap-1">
          <h4>Zalo:</h4>
          <Link
            className="text-primary"
            target="_blank"
            href="https://zalo.me/pc"
          >
            https://zalo.me
          </Link>
        </li>
        <li className="flex items-center gap-1">
          <h4>Email:</h4>
          <Link
            className="text-primary"
            target="_blank"
            href="mailto:xphong.fullstack03@gmail.com"
          >
            xphong.fullstack03@gmail.com
          </Link>
        </li>
        <li className="flex items-center gap-1">
          <h4>Facebook:</h4>
          <Link
            className="text-primary"
            target="_blank"
            href="https://www.facebook.com/nguyen.x.phong.583"
          >
            https://www.facebook.com/nguyen.x.phong.583
          </Link>
        </li>
      </ul>
    </div>
  );
}
