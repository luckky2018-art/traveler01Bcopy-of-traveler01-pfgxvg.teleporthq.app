export type DestinationCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  destinationName: string;
  localGuidesCount: number;
  description: string;
};

export const DestinationCard = (props: DestinationCardProps) => {
  const guidesText =
    props.localGuidesCount === 1
      ? "1 Local guide"
      : `${props.localGuidesCount} Local guides`;

  return (
    <a href={props.href} className="box-border caret-transparent block">
      <div className="box-border caret-transparent flex w-full">
        <div className="relative box-border caret-transparent gap-x-6 flex flex-col gap-y-6 w-full">
          <img
            alt={props.imageAlt}
            src={props.imageUrl}
            className="box-border caret-transparent object-cover w-full md:w-auto"
          />
          <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6">
            <div className="box-border caret-transparent gap-x-4 flex basis-[0%] flex-col grow justify-start gap-y-4">
              <span className="text-xl font-bold box-border caret-transparent block leading-[23px]">
                {props.destinationName}
              </span>
              <span className="text-xl font-medium box-border caret-transparent block leading-[23px]">
                {guidesText}
              </span>
            </div>
            <span className="box-border caret-transparent block leading-6 max-w-[400px]">
              {props.description}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};
