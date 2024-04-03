import { useForm, Controller } from "react-hook-form";
import { useIMask } from "react-imask";

import Input from "../../components/LoginComponents/Input/Input";
import { Cross } from "../../UI/Cross/Cross";
import s from "./LoginPage.module.css";
import { useAuthMutation } from '../../Store/api/UserApiSlice.js'

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const {
    ref,
      unmaskedValue
  } = useIMask({
    mask: "[+7] (000)-000-00-00",
  });
  const [auth] = useAuthMutation();

  const onSubmit = (data) => auth( { phone: `7${unmaskedValue}`, password: data.password} );
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Телефон обязателен для заполнения",
                    minLength: {
                      value: 18,
                      message: "Такого номера не существует",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      errors={errors.phone}
                      ref={ref}
                      val={field.value}
                      onChange={(value) => field.onChange(value)}
                      placeholder="+7 (999)-999-99-99"
                      label="номер"
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Пароль обязателен для заполнения",
                    minLength: {
                      value: 6,
                      message: "Слишком короткий пароль",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      errors={errors.password}
                      label="пароль"
                      value={field.value}
                      inputType="password"
                      placeholder="•••••••••"
                      onChange={(e) => field.onChange(e)}
                    />
                  )}
                />
                <input className={s.submit} type="submit" value="Go" />
              </form>
              <button onClick={() => console.log(selectUser)}></button>
              <Cross isValid={isValid}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
