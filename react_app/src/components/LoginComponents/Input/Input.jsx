import { forwardRef, useState } from "react";
import s from "./Input.module.css";

const Input = forwardRef(
  (
    { label, value, inputType = "text", onChange, placeholder, errors },
    ref
  ) => {
    const inputTypes = {
      phone: "numeric",
      text: "text",
      password: "password",
    };
    return (
      <>
        <div className={s.wrapper}>
          <div className={s.labelWrap}>
            {errors?.message ? (
              <label className={s.error}>{errors?.message}</label>
            ) : (
              <label className={s.label}>{label}</label>
            )}
          </div>
          <input
            ref={ref}
            placeholder={placeholder}
            className={s.input}
            type={inputTypes[inputType]}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </>
    );
  }
);

export default Input;
