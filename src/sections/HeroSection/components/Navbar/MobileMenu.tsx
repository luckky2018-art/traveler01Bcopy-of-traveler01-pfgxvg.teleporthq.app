export const MobileMenu = () => {
  return (
    <div className="fixed bg-green-700 box-border caret-transparent hidden flex-col h-[1000px] justify-between w-full z-[1000] p-4 left-0 top-0 md:bg-white md:p-8">
      <div className="items-start box-border caret-transparent flex flex-col">
        <div className="items-center box-border caret-transparent flex justify-between w-full mb-12">
          <img
            alt="logo"
            src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/logo.svg"
            className="box-border caret-transparent h-[33px]"
          />
          <div className="items-center box-border caret-transparent flex justify-center">
            <img
              src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-2.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 w-4"
            />
          </div>
        </div>
        <nav className="items-start box-border caret-transparent flex flex-col shrink-0">
          <span className="text-white box-border caret-transparent block mb-4 md:text-black">
            About
          </span>
          <span className="text-white box-border caret-transparent block mb-4 md:text-black">
            Features
          </span>
          <span className="text-white box-border caret-transparent block mb-4 md:text-black">
            Pricing
          </span>
          <span className="text-white box-border caret-transparent block mb-4 md:text-black">
            Team
          </span>
          <span className="text-white box-border caret-transparent block mb-4 md:text-black">
            Blog
          </span>
        </nav>
        <div className="items-center box-border caret-transparent flex shrink-0 mt-4">
          <button className="bg-white caret-transparent block text-center border mr-8 px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
            Login
          </button>
          <button className="bg-white caret-transparent block text-center border px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
            Register
          </button>
        </div>
      </div>
      <div className="box-border caret-transparent flex">
        <img
          src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-3.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 w-4 mr-8"
        />
        <img
          src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-4.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 w-4 mr-8"
        />
        <img
          src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-5.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 w-4"
        />
      </div>
    </div>
  );
};
