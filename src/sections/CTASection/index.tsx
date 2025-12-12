export const CTASection = () => {
  return (
    <section className="items-center bg-gray-600 box-border caret-transparent gap-x-12 flex flex-col gap-y-12 w-full px-6 py-16 md:px-20">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center max-w-[900px] gap-y-4 w-full md:gap-x-6 md:gap-y-6">
        <h2 className="text-white text-[32px] font-bold box-border caret-transparent leading-[31px] text-center font-cormorant_infant md:text-6xl md:leading-[60px]">
          Find a local guide now
        </h2>
        <p className="text-white text-base box-border caret-transparent leading-6 text-center md:text-lg md:leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <button className="font-medium bg-amber-200 caret-transparent block text-center px-6 py-4 rounded-[56px]">
        Find a local guide
      </button>
    </section>
  );
};
