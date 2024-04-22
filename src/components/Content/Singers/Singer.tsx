import Image, { StaticImageData } from "next/image";

function Singer({ img, name }: { img: StaticImageData; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="overflow-hidden">
        <Image
          src={img}
          alt="Снимка на Фет Джо"
          className="transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <h4>{name}</h4>
    </div>
  );
}

export default Singer;
