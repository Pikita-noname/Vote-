import { useState } from "react";
import Auth from "../../components/LoginComponents/Auth/Auth";
import Register from "../../components/LoginComponents/Register/Register";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(true);

  const changeForm = () => setIsRegister(!isRegister);
  

  return (
    <>
      {isRegister ? (
        <Register changeForm={changeForm} />
      ) : (
        <Auth changeForm={changeForm} />
      )}
    </>
  );
};
export default LoginPage;
