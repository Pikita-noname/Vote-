import Input from "../../components/LoginComponents/Input/Input";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <div className={s.pageWrapper}>
        <div className={s.background}>
          <div>
            <span className={s.label}>Vote!</span>
          </div>
          <div className={s.modalWrapper}>
            <div className={s.titleWrapper}>
              <p className={`${s.title} ${s.firstLetter}`}>А</p>
              <p className={s.title}>вторизация</p>
            </div>
            <div className={s.modal}>
              <Input label="телефон" value={''} inputType={'phone'} />
              <Input label="телефон" value={''} inputType={'phone'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
