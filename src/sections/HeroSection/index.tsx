import { HeroBackground } from "@/sections/HeroSection/components/HeroBackground";

export const HeroSection = () => {
  return (
    <section className="items-center box-border caret-transparent flex flex-col h-[1000px] w-full">
      <HeroBackground />
      <div className="items-center bg-green-700 box-border caret-transparent flex justify-center w-full z-[100] px-6 py-12 md:px-20">
        <div className="items-start box-border caret-transparent gap-x-12 flex flex-col max-w-[1440px] gap-y-12 w-full md:gap-x-[140px] md:flex-row md:gap-y-[140px]">
          <div className="relative items-start box-border caret-transparent gap-x-4 flex flex-col max-w-full gap-y-4 w-full md:max-w-[300px]">
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <img
                alt="image"
                src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/thumbs-up.svg"
                className="box-border caret-transparent h-[22px] object-cover"
              />
              <h3 className="text-white text-2xl font-bold box-border caret-transparent leading-[27.6px]">
                Hand Picked Guides
              </h3>
            </div>
            <p className="text-white text-lg box-border caret-transparent leading-[27px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative items-start box-border caret-transparent gap-x-4 flex flex-col max-w-full gap-y-4 w-full md:max-w-[300px]">
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <img
                alt="image"
                src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/headset.svg"
                className="box-border caret-transparent h-[22px] object-cover"
              />
              <h3 className="text-white text-2xl font-bold box-border caret-transparent leading-[27.6px]">
                24/7 Support
              </h3>
            </div>
            <p className="text-white text-lg box-border caret-transparent leading-[27px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative items-start box-border caret-transparent gap-x-4 flex flex-col max-w-full gap-y-4 w-full md:max-w-[300px]">
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <img
                alt="image"
                src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/person.svg"
                className="box-border caret-transparent h-[22px] object-cover"
              />
              <h3 className="text-white text-2xl font-bold box-border caret-transparent leading-[27.6px]">
                Private Tours
              </h3>
            </div>
            <p className="text-white text-lg box-border caret-transparent leading-[27px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
