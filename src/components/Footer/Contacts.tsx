import React from "react";

function Contacts() {
  return (
    <article className="col-span-full col-start-3 md:col-span-4 md:col-start-7 lg:col-start-8 xl:col-span-3 xl:col-start-4 xl:self-center xl:ps-2 xl:pt-10 2xl:col-span-2 2xl:col-start-5">
      <h3 className="mb-4 text-[17px] font-extrabold leading-[25px] md:mb-7">
        Контакти
      </h3>
      <ul className="flex flex-col gap-2 text-[17px]">
        <li className="w-[65%] leading-[25px]">
          1111 София, България, ул. Христо Белчев 34
        </li>
        <li>+359 884 47 30 34 // мобилен</li>
        <li>+359 2 980 44 59 // офис</li>
        <li> +359 2 980 41 05 // факс</li>
        <li>mistral@mistralbg.com</li>
        <li className="w-[65%]">Понеделник - Петък 10.00ч. - 18.00ч.</li>
      </ul>
    </article>
  );
}

export default Contacts;
