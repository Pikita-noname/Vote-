import s from "./VoteList.module.css";

const VoteList = ({votes}) => {
  return votes?.length ? (
    <div></div>
  ) : (
    <div className={s.noVotesBlock}>
      <h2 className={s.title}>Список Пуст!</h2>
    </div>
  );
};

export default VoteList;
