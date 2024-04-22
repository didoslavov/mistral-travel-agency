import CtaForm from "./CtaForm";

function Cta() {
  return (
    <section className="col-span-full grid grid-cols-12 border-b bg-main-grey py-11 text-white">
      <div className="col-start-3 col-end-11 flex gap-16">
        <p className="flex-1 text-[25px] font-extrabold leading-10">
          Отстъпки и специални предложения налични само на имейл
        </p>
        <div className="flex-1 ps-4">
          <CtaForm />
          <p className="text-[17px] leading-[25px]">
            Всеки месец ще получаваш първи най-добрите ни оферти
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cta;
