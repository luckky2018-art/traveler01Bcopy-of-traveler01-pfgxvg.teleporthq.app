import { FeatureCard } from "@/sections/FeaturesSection/components/FeatureCard";

export const FeaturesSection = () => {
  return (
    <div className="items-center bg-green-700 box-border caret-transparent flex justify-center w-full z-[100] px-6 py-12 md:px-20">
      <div className="items-start box-border caret-transparent gap-x-12 flex flex-col max-w-[1440px] gap-y-12 w-full md:gap-x-[140px] md:flex-row md:gap-y-[140px]">
        <FeatureCard
          iconSrc="https://c.animaapp.com/mhfo26pp0M5OPA/assets/thumbs-up.svg"
          iconAlt="image"
          title="Hand Picked Guides"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureCard
          iconSrc="https://c.animaapp.com/mhfo26pp0M5OPA/assets/headset.svg"
          iconAlt="image"
          title="24/7 Support"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureCard
          iconSrc="https://c.animaapp.com/mhfo26pp0M5OPA/assets/person.svg"
          iconAlt="image"
          title="Private Tours"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};
