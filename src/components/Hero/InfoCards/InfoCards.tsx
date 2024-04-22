import InfoCard from "./InfoCard";
import { cards } from "@/data/heroData";

function InfoCards() {
  return (
    <div className="absolute bottom-0 z-50 col-start-4 row-start-3 mt-12 flex gap-[10px] pt-28">
      {cards.map((c, i) => (
        <InfoCard text={c.text} Icon={c.icon} key={i} />
      ))}
    </div>
  );
}

export default InfoCards;
