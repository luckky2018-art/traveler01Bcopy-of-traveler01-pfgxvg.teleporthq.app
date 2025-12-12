export const DestinationFilters = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-2 flex flex-wrap justify-center gap-y-2 md:gap-x-4 md:flex-nowrap md:justify-normal md:gap-y-4">
      <button className="aspect-square bg-amber-200 caret-transparent block text-center p-4 rounded-[50%]">
        All
      </button>
      <button className="text-zinc-800 font-medium bg-transparent caret-transparent block text-center border border-zinc-400 p-4 rounded-[56px] border-solid hover:text-white hover:bg-green-700 hover:border-black">
        Popular
      </button>
      <button className="text-zinc-800 font-medium bg-transparent caret-transparent block text-center border border-zinc-400 p-4 rounded-[56px] border-solid hover:text-white hover:bg-green-700 hover:border-black">
        Featured
      </button>
      <button className="text-zinc-800 font-medium bg-transparent caret-transparent block text-center border border-zinc-400 p-4 rounded-[56px] border-solid hover:text-white hover:bg-green-700 hover:border-black">
        Trending
      </button>
    </div>
  );
};
