import React from "react";
import s from  "./Button.module.css"

 const Button = ({children, className, onClick}) => {
    return (
      <>
        <button onClick={onClick} className={`${s.button} ${className ?? ""}`}>
          {children}
        </button>
      </>
    );
}

export default Button;