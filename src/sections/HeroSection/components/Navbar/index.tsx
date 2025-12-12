import { NavbarLogo } from "@/sections/HeroSection/components/Navbar/NavbarLogo";
import { DesktopMenu } from "@/sections/HeroSection/components/Navbar/DesktopMenu";
import { MobileMenuButton } from "@/sections/HeroSection/components/Navbar/MobileMenuButton";
import { MobileMenu } from "@/sections/HeroSection/components/Navbar/MobileMenu";

export const Navbar = () => {
  return (
    <div className="items-center box-border caret-transparent flex basis-[0%] flex-col grow w-full">
      <header className="items-center box-border caret-transparent flex w-full">
        <header className="relative items-center box-border caret-transparent flex justify-between max-w-[1440px] w-full p-4 md:px-0 md:py-12">
          <NavbarLogo />
          <div className="items-center box-border caret-transparent gap-x-8 flex justify-center gap-y-8">
            <DesktopMenu />
            <MobileMenuButton />
          </div>
          <MobileMenu />
        </header>
      </header>
      <div className="items-center box-border caret-transparent gap-x-12 flex flex-col h-full justify-center max-w-[900px] gap-y-12 w-full z-[100] pb-[100px] md:pb-0">
        <div className="items-center box-border caret-transparent gap-x-2 flex flex-col justify-center max-w-[900px] gap-y-2 w-full md:gap-x-6 md:gap-y-6">
          <h1 className="text-white text-[40px] font-bold box-border caret-transparent leading-10 text-center font-cormorant_infant md:text-[90px] md:leading-[90px]">
            See the world like a local
          </h1>
          <p className="text-white text-base box-border caret-transparent leading-6 max-w-[80%] text-center md:text-lg md:leading-[27px] md:max-w-[600px]">
            Find a local guide consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <div className="items-center box-border caret-transparent flex flex-col justify-center max-w-[700px] w-full rounded-[50px] border-4 border-solid border-white/30">
          <div className="items-center bg-white box-border caret-transparent gap-x-4 flex h-full justify-center gap-y-4 w-full pl-6 pr-2 py-2 rounded-[500px]">
            <img
              alt="image"
              src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/location.svg"
              className="box-border caret-transparent h-[22px] object-cover"
            />
            <input
              type="text"
              placeholder="Destination"
              className="box-border caret-transparent block w-full border-zinc-400 my-2 p-0 border-l-0 border-y-0 border-r border-solid"
            />
            <input
              type="date"
              placeholder="Date"
              className="box-border caret-transparent block w-6/12 border-zinc-400 my-2 p-0 border-l-0 border-y-0 border-r border-solid"
            />
            <input
              type="number"
              placeholder="Group size"
              className="box-border caret-transparent block w-6/12 p-1"
            />
            <div className="items-center bg-amber-200 box-border caret-transparent flex justify-center p-3 rounded-[50%]">
              <img
                alt="image"
                src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/search.svg"
                className="box-border caret-transparent object-cover w-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
