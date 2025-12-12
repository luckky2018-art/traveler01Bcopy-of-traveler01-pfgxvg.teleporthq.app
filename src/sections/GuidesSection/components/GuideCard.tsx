export type GuideCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  location: string;
  variant?: string;
};

export const GuideCard = (props: GuideCardProps) => {
  return (
    <a href={props.href} className="box-border caret-transparent block">
      <div className="items-center box-border caret-transparent flex w-full">
        <div
          className={`relative items-center box-border caret-transparent gap-x-4 flex flex-col gap-y-4 w-full md:gap-x-6 md:gap-y-6 ${props.variant || ""}`}
        >
          <img
            alt={props.imageAlt}
            src={props.imageUrl}
            className="box-border caret-transparent basis-[0%] grow object-cover w-full"
          />
          <div className="items-center box-border caret-transparent gap-x-1 flex flex-col justify-center gap-y-1 md:gap-x-2 md:gap-y-2">
            <h3 className="text-zinc-800 text-xl font-bold box-border caret-transparent leading-[23px]">
              {props.name}
            </h3>
            <span className="font-medium box-border caret-transparent block">
              {props.location}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};
