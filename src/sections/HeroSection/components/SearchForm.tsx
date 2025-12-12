export const SearchForm = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-center max-w-[700px] w-full rounded-[50px] border-4 border-solid border-white/30">
      <div className="items-center bg-white box-border caret-transparent gap-x-4 flex h-full justify-center gap-y-4 w-full pl-6 pr-2 py-2 rounded-[500px]">
        <img
          alt="image"
          src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/location.svg"
          className="box-border caret-transparent h-[22px] object-cover"
        />
        <input
          type="text"
          placeholder="Destination"
          className="box-border caret-transparent block w-full border-zinc-400 my-2 p-0 border-l-0 border-y-0 border-r border-solid"
        />
        <input
          type="date"
          placeholder="Date"
          className="box-border caret-transparent block w-6/12 border-zinc-400 my-2 p-0 border-l-0 border-y-0 border-r border-solid"
        />
        <input
          type="number"
          placeholder="Group size"
          className="box-border caret-transparent block w-6/12 p-1"
        />
        <div className="items-center bg-amber-200 box-border caret-transparent flex justify-center p-3 rounded-[50%]">
          <img
            alt="image"
            src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/search.svg"
            className="box-border caret-transparent object-cover w-[18px]"
          />
        </div>
      </div>
    </div>
  );
};
