import Image from "next/image";
import user from "/public/user.png";
import user1 from "/public/user1.png";
import user2 from "/public/user2.png";

function Testimonials() {
  return (
    <article className="grid grid-cols-2 gap-x-4 2xl:w-[90%]">
      <h3 className="col-span-full col-start-1 mb-6 text-xl font-bold leading-10 text-main-grey lg:text-[27px]">
        Отзиви от клиенти
      </h3>
      <figure className="col-span-full mb-12 flex flex-col gap-6 sm:col-span-1">
        <div className="relative">
          <p className="before:clip-path rounded-2xl bg-main-grey-200 p-6 pb-8 text-sm leading-[25px] text-main-grey before:absolute before:-bottom-3 before:left-4 before:h-4 before:w-5 before:bg-main-grey-200">
            A visual guide could be a wireframe, creative composition,
            or information architecture. A device that enables collaboration
            will lessen the chance of work having to be completely redone.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="rounded-full bg-main-red-900 p-4">
            <Image src={user} alt="Аватар" />
          </div>
          <div className="text-main-grey">
            <h4 className="leiding-[25px] text-[17px] font-extrabold">
              John Johnson
            </h4>
            <p className="text-[13px] leading-5 opacity-50">
              Co-founder of Forpeople
            </p>
          </div>
        </div>
      </figure>
      <figure className="col-span-full mb-12 flex flex-col gap-6 sm:col-span-1">
        <div className="relative">
          <p className="before:clip-path rounded-2xl bg-main-grey-200 p-6 pb-[110px] text-sm leading-[25px] text-main-grey before:absolute before:-bottom-3 before:left-4 before:h-4 before:w-5 before:bg-main-grey-200">
            A visual guide could be a wireframe, creative composition,
            or information architecture.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="">
            <Image src={user2} alt="Аватар" />
          </div>
          <div className="text-main-grey">
            <h4 className="leiding-[25px] text-[17px] font-extrabold">
              Cha Ji-Hun
            </h4>
            <p className="text-[13px] leading-5 opacity-50">
              Co-founder of Forpeople
            </p>
          </div>
        </div>
      </figure>
      <figure className="col-span-full mb-12 flex flex-col gap-6 sm:col-span-1 lg:mb-0">
        <div className="relative">
          <p className="before:clip-path rounded-2xl bg-main-grey-200 p-6 pb-8 text-sm leading-[25px] text-main-grey before:absolute before:-bottom-3 before:left-4 before:h-4 before:w-5 before:bg-main-grey-200">
            A visual guide could be a wireframe, creative composition,
            or information architecture. A device that enables collaboration
            will lessen the chance of work having to be completely redone.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="relative rounded-full bg-main-red-900 p-4">
            <span className="before:absolute before:right-[50%] before:top-[50%] before:h-2 before:w-2 before:-translate-y-[90%] before:translate-x-[40%] before:rounded-full before:bg-white"></span>
            <Image src={user} alt="Аватар" />
          </div>
          <div className="text-main-grey">
            <h4 className="leiding-[25px] text-[17px] font-extrabold">
              Cha Ji-Hun
            </h4>
            <p className="text-[13px] leading-5 opacity-50">
              Co-founder of Forpeople
            </p>
          </div>
        </div>
      </figure>
      <figure className="col-span-full flex flex-col gap-6 sm:col-span-1">
        <div className="relative">
          <p className="before:clip-path rounded-2xl bg-main-grey-200 p-6 pb-[110px] text-sm leading-[25px] text-main-grey before:absolute before:-bottom-3 before:left-4 before:h-4 before:w-5 before:bg-main-grey-200">
            A visual guide could be a wireframe, creative composition,
            or information architecture.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="">
            <Image src={user2} alt="Аватар" />
          </div>
          <div className="text-main-grey">
            <h4 className="leiding-[25px] text-[17px] font-extrabold">
              Cha Ji-Hun
            </h4>
            <p className="text-[13px] leading-5 opacity-50">
              Co-founder of Forpeople
            </p>
          </div>
        </div>
      </figure>
    </article>
  );
}

export default Testimonials;
