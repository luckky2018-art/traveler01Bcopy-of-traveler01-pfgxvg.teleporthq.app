export const TestimonialSection = () => {
  return (
    <section className="items-center bg-orange-50 box-border caret-transparent flex flex-col w-full px-6 py-16 md:px-20 md:py-[120px]">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col max-w-[900px] gap-y-4 w-full md:items-start md:gap-x-12 md:gap-y-12">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col gap-y-4 w-4/5 md:items-start md:gap-x-12 md:gap-y-12 md:w-auto">
          <span className="text-zinc-800 text-xs box-border caret-transparent block leading-[18px] text-center md:text-lg md:leading-[27px] md:text-start">
            Customer testimonial
          </span>
          <p className="text-zinc-800 text-2xl italic font-semibold box-border caret-transparent leading-7 text-center font-cormorant_infant md:text-[40px] md:leading-[48px] md:text-start">
            “We’ve used Traveler to lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.”
          </p>
        </div>
        <div className="items-center box-border caret-transparent gap-x-12 flex flex-col justify-center gap-y-12 w-full md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal]">
          <div className="items-center box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-8 md:flex-row md:gap-y-8">
            <img
              alt="image"
              src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/quote-200h.png"
              className="box-border caret-transparent object-cover w-[60px] rounded-[50%] md:w-[120px]"
            />
            <span className="text-sm font-medium box-border caret-transparent block leading-[16.1px] md:text-xl md:leading-[23px]">
              Michael McDonald
            </span>
          </div>
          <div className="items-center box-border caret-transparent gap-x-4 flex justify-center gap-y-4">
            <div className="items-center aspect-square box-border caret-transparent flex border border-zinc-400 px-4 py-2 rounded-[50%] border-solid md:px-6 md:py-4 hover:bg-amber-200 hover:border-transparent">
              <span className="font-medium box-border caret-transparent block text-center">
                &lt;
              </span>
            </div>
            <div className="items-center aspect-square box-border caret-transparent flex scale-x-[-1px] scale-y-[-1px] border border-zinc-400 px-4 py-2 rounded-[50%] border-solid md:px-6 md:py-4 hover:bg-amber-200 hover:border-transparent">
              <span className="font-medium box-border caret-transparent block text-center">
                &lt;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
