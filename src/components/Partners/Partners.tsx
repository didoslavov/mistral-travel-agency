import { logosData } from "@/data/partnersData";
import Logo from "./Logo";

function Partners() {
  return (
    <section className="col-span-full grid grid-cols-12 bg-main-grey-100 p-6 2xl:p-20">
      <div className="col-span-full 2xl:col-start-3 2xl:col-end-11">
        <h2 className="mb-4 text-[27px] font-bold leading-10 text-main-grey sm:px-12 xl:px-0">
          Партньори
        </h2>
        <p className="mb-6 w-full text-sm leading-[21px] text-main-grey sm:mb-4 sm:px-12 md:w-[70%] lg:mb-12 xl:px-0 2xl:w-[36%]">
          Our customers accomplish amazing things every day. They work to find
          cures to cancer, travel to space.
        </p>
        <div className="col-start-1 col-end-11 grid grid-cols-2 grid-rows-2 justify-items-center gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {logosData.map((l, i) => (
            <Logo key={i} logo={l} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
