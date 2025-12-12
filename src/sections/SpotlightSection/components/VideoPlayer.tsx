export const VideoPlayer = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex flex-col h-full w-full">
      <div className="absolute items-center bg-black/20 box-border caret-transparent flex flex-col h-full justify-center pointer-events-none w-full m-auto inset-0">
        <img
          alt="image"
          src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/play.svg"
          className="box-border caret-transparent object-cover w-[115px]"
        />
      </div>
      <video
        poster="https://c.animaapp.com/mhfo26pp0M5OPA/assets/spotlight-cover1-1500w.png"
        className="box-border caret-transparent w-full"
      ></video>
    </div>
  );
};
