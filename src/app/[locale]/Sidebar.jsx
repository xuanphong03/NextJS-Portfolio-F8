import Image from "next/image";
import EducationalHistory from "./_components/EducationalHistory";
import MySkills from "./_components/MySkills";
import avatar from "@/public/images/f8.jpg";

export default function Sidebar({ locale }) {
  return (
    <aside className="col-span-3 flex flex-col items-center gap-2">
      <div>
        <div className="size-72">
          <Image
            alt="Fullstack F8"
            src={avatar}
            className="max-w-full rounded-md object-cover"
          />
        </div>
        <h2 className="text-center text-sm mt-2">Font-end developer</h2>
      </div>
      <MySkills locale={locale} />
      <EducationalHistory locale={locale} />
    </aside>
  );
}
