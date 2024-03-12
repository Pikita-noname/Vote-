import { useState } from "react";
import { Button } from "./UI/Button/Button.jsx";
import s from './App.module.css';
import { VoteListElement } from "./components/VoteListElement/VoteListElement.jsx";

function App() {
  return (
    <>
      <div className={s.wrapper}>
        <VoteListElement
        elementData={{name: "Какое то голосование"}}
        />
      </div>
    </>
  );
}

export default App;
