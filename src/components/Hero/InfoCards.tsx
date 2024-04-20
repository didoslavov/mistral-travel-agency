import { FaCalendar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaBed } from "react-icons/fa";

function InfoCards() {
  return (
    <div className="flex -translate-y-9 gap-[10px]">
      <div className="bg-main-red flex flex-col items-center px-[60px] py-4">
        <FaBed className="mb-1 text-[28px]" />
        <p className="text-xs leading-4">8 нощувки</p>
      </div>
      <div className="bg-main-red flex flex-col items-center px-[60px] py-4">
        <FaPlane className="mb-1 text-[28px]" />
        <p className="text-xs leading-4">Самолет</p>
      </div>
      <div className="bg-main-red flex flex-col items-center px-[60px] py-4">
        <FaMapMarkerAlt className="mb-1 text-[28px]" />
        <p className="text-xs leading-4">Австрия</p>
      </div>
      <div className="bg-main-red flex flex-col items-center px-[60px] py-4">
        <FaCalendar className="mb-1 text-[28px]" />
        <p className="text-xs leading-4">11 - 15 Mart</p>
      </div>
    </div>
  );
}

export default InfoCards;
