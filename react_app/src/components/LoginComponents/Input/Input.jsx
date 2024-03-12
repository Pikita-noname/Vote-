import { useState } from "react";
import s from "./Input.module.css";

const Input = ({label, value}) => {
    const [inputValue, setInputValue] = useState(value);
    return (
        <>
        <label>{label}</label>
        <input type="numeric" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </>
    );
}

export default Input;
