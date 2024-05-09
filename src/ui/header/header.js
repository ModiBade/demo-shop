import DesktopSearch from "@/ui/header/layouts/search/desktop";
import Profile from "@/ui/header/layouts/profile/profile";
import Image from "next/image";
import Icons from "@/ui/header/layouts/icons/icons";
import MobileSearch from "@/ui/header/layouts/search/mobile";
import MobileNavbar from "../navbar/mobile";
import DesktopNavbar from "../navbar/desktop";
import Ask from "@/lib/fetch/fetch";
import { BaseConfig } from "@/lib/config/base";
import SetSettings from "@/modules/store/settings";

const getData = async () => {
  const data = await Ask(`${BaseConfig.apiUrl}/header`, "get", "no-store");
  return data;
};

const Header = async () => {
  const data = await getData();

  return (
    <>
      <SetSettings data={data} />
      <div className="transition bg-white px-7 pt-4 pb-4 lg:pb-0 border-t-4 border-lime-500 shadow-md mb-5">
        <div className="container mx-auto flex items-center justify-between">
          <MobileNavbar />
          <Image
            className="hidden xs:inline"
            src="/media/images/logo.png"
            width={150}
            height={40}
            alt="logo"
            priority
          />
          <Image
            className="inline xs:hidden"
            src="/media/images/icon-logo.png"
            width={40}
            height={40}
            alt="logo"
            priority
          />
          <DesktopSearch />
          <div className="flex items-center">
            <Icons />
            <Profile />
          </div>
        </div>
        <div className="container mx-auto">
          <MobileSearch />
          <DesktopNavbar />
        </div>
      </div>
    </>
  );
};

export default Header;
