import { ContentBlock } from "@/sections/ContentSection/components/ContentBlock";

export const ContentSection = () => {
  return (
    <section className="items-start box-border caret-transparent gap-x-[135px] flex flex-col max-w-[1440px] gap-y-[135px] w-full px-6 py-16 md:items-center md:gap-x-[220px] md:gap-y-[220px] md:pt-[170px] md:pb-40 md:px-20">
      <ContentBlock
        layout="text-first"
        heading="Excepteur sint occaecat cupidatat non proident"
        description="Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        buttonText="Read more"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/highlight-1-1500w.png"
        imageAlt="image"
        buttonVariant="text-zinc-800 bg-transparent caret-transparent gap-x-4 flex gap-y-4 text-center p-0"
        headingClassName="text-zinc-800 text-[32px] font-bold box-border caret-transparent leading-[30px] text-left font-cormorant_infant md:text-6xl md:leading-[60px]"
        descriptionClassName="text-zinc-800 text-base box-border caret-transparent leading-[27px] max-w-[600px] text-left md:text-lg"
        imageClassName="box-border caret-transparent object-cover w-full md:w-auto"
        showOverlay={true}
      />
      <ContentBlock
        layout="image-first"
        heading="Excepteur sint occaecat cupidatat non proident"
        description={
          <>
            <span>
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </span>
            <br />
            <br />
            <span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </span>
            <br />
          </>
        }
        buttonText="Find a local guide"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/highlight-2-1500w.png"
        imageAlt="image"
        buttonVariant="font-medium bg-amber-200 caret-transparent block text-center px-6 py-4 rounded-[56px]"
        headingClassName="text-zinc-800 text-[32px] font-bold box-border caret-transparent leading-[31px] text-left font-cormorant_infant md:text-6xl md:leading-[60px]"
        descriptionClassName="text-zinc-800 text-base box-border caret-transparent leading-6 max-w-[600px] text-left md:text-lg md:leading-[27px]"
        imageClassName="box-border caret-transparent h-full object-cover w-full"
      />
    </section>
  );
};
