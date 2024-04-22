import Countdown from "./Countdown/Countdown";
import InfoCards from "./InfoCards/InfoCards";

function Hero() {
  return (
    <section className="z-50 flex w-screen flex-col items-center bg-[url(/hero-bg.png)] bg-cover bg-bottom text-[#FFFFFE]">
      <h1 className="mb-[10px] mt-[90px] text-[47px] font-extrabold">
        Арабска приказка в Йордания
      </h1>
      <p className="mb-[70px] border-2 border-white px-[32px] py-[7px] text-xl">
        11-15 Март
      </p>
      <Countdown />
      <button className="mb-3 rounded-[27.5px] bg-main-red px-7 py-[14px] font-bold leading-[25px] transition-all duration-300 hover:bg-main-red-900">
        Резервирайте сега
      </button>
      <p className="mb-16 text-sm text-[#FEFEFE] opacity-80">
        от <span className="mr-1">1</span>149,00лв.
      </p>
      <InfoCards />
    </section>
  );
}

export default Hero;
