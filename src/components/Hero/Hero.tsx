import Countdown from "./Countdown/Countdown";
import InfoCards from "./InfoCards/InfoCards";

function Hero() {
  return (
    <section className="col-span-full grid grid-cols-12 bg-[url(/hero-bg.png)] bg-center text-[#FFFFFE]">
      <div className="relative col-start-4 col-end-10 row-span-2 flex flex-col items-center pt-24">
        <h1 className="mb-[10px] text-[47px] font-extrabold">
          Арабска приказка в Йордания
        </h1>
        <p className="mb-[70px] border-2 border-white px-[32px] py-[7px] text-xl">
          11-15 Март
        </p>
        <Countdown />
        <button className="mb-3 rounded-[27.5px] bg-main-red px-7 py-[14px] font-bold leading-[25px] transition-all duration-300 hover:bg-main-red-900">
          Резервирайте сега
        </button>
        <p className="mb-28 text-sm text-[#FEFEFE] opacity-80">
          от <span className="mr-1">1</span>149,00лв.
        </p>
        <InfoCards />
      </div>
    </section>
  );
}

export default Hero;
