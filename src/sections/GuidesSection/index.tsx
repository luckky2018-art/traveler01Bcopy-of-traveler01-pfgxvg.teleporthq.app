import { GuideCard } from "@/sections/GuidesSection/components/GuideCard";

export const GuidesSection = () => {
  return (
    <section className="items-center box-border caret-transparent gap-x-8 flex flex-col max-w-[1440px] gap-y-8 w-full pb-16 px-6 md:gap-x-20 md:gap-y-20 md:px-20">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center max-w-[900px] gap-y-4 w-full md:gap-x-6 md:gap-y-6">
        <h2 className="text-zinc-800 text-[32px] font-bold box-border caret-transparent leading-[31px] text-center font-cormorant_infant md:text-6xl md:leading-[60px]">
          Meet our guides
        </h2>
        <p className="text-zinc-800 text-base box-border caret-transparent leading-6 max-w-[600px] text-center md:text-lg md:leading-[27px]">
          Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
          tempor incididunt.
        </p>
      </div>
      <div className="items-center box-border caret-transparent gap-x-12 grid flex-col grid-cols-[auto] gap-y-12 w-full md:grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
        <GuideCard
          href="/"
          imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/guide-1.png"
          imageAlt="image"
          name="Miura Avaron"
          location="Tokyo, Japan"
        />
        <GuideCard
          href="/"
          imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/guide-2.png"
          imageAlt="image"
          name="Miura Avaron"
          location="Paris, France"
        />
        <GuideCard
          href="/"
          imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/guide-3.png"
          imageAlt="image"
          name="Miura Avaron"
          location="Bruges, Belgium"
          variant="shrink-0"
        />
        <GuideCard
          href="/"
          imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/guide-4.png"
          imageAlt="image"
          name="Miura Avaron"
          location="London, UK "
        />
      </div>
    </section>
  );
};
