import { DestinationFilters } from "@/sections/DestinationsSection/components/DestinationFilters";
import { DestinationGrid } from "@/sections/DestinationsSection/components/DestinationGrid";
import { Pagination } from "@/components/Pagination";

export const DestinationsSection = () => {
  return (
    <section className="items-center box-border caret-transparent gap-x-16 flex flex-col max-w-[1440px] gap-y-16 w-full px-6 py-16 md:px-20 md:py-[120px]">
      <div className="items-center box-border caret-transparent gap-x-20 flex flex-col gap-y-20 w-full">
        <div className="items-center box-border caret-transparent gap-x-6 flex flex-col justify-center max-w-[900px] gap-y-6 w-full">
          <h2 className="text-zinc-800 text-6xl font-bold box-border caret-transparent leading-[60px] text-center font-cormorant_infant">
            See the world like a local
          </h2>
          <p className="text-zinc-800 text-lg box-border caret-transparent leading-[27px] max-w-[600px] text-center">
            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <DestinationFilters />
      </div>
      <DestinationGrid />
      <Pagination />
    </section>
  );
};
