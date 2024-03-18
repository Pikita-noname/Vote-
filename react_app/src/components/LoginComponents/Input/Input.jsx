import { useState } from "react";
import s from "./Input.module.css";

const Input = ({ label, value, inputType = "text" }) => {
  const [inputValue, setInputValue] = useState(value);

  const inputTypes = {
    phone: "numeric",
    text: "text",
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.labelWrap}>
        <label className={s.label}>{label}</label>
        </div>
        <input
        placeholder="+ 7 (999) 000 00 00"
          className={s.input}
          type={inputTypes[inputType]}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
