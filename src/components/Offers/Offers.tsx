import Offer from "./Offer";
import solun from "/public/offer.png";
import halkidiki from "/public/offer1.png";

function Offers() {
  return (
    <section className="col-span-full grid grid-cols-12 justify-items-center bg-main-grey-100 pb-28 pl-6 pt-6 md:justify-items-start md:pl-0 md:pt-16">
      <h2 className="col-span-full col-start-1 mb-6 text-[27px] font-bold leading-10 text-main-grey md:col-start-2 xl:col-start-3">
        Още предложения
      </h2>
      <article className="col-span-full col-start-1 row-start-2 flex w-[80%] flex-col gap-10 sm:w-[60%] md:col-start-2 md:col-end-12 md:w-full md:flex-row md:gap-6 lg:col-start-2 lg:flex-nowrap xl:col-start-3">
        <Offer imgSrc={solun} />
        <Offer imgSrc={halkidiki} />
        <Offer imgSrc={solun} />
        <Offer imgSrc={halkidiki} />
      </article>
    </section>
  );
}

export default Offers;
