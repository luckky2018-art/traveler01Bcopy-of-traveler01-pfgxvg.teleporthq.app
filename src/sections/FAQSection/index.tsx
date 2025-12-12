import { FAQItem } from "@/sections/FAQSection/components/FAQItem";

export const FAQSection = () => {
  return (
    <section className="items-center bg-stone-200 box-border caret-transparent flex flex-col w-full px-6 py-16 md:px-20">
      <div className="items-center box-border caret-transparent gap-x-12 flex flex-col max-w-[1440px] gap-y-12 w-full md:gap-x-20 md:gap-y-20">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center max-w-[900px] gap-y-4 w-full md:gap-x-6 md:gap-y-6">
          <h2 className="text-zinc-800 text-[32px] font-bold box-border caret-transparent leading-[31px] text-center font-cormorant_infant md:text-6xl md:leading-[60px]">
            Frequently asked questions
          </h2>
          <p className="text-zinc-800 text-base box-border caret-transparent leading-6 max-w-[600px] text-center md:text-lg md:leading-[27px]">
            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <div className="relative items-center box-border caret-transparent flex flex-col max-w-[900px] w-full">
          <FAQItem
            question="Lorem ipsum dolor sit ametetur elit?"
            answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            iconUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-8.svg"
            iconAltUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-9.svg"
            variant="border-t"
          />
          <FAQItem
            question="Excepteur sint occaecat cupidatat non sunt in culpa qui officia deserunt mollit anim id est laborum?"
            answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            iconUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-10.svg"
            iconAltUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-11.svg"
            variant="border-t-0"
          />
          <FAQItem
            question="Tempor incididunt ut labore et dolore magna aliquat enim ad minim?"
            answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            iconUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-12.svg"
            iconAltUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-13.svg"
            variant="border-t-0"
          />
          <FAQItem
            question="Lorem ipsum dolor sit ametetur elit?"
            answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            iconUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-14.svg"
            iconAltUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-15.svg"
            variant="border-t-0"
          />
          <FAQItem
            question="Incididunt ut labore et dolore?"
            answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            iconUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-16.svg"
            iconAltUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-17.svg"
            variant="border-t-0"
          />
        </div>
      </div>
    </section>
  );
};
