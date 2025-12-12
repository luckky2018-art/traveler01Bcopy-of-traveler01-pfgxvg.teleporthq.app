import { ArticleCard } from "@/sections/ArticlesSection/components/ArticleCard";

export type ArticleGridProps = {
  articles: Array<{
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    buttonText: string;
  }>;
  gridVariant: string;
};

export const ArticleGrid = (props: ArticleGridProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent gap-x-8 flex flex-col gap-y-8 w-full md:flex-row ${props.gridVariant}`}
    >
      {props.articles.map((article, index) => (
        <ArticleCard
          key={index}
          imageUrl={article.imageUrl}
          imageAlt={article.imageAlt}
          title={article.title}
          description={article.description}
          buttonText={article.buttonText}
        />
      ))}
    </div>
  );
};
