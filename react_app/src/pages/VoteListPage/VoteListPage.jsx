import { useState } from "react";
import { AddVote } from "../../components/VoteListComponents/AddVote/AddVote";
import VoteList from "../../components/VoteListComponents/VoteList/VoteList";
import Button from "../../UI/Button/Button";
import s from "./VoteListPage.module.css";

const VoteListPage = () => {
  const [isAddVote, setIsAddVote] = useState(false);
  return (
    <>
      {isAddVote ? (
        <div className={s.main}>
          <div className={s.header}>
            <h1 className={s.title}>Создание Голосования</h1>
            <Button className={s.button} onClick={() => setIsAddVote(false)}>
              Отмена
            </Button>
          </div>
          <AddVote />
        </div>
      ) : (
        <div className={s.main}>
          <div className={s.header}>
            <h1 className={s.title}>Список Голосований</h1>
            <Button className={s.button} onClick={() => setIsAddVote(true)}>
              Добавить
            </Button>
          </div>
          <VoteList />
        </div>
      )}
    </>
  );
};

export default VoteListPage;
