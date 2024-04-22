"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Notification from "../Notification/Notification";

function CtaForm() {
  const [email, setPhone] = useState("");
  const [notification, setNotification] = useState({ type: "", text: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    if (!email.trim()) {
      setNotification({
        type: "error",
        text: "Моля, въведете валиден телефонен номер!",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setNotification({
        type: "error",
        text: "Моля въведете валиден имейл адрес.",
      });
      return;
    }
    setPhone("");

    setNotification({
      type: "success",
      text: `Очаквайте нашите оферти на ${email}!`,
    });
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const closeNotification = () => {
    setNotification({ type: "", text: "" });
  };

  useEffect(() => {
    if (notification.type) {
      const timeoutId = setTimeout(() => {
        setNotification({ type: "", text: "" });
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [notification]);
  return (
    <>
      {notification.type && (
        <Notification
          type={notification.type}
          text={notification.text}
          closeNotification={closeNotification}
        />
      )}
      <form className="mb-2 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Въведете вашия имейл"
          className="flex-1 p-2 pl-4 text-main-grey outline-none -outline-offset-2 transition-all duration-300 placeholder:text-[13px] placeholder:leading-5 placeholder:text-main-grey-700 focus:outline-main-grey-700"
          onChange={onEmailChange}
          value={email}
        />
        <input
          type="submit"
          value="Абонирай се"
          className="bg-main-red-900 ps-10 text-[17px] font-semibold leading-[40px] tracking-tight text-[#F5F9FC] decoration-neutral-300 transition-all hover:cursor-pointer hover:bg-main-red"
        />
      </form>
    </>
  );
}

export default CtaForm;
