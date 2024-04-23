import Image, { StaticImageData } from "next/image";
import bed from "/public/bed.png";
import plane from "/public/plane.png";
import pin from "/public/pin.png";

function Offer({ imgSrc }: { imgSrc: StaticImageData }) {
  return (
    <figure className="flex-1">
      <div className="overflow-hidden">
        <Image
          src={imgSrc}
          alt="Снимка на оферта за почивка"
          className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="bg-white p-4 pb-6">
        <h4 className="mb-4 text-[17px] font-bold leading-[21px] text-main-grey">
          Ски в Алпите в курорта Иглс, Австрия хотел Bon Alpina 3*
        </h4>
        <div className="flex justify-between">
          <div className="flex flex-col justify-end">
            <p className="text-xl font-bold leading-[25px] text-main-red-900">
              336лв
            </p>
            <p className="text-[15px] leading-[25px] line-through opacity-40">
              689лв
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 opacity-50">
              <Image src={bed} alt="Икона на легло" className="h-3 w-5 " />
              <p className="text-xs text-main-grey">8 нощувки</p>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <Image src={plane} alt="Икона на легло" className="h-4 w-5 " />
              <p className="text-xs text-main-grey">Самолет</p>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <Image src={pin} alt="Икона на легло" className="h-4 w-4 " />
              <p className="text-xs text-main-grey">Австрия</p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default Offer;
