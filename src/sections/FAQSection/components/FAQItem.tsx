export type FAQItemProps = {
  question: string;
  answer: string;
  iconUrl: string;
  iconAltUrl: string;
  variant: string;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <div
      className={`text-white/60 items-start box-border caret-transparent flex justify-between w-full border-zinc-400 py-6 border-b border-solid hover:text-white hover:border-white ${props.variant}`}
    >
      <div className="items-start box-border caret-transparent gap-x-2 flex flex-col max-w-[700px] gap-y-2 md:gap-x-6 md:gap-y-6">
        <span className="text-black text-base font-medium box-border caret-transparent block leading-[18.4px] md:text-xl md:leading-[23px]">
          {props.question}
        </span>
        <span className="text-black text-sm box-border caret-transparent hidden leading-[21px] max-w-[800px] md:text-lg md:leading-[27px]">
          {props.answer}
        </span>
      </div>
      <div className="box-border caret-transparent pt-2">
        <img
          src={props.iconUrl}
          alt="Icon"
          className="box-border caret-transparent flex h-4 w-4"
        />
        <img
          src={props.iconAltUrl}
          alt="Icon"
          className="box-border caret-transparent hidden h-4 w-4"
        />
      </div>
    </div>
  );
};
