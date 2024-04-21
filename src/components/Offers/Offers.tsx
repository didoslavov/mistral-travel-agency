import Offer from "./Offer";
import solun from "/public/offer.png";
import halkidiki from "/public/offer1.png";

function Offers() {
  return (
    <section className="col-span-full grid grid-cols-12 bg-main-grey-100 pt-16">
      <h2 className="col-start-3 col-end-11 mb-6 text-[27px] font-bold leading-10 text-main-grey">
        Още предложения
      </h2>
      <article className="col-start-3 col-end-11 row-start-2 flex gap-6">
        <Offer imgSrc={solun} />
        <Offer imgSrc={halkidiki} />
        <Offer imgSrc={solun} />
        <Offer imgSrc={halkidiki} />
      </article>
    </section>
  );
}

export default Offers;
