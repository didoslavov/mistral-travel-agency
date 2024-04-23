import React from "react";

function Promos() {
  return (
    <article className="mb-14">
      <h3 className="mb-4 text-lg font-bold leading-10 text-main-grey md:mb-6">
        Промо пакети
      </h3>
      <table className="flex flex-col">
        <thead className="mb-2 text-[13px] font-bold">
          <tr className="flex justify-between gap-4">
            <th className="flex-[60%]  bg-main-grey-200 px-4 py-2 text-start">
              <span className="opacity-[30%]">Настаняване</span>
            </th>
            <th className="max-w-[80%] flex-1  bg-main-grey-200 px-4 py-2 text-start">
              <span className="opacity-[30%]">Цена</span>
            </th>
          </tr>
        </thead>
        <tbody className="mt-2 flex flex-col gap-3 pr-1 ps-4 text-xs sm:pr-14 sm:text-sm">
          <tr className="flex w-full justify-between">
            <td>1 човек в двойна стая</td>
            <td className="text-sm font-bold">1149 лв</td>
          </tr>
          <tr className="flex w-full justify-between">
            <td>Трети възрастен</td>
            <td className="text-sm font-bold">1100 лв</td>
          </tr>
          <tr className="flex w-full justify-between">
            <td>Единична стая</td>
            <td className="text-sm font-bold">1548 лв</td>
          </tr>
          <tr className="flex w-full justify-between">
            <td>Дете 2 -5.99 г. в стая с 2-ма възрастни</td>
            <td className="text-sm font-bold">560 лв</td>
          </tr>
          <tr className="flex w-full justify-between">
            <td>Дете 6 -11.99 г. в стая с 2-ма възрастни</td>
            <td className="text-sm font-bold">728 лв</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default Promos;
