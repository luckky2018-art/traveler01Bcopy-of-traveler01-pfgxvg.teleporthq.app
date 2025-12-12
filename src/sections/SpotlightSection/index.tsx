import { VideoPlayer } from "@/sections/SpotlightSection/components/VideoPlayer";
import { SpotlightGrid } from "@/sections/SpotlightSection/components/SpotlightGrid";

export const SpotlightSection = () => {
  return (
    <section className="items-center box-border caret-transparent gap-x-8 flex flex-col max-w-[1440px] gap-y-8 w-full pb-16 px-6 md:gap-x-16 md:gap-y-16 md:px-20">
      <div className="items-center box-border caret-transparent gap-x-20 flex flex-col gap-y-20 w-full">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center max-w-[900px] gap-y-4 w-full md:gap-x-6 md:gap-y-6">
          <h2 className="text-zinc-800 text-[32px] font-bold box-border caret-transparent leading-[31px] text-center font-cormorant_infant md:text-6xl md:leading-[60px]">
            Spotlight destinations
          </h2>
          <p className="text-zinc-800 text-base box-border caret-transparent leading-6 max-w-[600px] text-center md:text-lg md:leading-[27px]">
            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <VideoPlayer />
      </div>
      <p className="text-lg box-border caret-transparent leading-[27px] max-w-[900px] text-center md:text-2xl md:leading-9">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto.
      </p>
      <SpotlightGrid />
      <button className="font-medium bg-amber-200 caret-transparent block text-center w-6/12 px-6 py-4 rounded-[56px] md:w-auto">
        Find a local guide
      </button>
    </section>
  );
};
