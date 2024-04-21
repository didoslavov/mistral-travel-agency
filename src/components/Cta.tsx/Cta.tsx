function Cta() {
  return (
    <section className="col-span-full grid grid-cols-12 border-b bg-main-grey py-11 text-white">
      <div className="col-start-3 col-end-11 flex gap-16">
        <p className="flex-1 text-[25px] font-extrabold leading-10">
          Отстъпки и специални предложения налични само на имейл
        </p>
        <div className="flex-1 ps-4">
          <form className="mb-2 flex">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Въведете вашия имейл"
              className="placeholder:text-main-grey-700 flex-1 p-2 pl-4 placeholder:text-[13px] placeholder:leading-5"
            />
            <input
              type="submit"
              value="Абонирай се"
              className="bg-main-red-900 ps-10 text-[17px] font-semibold leading-[40px] tracking-tight text-[#F5F9FC]"
            />
          </form>
          <p className="text-[17px] leading-[25px]">
            Всеки месец ще получаваш първи най-добрите ни оферти
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cta;
