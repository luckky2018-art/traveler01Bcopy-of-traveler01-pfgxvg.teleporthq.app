export type FeatureCardProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="relative items-start box-border caret-transparent gap-x-4 flex flex-col max-w-full gap-y-4 w-full md:max-w-[300px]">
      <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
        <img
          alt={props.iconAlt}
          src={props.iconSrc}
          className="box-border caret-transparent h-[22px] object-cover"
        />
        <h3 className="text-white text-2xl font-bold box-border caret-transparent leading-[27.6px]">
          {props.title}
        </h3>
      </div>
      <p className="text-white text-lg box-border caret-transparent leading-[27px]">
        {props.description}
      </p>
    </div>
  );
};
