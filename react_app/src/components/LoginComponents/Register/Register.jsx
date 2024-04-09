import { useForm, Controller } from "react-hook-form";
import {
  useAuthMutation,
  useRegisterMutation,
} from "../../../Store/api/UserApiSlice";
import Cross from "../../../UI/Cross/Cross";

import { ImaskInput } from "../../../UI/ImaskInput/ImaskInput";
import Input from "../Input/Input";
import s from "./Register.module.css";

const Register = ({ changeForm }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const [register, { isError, error }] = useRegisterMutation();
  if (isError) alert(error.data.message);

  const onSubmit = (data) => {
    register({
      phone: `7${data.phone}`,
      password: data.password,
      name: data.firstName,
    });
  };

  return (
    <>
      <div className={s.pageWrapper}>
        <div className={s.background}>
          <div>
            <span className={s.label}>Vote!</span>
          </div>
          <div className={s.modalWrapper}>
            <div className={s.titleWrapper}>
              <p className={`${s.title} ${s.firstLetter}`}>Р</p>
              <p className={s.title}>егистрация</p>
            </div>
            <div className={s.modal}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{
                    required: "Пожалуйста, напишите своё имя",
                    minLength: {
                      value: 1,
                      message: "Имени с 1 буквой не существует",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      errors={errors.firstName}
                      onChange={(value) => field.onChange(value)}
                      label="имя"
                      value={field.value || ""}
                      placeholder="какой-то текст..."
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Телефон обязателен для заполнения",
                    minLength: {
                      value: 10,
                      message: "Такого номера не существует",
                    },
                  }}
                  render={({ field }) => (
                    <ImaskInput
                      placeholder={"+7 (999)-999-99-99"}
                      errors={errors.phone}
                      onChange={(value) => field.onChange(value)}
                      val={field.value || ""}
                      label={"номер"}
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
                      value={field.value || ""}
                      inputType="password"
                      placeholder="•••••••••"
                      onChange={(e) => field.onChange(e)}
                    />
                  )}
                />

                <input className={s.submit} type="submit" value="Go" />
              </form>
              <div className={s.PositionWrapper}>
                <span className={s.text}>уже есть аккаунт?</span>
                <span className={s.changeFormLink} onClick={() => {changeForm()}}>
                  Войти
                </span>
              </div>
              <Cross isValid={isValid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
