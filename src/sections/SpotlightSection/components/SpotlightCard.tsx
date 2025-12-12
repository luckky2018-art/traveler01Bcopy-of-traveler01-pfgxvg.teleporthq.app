export type SpotlightCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  location: string;
};

export const SpotlightCard = (props: SpotlightCardProps) => {
  return (
    <a href={props.href} className="box-border caret-transparent contents">
      <div className="items-center box-border caret-transparent flex w-full md:w-auto">
        <div className="relative items-center box-border caret-transparent flex basis-[0%] grow">
          <img
            alt={props.imageAlt}
            src={props.imageUrl}
            className="box-border caret-transparent basis-[0%] grow h-[400px] object-cover"
          />
          <div className="absolute items-center box-border caret-transparent flex basis-[0%] grow h-full justify-center m-auto inset-0">
            <span className="text-white text-xl font-bold box-border caret-transparent block leading-[23px] text-center">
              {props.location}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};
