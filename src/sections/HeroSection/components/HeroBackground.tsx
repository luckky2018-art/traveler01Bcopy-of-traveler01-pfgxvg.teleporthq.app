export const HeroBackground = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex basis-[0%] flex-col grow w-full px-6 md:px-20">
      <div className="absolute items-center box-border caret-transparent flex flex-col h-full justify-center w-full overflow-hidden m-auto inset-0">
        <video
          poster="https://c.animaapp.com/mhfo26pp0M5OPA/assets/hero-cover1-1500h.png"
          className="box-border caret-transparent h-full"
        ></video>
        <div className="absolute items-center bg-black/40 box-border caret-transparent flex flex-col h-full w-full m-auto inset-0"></div>
      </div>
      <div className="items-center box-border caret-transparent flex basis-[0%] flex-col grow w-full">
        <header className="items-center box-border caret-transparent flex w-full">
          <header className="relative items-center box-border caret-transparent flex justify-between max-w-[1440px] w-full p-4 md:px-0 md:py-12">
            <img
              alt="logo"
              src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/logo.svg"
              className="box-border caret-transparent h-[33px]"
            />
            <div className="items-center box-border caret-transparent gap-x-8 flex justify-center gap-y-8">
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
              <button className="aspect-square bg-white/30 caret-transparent flex min-h-[auto] min-w-[auto] text-center p-4 rounded-[50%] md:hidden md:min-h-0 md:min-w-0">
                <img
                  src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/icon-1.svg"
                  alt="Icon"
                  className="box-border caret-transparent block h-4 w-4 md:inline"
                />
              </button>
            </div>
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
          </header>
        </header>
        <div className="items-center box-border caret-transparent gap-x-12 flex flex-col h-full justify-center max-w-[900px] gap-y-12 w-full z-[100] pb-[100px] md:pb-0">
          <div className="items-center box-border caret-transparent gap-x-2 flex flex-col justify-center max-w-[900px] gap-y-2 w-full md:gap-x-6 md:gap-y-6">
            <h1 className="text-white text-[40px] font-bold box-border caret-transparent leading-10 text-center font-cormorant_infant md:text-[90px] md:leading-[90px]">
              See the world like a local
            </h1>
            <p className="text-white text-base box-border caret-transparent leading-6 max-w-[80%] text-center md:text-lg md:leading-[27px] md:max-w-[600px]">
              Find a local guide consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
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
        </div>
      </div>
    </div>
  );
};
