import { SearchForm } from "@/sections/HeroSection/components/SearchForm";

export const HeroContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-12 flex flex-col h-full justify-center max-w-[900px] gap-y-12 w-full z-[100] pb-[100px] md:pb-0">
      <div className="items-center box-border caret-transparent gap-x-2 flex flex-col justify-center max-w-[900px] gap-y-2 w-full md:gap-x-6 md:gap-y-6">
        <h1 className="text-white text-[40px] font-bold box-border caret-transparent leading-10 text-center font-cormorant_infant md:text-[90px] md:leading-[90px]">
          See the world like a local
        </h1>
        <p className="text-white text-base box-border caret-transparent leading-6 max-w-[80%] text-center md:text-lg md:leading-[27px] md:max-w-[600px]">
          Find a local guide consectetur adipiscing elit, sed do eiusmod tempor
          incididunt.
        </p>
      </div>
      <SearchForm />
    </div>
  );
};
