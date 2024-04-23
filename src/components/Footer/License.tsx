import Image from "next/image";
import logo from "/public/logo.png";
import bulgaria from "/public/bulgaria.png";
import shield from "/public/shield.png";

function License() {
  return (
    <article className="col-span-full col-start-3 flex flex-col md:col-span-4 md:col-start-2 lg:col-start-3 xl:col-span-2 xl:col-start-2 xl:pb-4 xl:ps-6 2xl:col-start-3">
      <Image src={logo} alt="Лого на компанията" className="mb-12" />
      <div className="mb-6 flex gap-4">
        <Image
          src={bulgaria}
          alt="Лого на България"
          className="h-[42px] w-14"
        />
        <p className="w-[45%] text-xs font-extrabold leading-[15px]">
          Лиценз, удостоверение за регистрация № 05236
        </p>
      </div>
      <div className="mb-12 flex gap-8">
        <Image
          src={shield}
          alt="Лого на застрахователна компания"
          className="h-[44px] w-[41px]"
        />
        <p className="w-[50%] text-xs font-extrabold">
          Застраховка &quot;Отговорност на туроператора&quot;
        </p>
      </div>
      <div className="text-xs leading-5 opacity-50">
        <p>All rights reserved.</p>
        <p>© 2020 Mistral</p>
      </div>
    </article>
  );
}

export default License;
