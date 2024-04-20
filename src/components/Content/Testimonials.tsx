import Image from "next/image";
import user from "/public/user.png";
import user1 from "/public/user1.png";
import user2 from "/public/user2.png";

function Testimonials() {
  return (
    <article className="grid w-[90%] grid-cols-2 gap-x-4">
      <h2 className="col-span-full col-start-1 mb-6 text-[27px] font-bold leading-10 text-main-grey">
        Отзиви от клиенти
      </h2>
      <figure className="mb-12 flex flex-col gap-6">
        <div className="relative">
          <p className="bg-main-grey-200 before:clip-path before:bg-main-grey-200 rounded-2xl p-6 pb-8 text-sm leading-[25px] text-main-grey before:absolute before:-bottom-4 before:left-4 before:h-4 before:w-5">
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
      <figure className="mb-12 flex flex-col gap-6">
        <div className="relative">
          <p className="bg-main-grey-200 before:clip-path before:bg-main-grey-200 rounded-2xl p-6 pb-[110px] text-sm leading-[25px] text-main-grey before:absolute before:-bottom-4 before:left-4 before:h-4 before:w-5">
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
      <figure className="flex flex-col gap-6">
        <div className="relative">
          <p className="bg-main-grey-200 before:clip-path before:bg-main-grey-200 rounded-2xl p-6 pb-8 text-sm leading-[25px] text-main-grey before:absolute before:-bottom-4 before:left-4 before:h-4 before:w-5">
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
      <figure className="flex flex-col gap-6">
        <div className="relative">
          <p className="bg-main-grey-200 before:clip-path before:bg-main-grey-200 rounded-2xl p-6 pb-[110px] text-sm leading-[25px] text-main-grey before:absolute before:-bottom-4 before:left-4 before:h-4 before:w-5">
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
