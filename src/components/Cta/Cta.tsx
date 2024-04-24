import CtaForm from "./CtaForm";

function Cta() {
  return (
    <section className="col-span-full grid grid-cols-12 justify-items-center border-b bg-main-grey py-11 text-white">
      <div className="col-start-2 col-end-12 flex flex-col items-center gap-8 md:col-start-3 md:col-end-11 lg:col-start-2 lg:col-end-12 lg:flex-row lg:items-start lg:gap-16 2xl:col-start-3 2xl:col-end-11">
        <p className="flex-1 text-center text-sm font-extrabold leading-10 sm:text-xl md:px-0 lg:text-start lg:text-[25px]">
          Отстъпки и специални предложения налични само на имейл
        </p>
        <div className="flex-1 ps-4">
          <CtaForm />
          <p className="text-pretty text-center text-xs leading-[25px] sm:text-sm lg:text-[17px] 2xl:text-start">
            Всеки месец ще получаваш първи най-добрите ни оферти
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cta;
