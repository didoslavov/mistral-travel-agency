import { singersData } from "@/data/contentData";
import Singer from "./Singer";

function Singers() {
  return (
    <article className="mb-10">
      <h3 className="mb-2 text-lg font-bold leading-10">Изпълнители</h3>
      <div className="flex gap-4">
        {singersData.map((s, i) => (
          <Singer key={i} img={s.img} name={s.name} />
        ))}
      </div>
    </article>
  );
}

export default Singers;
