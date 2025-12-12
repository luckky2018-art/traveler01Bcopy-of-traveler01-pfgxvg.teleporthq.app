import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <section className="items-center bg-zinc-800 box-border caret-transparent flex flex-col w-full">
      <div className="relative items-start box-border caret-transparent gap-x-12 flex flex-col max-w-[1440px] gap-y-12 w-full pt-16 pb-12 px-6 md:gap-x-[120px] md:gap-y-[120px] md:px-20">
        <FooterContent />
        <span className="text-stone-500 text-xs box-border caret-transparent block leading-[13.8px]">
          © 2022 Character. All Rights Reserved.
        </span>
      </div>
    </section>
  );
};
