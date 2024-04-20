import Countdown from "./Countdown";
import InfoCards from "./InfoCards";

function Hero() {
  return (
    <section className="row-start-2  flex w-screen flex-col items-center bg-[url(/hero-bg.png)] bg-cover bg-bottom text-[#FFFFFE]">
      <h1 className="mb-[10px] mt-[90px] text-[47px] font-extrabold">
        Арабска приказка в Йордания
      </h1>
      <p className="mb-[70px] border-2 border-white px-[32px] py-[7px] text-xl">
        11-15 Март
      </p>
      <Countdown />
      <button className="bg-main-red mb-3 rounded-[27.5px] px-7 py-[14px] font-bold leading-[25px]">
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
