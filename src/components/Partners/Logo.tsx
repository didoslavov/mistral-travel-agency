import Image, { StaticImageData } from "next/image";

function Logo({ logo }: { logo: StaticImageData }) {
  return (
    <div>
      <Image src={logo} alt="Лого на автомобилна компания" />
    </div>
  );
}

export default Logo;
