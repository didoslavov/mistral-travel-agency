import InfoCard from "./InfoCard";
import { cards } from "@/data/heroData";

function InfoCards() {
  return (
    <div className="flex -translate-y-9 gap-[10px]">
      {cards.map((c, i) => (
        <InfoCard text={c.text} Icon={c.icon} key={i} />
      ))}
    </div>
  );
}

export default InfoCards;
