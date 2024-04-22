import Link from "next/link";
import Countdown from "./Countdown/Countdown";
import InfoCards from "./InfoCards/InfoCards";

function Hero() {
  return (
    <section className="col-span-full grid grid-cols-12 bg-[url(/hero-bg.png)] bg-center text-[#FFFFFE]">
      <div className="relative col-start-2 col-end-12 row-span-2 flex flex-col items-center pt-12 xl:col-start-4 xl:col-end-10 xl:pt-24">
        <h1 className="mb-6 text-lg font-extrabold md:mb-10 md:text-2xl lg:text-4xl 2xl:mb-[10px] 2xl:text-[47px]">
          Арабска приказка в Йордания
        </h1>
        <p className="mb-8 border-2 border-white px-4 py-1 text-sm md:mb-12 lg:mb-[70px] lg:px-[32px] lg:py-[7px] lg:text-xl">
          11-15 Март
        </p>
        <Countdown />
        <Link
          href="#"
          className="mb-3 rounded-[27.5px] bg-main-red px-4 py-2 transition-all duration-300 hover:cursor-pointer hover:bg-main-red-900 md:px-7 md:py-[14px] md:font-bold md:leading-[25px]"
        >
          Резервирайте сега
        </Link>
        <p className="mb-16 text-sm text-[#FEFEFE] opacity-80 md:mb-28">
          от <span className="mr-1">1</span>149,00лв.
        </p>
        <InfoCards />
      </div>
    </section>
  );
}

export default Hero;
