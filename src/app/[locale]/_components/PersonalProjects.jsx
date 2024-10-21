import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function PersonalProjects({ locale }) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <div className="shadow-box rounded-md">
      <h2 className="text-2xl text-center p-3">{t("SelfProject")}</h2>
      <div className="p-3 space-y-2">
        <div>
          <h3>{t("ProjectCodeSnippetTitle")}</h3>
          <p>{t("ProjectCodeSnippetCompleteTime")}</p>
          <p>{t("ProjectCodeSnippetDescription")}</p>
          <div className="flex gap-2 items-center">
            <button>
              <Link
                href="https://codefast.vercel.app/"
                className="text-primary"
              >
                Demo
              </Link>
            </button>
            <button>
              <Link
                href="https://github.com/duongnguyenf8/demo_custom-element"
                className="text-primary"
              >
                Code
              </Link>
            </button>
          </div>
        </div>
        <hr></hr>
        <div>
          <h3>{t("ProjectBlogTitle")}</h3>
          <p>{t("ProjectBlogCompleteTime")}</p>
          <p>{t("ProjectBlogDescription")}</p>
          <div className="flex gap-2 items-center">
            <button>
              <Link
                href="https://codefast.vercel.app/"
                className="text-primary"
              >
                Demo
              </Link>
            </button>
            <button>
              <Link
                href="https://github.com/duongnguyenf8/demo_custom-element"
                className="text-primary"
              >
                Code
              </Link>
            </button>
          </div>
        </div>
        <hr></hr>
        <div>
          <h3>{t("ProjectProject20f8Title")}</h3>
          <p>{t("ProjectProject20f8CompleteTime")}</p>
          <p>{t("ProjectProject20f8Description")}</p>
          <div className="flex gap-2 items-center">
            <button>
              <Link
                href="https://codefast.vercel.app/"
                className="text-primary"
              >
                Demo
              </Link>
            </button>
            <button>
              <Link
                href="https://github.com/duongnguyenf8/demo_custom-element"
                className="text-primary"
              >
                Code
              </Link>
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="my-5">
          <Link
            className="text-primary"
            href="https://github.com/duongnguyenf8"
          >
            https://github.com/duongnguyenf8
          </Link>
        </div>
      </div>
    </div>
  );
}
