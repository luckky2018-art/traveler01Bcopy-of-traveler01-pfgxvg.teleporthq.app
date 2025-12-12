export const DesktopMenu = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-6 hidden justify-center min-h-0 min-w-0 gap-y-6 md:gap-x-12 md:flex md:min-h-[auto] md:min-w-[auto] md:gap-y-12">
      <a
        href="#features"
        className="text-white font-medium box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
      >
        Features
      </a>
      <span className="text-white font-medium box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
        How it works
      </span>
      <span className="text-white font-medium box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
        Prices
      </span>
      <a
        href="#find"
        className="text-white font-medium box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
      >
        Contact
      </a>
    </div>
  );
};
