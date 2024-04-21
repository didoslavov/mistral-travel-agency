import porche from "/public/porche.png";
import smart from "/public/smart.png";
import cadillac from "/public/cadillac.png";
import bently from "/public/bently.png";
import dodge from "/public/dodge.png";
import kia from "/public/kia.png";
import jeep from "/public/jeep.png";
import ferrari from "/public/ferrari.png";
import tesla from "/public/tesla.png";
import ford from "/public/ford.png";
import Image from "next/image";

function Logos() {
  return (
    <div className="col-start-1 col-end-11 grid grid-cols-5 grid-rows-2 gap-y-12">
      <div>
        <Image src={porche} alt="Лого на автомобилна компания" />
      </div>
      <div>
        <Image src={smart} alt="Лого на автомобилна компания" />
      </div>
      <div>
        <Image src={cadillac} alt="Лого на автомобилна компания" />
      </div>
      <div>
        <Image src={bently} alt="Лого на автомобилна компания" />
      </div>
      <div>
        <Image src={dodge} alt="Лого на автомобилна компания" />
      </div>
      <div>
        <Image src={kia} alt="Лого на автомобилна компания" />
      </div>
      <div>
        <Image src={jeep} alt="Лого на автомобилна компания" />
      </div>
      <div>
        <Image src={ferrari} alt="Лого на автомобилна компания" />
      </div>
      <div>
        <Image src={tesla} alt="Лого на автомобилна компания" />
      </div>
      <div>
        <Image src={ford} alt="Лого на автомобилна компания" />
      </div>
    </div>
  );
}

export default Logos;
