import { SpotlightCard } from "@/sections/SpotlightSection/components/SpotlightCard";

export const SpotlightGrid = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-6 flex flex-wrap justify-center gap-y-6 w-full">
      <SpotlightCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/destination-1-400h.png"
        imageAlt="image"
        location="Tokyo, Japan"
      />
      <SpotlightCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/destination-2-400h.png"
        imageAlt="image"
        location="Paris, France"
      />
      <SpotlightCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/destination-3-400h.png"
        imageAlt="image"
        location="Bruges, Belgium"
      />
      <SpotlightCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/destination-4-400h.png"
        imageAlt="image"
        location="London, UK"
      />
    </div>
  );
};
