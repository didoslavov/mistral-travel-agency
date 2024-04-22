import InfoCard from "./InfoCard";
import { cards } from "@/data/heroData";

function InfoCards() {
  return (
    <div className="absolute -bottom-6 z-40 col-start-4 row-start-3 mt-12 flex gap-[10px]  xl:pt-28">
      {cards.map((c, i) => (
        <InfoCard text={c.text} Icon={c.icon} key={i} />
      ))}
    </div>
  );
}

export default InfoCards;
