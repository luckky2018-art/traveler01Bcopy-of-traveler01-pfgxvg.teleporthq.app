export const Pagination = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 md:gap-x-12 md:gap-y-12">
      <button className="text-zinc-800 font-medium bg-transparent caret-transparent flex text-center border border-zinc-400 p-2 rounded-[56px] border-solid md:px-6 md:py-4 hover:text-white hover:bg-green-700 hover:border-black">
        <img
          src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-6.svg"
          alt="Icon"
          className="box-border caret-transparent flex h-6 w-6 md:hidden"
        />
        <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          Previous
        </span>
      </button>
      <div className="items-center box-border caret-transparent gap-x-6 flex gap-y-6">
        <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
          <div className="items-center aspect-square bg-amber-200 box-border caret-transparent flex border px-4 py-2 rounded-[50%] border-solid border-transparent md:px-6 md:py-4">
            <span className="font-medium box-border caret-transparent block text-center">
              1
            </span>
          </div>
          <div className="items-center aspect-square box-border caret-transparent flex border border-zinc-400 px-4 py-2 rounded-[50%] border-solid md:px-6 md:py-4 hover:bg-amber-200 hover:border-transparent">
            <span className="font-medium box-border caret-transparent block text-center">
              2
            </span>
          </div>
          <div className="items-center aspect-square box-border caret-transparent hidden min-h-0 min-w-0 border border-zinc-400 px-4 py-2 rounded-[50%] border-solid md:flex md:min-h-[auto] md:min-w-[auto] md:px-6 md:py-4 hover:bg-amber-200 hover:border-transparent">
            <span className="font-medium box-border caret-transparent inline min-h-0 min-w-0 text-center md:block md:min-h-[auto] md:min-w-[auto]">
              3
            </span>
          </div>
        </div>
        <img
          alt="image"
          src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/more.svg"
          className="box-border caret-transparent object-cover w-[17px]"
        />
        <div className="items-center aspect-square box-border caret-transparent flex border border-zinc-400 px-4 py-2 rounded-[50%] border-solid md:px-6 md:py-4 hover:bg-amber-200 hover:border-transparent">
          <span className="font-medium box-border caret-transparent block text-center">
            12
          </span>
        </div>
      </div>
      <button className="text-zinc-800 font-medium bg-transparent caret-transparent flex text-center border border-zinc-400 p-2 rounded-[56px] border-solid md:px-6 md:py-4 hover:text-white hover:bg-green-700 hover:border-black">
        <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          Next
        </span>
        <img
          src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-7.svg"
          alt="Icon"
          className="box-border caret-transparent flex h-6 w-6 md:hidden"
        />
      </button>
    </div>
  );
};
