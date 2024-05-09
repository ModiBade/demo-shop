import Link from "next/link";
import DesktopMenu from "./menu/desktop";

const DesktopNavbar = () => {
  return (
    <div className="hidden lg:block mt-5">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <DesktopMenu />
        </div>
        <div>
          <Link
            href="/page/contact"
            className=" bg-slate-100 text-slate-700 px-3 py-2 rounded-t-lg"
          >
            ارتباط با ما
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
