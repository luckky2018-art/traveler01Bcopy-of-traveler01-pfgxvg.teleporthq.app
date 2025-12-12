export type ArticleCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
};

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-6 flex flex-col max-w-full gap-y-6 w-full md:max-w-[500px]">
      <img
        alt={props.imageAlt}
        src={props.imageUrl}
        className="box-border caret-transparent h-[375px] object-cover w-full"
      />
      <div className="items-start box-border caret-transparent gap-x-6 flex flex-col gap-y-6 w-full md:gap-x-12 md:gap-y-12">
        <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4">
          <h2 className="text-zinc-800 text-[32px] font-semibold box-border caret-transparent leading-[38px] max-w-[800px] w-full font-cormorant_infant md:text-[40px] md:leading-[60px]">
            {props.title}
          </h2>
          <p className="text-zinc-800 text-sm box-border caret-transparent leading-[21px] max-w-[800px] font-lora md:text-base md:leading-6">
            {props.description}
          </p>
        </div>
        <button className="text-zinc-800 bg-transparent caret-transparent gap-x-4 flex gap-y-4 text-center p-0">
          <span className="font-medium box-border caret-transparent block">
            {props.buttonText}
          </span>
          <span className="font-medium box-border caret-transparent block">
            &gt;
          </span>
        </button>
      </div>
    </div>
  );
};
