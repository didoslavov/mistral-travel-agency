import { promosData } from "@/data/contentData";
import React from "react";
import TableRow from "./TableRow";

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
          {promosData.map((p, i) => (
            <TableRow key={i} offer={p.offer} price={p.price} />
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default Promos;
