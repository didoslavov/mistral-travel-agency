function TableRow({ offer, price }: { offer: string; price: number }) {
  return (
    <tr className="flex w-full justify-between">
      <td>{offer}</td>
      <td className="text-xs font-bold md:text-sm">{price} лв</td>
    </tr>
  );
}

export default TableRow;
