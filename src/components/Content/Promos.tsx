import React from "react";

function Promos() {
  return (
    <article className="w-[93%]">
      <h2 className="mb-6 text-lg font-bold leading-10 text-main-grey">
        Промо пакети
      </h2>
      <table className="flex flex-col">
        <thead className="mb-2 text-[13px] font-bold">
          <tr className="flex justify-between gap-4">
            <th className="bg-main-grey-200  flex-[60%] px-4 py-2 text-start">
              <span className="opacity-[30%]">Настаняване</span>
            </th>
            <th className="bg-main-grey-200 max-w-[80%]  flex-1 px-4 py-2 text-start">
              <span className="opacity-[30%]">Цена</span>
            </th>
          </tr>
        </thead>
        <tbody className="mt-2 flex flex-col gap-3 pr-16 ps-4 text-sm">
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
