import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center ">
        <h1
          className={
            "text-[var(--header-text-color)] text-[25px] leading-[24px] font-extrabold cursor-pointer md:mt-7 xl:ml-5"
          }
        >
          Brand Name
        </h1>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-[color:var(--background-color-1)] hover:text-[color:var(--background-color-2)]"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
