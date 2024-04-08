import { useForm, Controller } from "react-hook-form";
import { useAuthMutation } from "../../../Store/api/UserApiSlice";
import Cross from "../../../UI/Cross/Cross";

import { ImaskInput } from "../../../UI/ImaskInput/ImaskInput";
import Input from "../Input/Input";
import s from "./Auth.module.css";

const Auth = () => {
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

  const [auth, { isError, error }] = useAuthMutation();
  if (isError) alert(error.data.message);

  const onSubmit = (data) => {
    auth({ phone: `7${data.phone}`, password: data.password });
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
                      value={field.value}
                      inputType="password"
                      placeholder="•••••••••"
                      onChange={(e) => field.onChange(e)}
                    />
                  )}
                />
                <input className={s.submit} type="submit" value="Go" />
              </form>
              <Cross isValid={isValid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
