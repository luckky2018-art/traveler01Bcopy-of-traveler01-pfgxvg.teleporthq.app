import { ArticleGrid } from "@/sections/ArticlesSection/components/ArticleGrid";

export const ArticlesSection = () => {
  return (
    <section className="items-center bg-orange-50 box-border caret-transparent flex flex-col w-full px-6 py-16 md:px-20">
      <div className="items-center box-border caret-transparent gap-x-12 flex flex-col max-w-[1440px] gap-y-12 w-full md:items-start md:gap-x-20 md:gap-y-20">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4 md:items-start md:gap-x-6 md:gap-y-6">
          <h2 className="text-zinc-800 text-[32px] font-bold box-border caret-transparent leading-[31px] max-w-[75%] text-center w-full font-cormorant_infant md:text-6xl md:leading-[60px] md:max-w-[800px] md:text-start">
            Excepteur sint occaecat cupidatat non proident
          </h2>
          <p className="text-zinc-800 text-base box-border caret-transparent leading-6 max-w-[60%] text-center md:text-lg md:leading-[27px] md:max-w-[800px]">
            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <div className="items-start box-border caret-transparent gap-x-8 flex flex-col gap-y-8 w-full md:gap-x-16 md:gap-y-16">
          <ArticleGrid
            articles={[
              {
                imageUrl:
                  "https://c.animaapp.com/mhfo26pp0M5OPA/assets/articles-11-1500w.png",
                imageAlt: "image",
                title: "Understand your customers",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                buttonText: "Read more",
              },
              {
                imageUrl:
                  "https://c.animaapp.com/mhfo26pp0M5OPA/assets/articles-21-1500w.png",
                imageAlt: "image",
                title: "Understand your customers",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                buttonText: "Read more",
              },
            ]}
            gridVariant="md:gap-x-16 md:gap-y-16"
          />
          <ArticleGrid
            articles={[
              {
                imageUrl:
                  "https://c.animaapp.com/mhfo26pp0M5OPA/assets/articles-31-1500w.png",
                imageAlt: "image",
                title: "Understand your customers",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                buttonText: "Read more",
              },
              {
                imageUrl:
                  "https://c.animaapp.com/mhfo26pp0M5OPA/assets/articles-41-1500w.png",
                imageAlt: "image",
                title: "Understand your customers",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                buttonText: "Read more",
              },
            ]}
            gridVariant="md:gap-x-[130px] md:gap-y-[130px]"
          />
          <div className="items-center box-border caret-transparent flex flex-col justify-center w-full">
            <button className="text-zinc-800 font-medium bg-transparent caret-transparent block text-center border border-zinc-400 px-6 py-4 rounded-[56px] border-solid hover:text-white hover:bg-green-700 hover:border-black">
              Read all articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
