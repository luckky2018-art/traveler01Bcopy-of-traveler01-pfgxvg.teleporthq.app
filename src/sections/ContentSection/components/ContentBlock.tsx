export type ContentBlockProps = {
  layout: string;
  heading: string;
  description: React.ReactNode;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
  buttonVariant: string;
  headingClassName: string;
  descriptionClassName: string;
  imageClassName: string;
  showOverlay?: boolean;
};

export const ContentBlock = (props: ContentBlockProps) => {
  const isImageFirst = props.layout === "image-first";

  return (
    <div
      className={`items-start box-border caret-transparent gap-x-8 flex justify-start gap-y-8 w-full md:items-center md:flex-row ${props.layout === "image-first" ? "flex-col-reverse md:gap-x-20 md:gap-y-20" : "flex-col md:gap-x-[120px] md:gap-y-[120px]"}`}
    >
      {isImageFirst && (
        <div className="box-border caret-transparent flex relative items-end h-auto justify-center w-full overflow-hidden md:h-[530px] md:w-auto">
          <img
            alt={props.imageAlt}
            src={props.imageUrl}
            className={props.imageClassName}
          />
        </div>
      )}
      <div className="box-border caret-transparent flex items-start gap-x-6 flex-col justify-start gap-y-6 md:gap-x-12 md:gap-y-12">
        <div className="box-border caret-transparent flex justify-center items-start gap-x-4 flex-col max-w-[500px] gap-y-4 w-full md:gap-x-6 md:gap-y-6">
          <h2 className={props.headingClassName}>{props.heading}</h2>
          <p className={props.descriptionClassName}>{props.description}</p>
        </div>
        <button className={props.buttonVariant}>{props.buttonText}</button>
      </div>
      {!isImageFirst && (
        <div className="box-border caret-transparent flex relative items-end justify-center">
          <img
            alt={props.imageAlt}
            src={props.imageUrl}
            className={props.imageClassName}
          />
          {props.showOverlay && (
            <div className="box-border caret-transparent flex justify-center absolute items-center bg-green-700 bottom-[-110px] h-[410px] right-[-120px] w-[200px] md:bottom-[-95px] md:right-[-215px] md:w-[315px]"></div>
          )}
        </div>
      )}
    </div>
  );
};
