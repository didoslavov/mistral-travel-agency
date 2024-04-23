import Image from "next/image";
import facebook from "/public/facebook.png";
import instagram from "/public/instagram.png";

function Socials() {
  return (
    <article className="col-span-full col-start-3 md:col-span-4 md:col-start-7 lg:col-start-8 xl:col-start-11 xl:mt-10 xl:text-nowrap xl:text-[17px] 2xl:col-span-1 2xl:col-start-10">
      <div className="mb-4 flex flex-col gap-4 2xl:items-center">
        <p>120к ни харесват в </p>
        <Image src={facebook} alt="Икона facebook" />
      </div>
      <div className="flex flex-col gap-6 2xl:items-center">
        <p>60к ни харесват в </p>
        <Image src={instagram} alt="Икона instagram" />
      </div>
    </article>
  );
}

export default Socials;
