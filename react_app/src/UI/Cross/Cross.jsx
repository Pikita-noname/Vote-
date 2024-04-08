import s from "./Cross.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cross = ({ isValid }) => {
  return (
    <div className={s.wrapper}>
      <div className={isValid ? s.tick_1 : s.cross_1} />
      <div className={isValid ? s.tick_2 : s.cross_2} />
    </div>
  );
};

export default Cross;
