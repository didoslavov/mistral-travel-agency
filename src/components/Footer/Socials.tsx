import Image from "next/image";
import facebook from "/public/facebook.png";
import instagram from "/public/instagram.png";

function Socials() {
  return (
    <article className="col-start-10 mt-10 text-nowrap text-[17px]">
      <div className="mb-4 flex flex-col items-center gap-4">
        <p>120к ни харесват в </p>
        <Image src={facebook} alt="Икона facebook" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <p>60к ни харесват в </p>
        <Image src={instagram} alt="Икона instagram" />
      </div>
    </article>
  );
}

export default Socials;
