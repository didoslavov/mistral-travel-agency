import hotel from "/public/hotel-logo.png";
import Image from "next/image";
import hotel1 from "/public/hotel1.png";
import hotel2 from "/public/hotel2.png";
import hotel3 from "/public/hotel3.png";
import hotel4 from "/public/hotel4.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Hotels() {
  return (
    <article className="mb-16 w-[90%]">
      <h3 className="mb-3 text-lg font-bold leading-10 text-main-grey">
        Хотели
      </h3>
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-4">
          <Image
            src={hotel}
            alt="Икона на хотел"
            className="text-main-red-900"
          />
          <h3 className="text-xl font-bold">Grand Halic 4****</h3>
        </div>
        <div className="mb-4 text-sm leading-[25px]">
          <p className="mb-6">
            Grand Hotel Halic предлага удобно местоположение в централния район
            Beyoglu и изглед към залива Златния рог. На пешеходно разстояние се
            намират площад „Таксим“ и кулата Галата. На място има закрит плувен
            басейн и СПА център.
          </p>
          <p>
            Хотелът предлага добре обзаведени стаи за гости и суити с кът за
            сядане и плоскоекранен телевизор със сателитни канали. Всяко
            помещение за настаняване има отопление и климатик, както и безплатен
            WiFi достъп.
          </p>
        </div>
        <div className="border-b border-b-main-grey-300 pb-7">
          <div className="relative flex gap-2 ">
            <FaAngleLeft className="absolute -left-6 top-[50%] -translate-y-[50%] text-lg font-light leading-[25px] hover:cursor-pointer" />
            <Image src={hotel1} alt="Снимка на подредена маса за хранене" />
            <Image src={hotel2} alt="Снимка на баня в хотелска стая" />
            <Image src={hotel3} alt="Снимка на спалня в хотелса стая" />
            <Image src={hotel4} alt="Снимка на блок маса в ресторант" />
            <FaAngleRight className="absolute -right-5 top-[50%] -translate-y-[50%] text-lg font-light leading-[25px] hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 flex items-center gap-4">
          <Image
            src={hotel}
            alt="Икона на хотел"
            className="text-main-red-900"
          />
          <h3 className="text-xl font-bold">Grand Halic 4****</h3>
        </div>
        <div className="mb-4 text-sm leading-[25px]">
          <p className="mb-6">
            Grand Hotel Halic предлага удобно местоположение в централния район
            Beyoglu и изглед към залива Златния рог. На пешеходно разстояние се
            намират площад „Таксим“ и кулата Галата. На място има закрит плувен
            басейн и СПА център.
          </p>
          <p>
            Хотелът предлага добре обзаведени стаи за гости и суити с кът за
            сядане и плоскоекранен телевизор със сателитни канали. Всяко
            помещение за настаняване има отопление и климатик, както и безплатен
            WiFi достъп.
          </p>
        </div>
        <div className="border-b border-b-main-grey-300 pb-7">
          <div className="relative flex gap-2 ">
            <FaAngleLeft className="absolute -left-6 top-[50%] -translate-y-[50%] text-lg font-light leading-[25px] hover:cursor-pointer" />
            <Image src={hotel1} alt="Снимка на подредена маса за хранене" />
            <Image src={hotel2} alt="Снимка на баня в хотелска стая" />
            <Image src={hotel3} alt="Снимка на спалня в хотелса стая" />
            <Image src={hotel4} alt="Снимка на блок маса в ресторант" />
            <FaAngleRight className="absolute -right-5 top-[50%] -translate-y-[50%] text-lg font-light leading-[25px] hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Hotels;
