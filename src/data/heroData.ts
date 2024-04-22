import { FaCalendar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaBed } from "react-icons/fa";

export const cards = [
  {
    text: "8 нощувки",
    icon: FaBed,
  },
  {
    text: "Самолет",
    icon: FaPlane,
  },
  {
    text: "Австрия",
    icon: FaMapMarkerAlt,
  },
  {
    text: "11 - 15 Mart",
    icon: FaCalendar,
  },
];

export function getCountdownUnits(remainingTime: {
  days: number;
  hours: number;
  minutes: number;
}) {
  return [
    {
      label: "дни",
      value: remainingTime.days,
    },
    {
      label: "часа",
      value: remainingTime.hours,
    },
    {
      label: "минути",
      value: remainingTime.minutes,
    },
  ];
}
