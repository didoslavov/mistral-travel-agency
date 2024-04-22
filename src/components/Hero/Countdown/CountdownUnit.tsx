import React from "react";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <time className="text-4xl md:text-[58px]">{value}</time>
      <span className="text-[14px]">{label}</span>
    </div>
  );
}

export default CountdownUnit;
