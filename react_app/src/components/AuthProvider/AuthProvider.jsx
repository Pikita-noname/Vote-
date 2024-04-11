import { useEffect } from "react";
import { useCurrentMutation } from "../../Store/api/UserApiSlice";
import Redirector from "../Util/Redirector";

const AuthProvider = () => {
  const [getUser, { isError, isLoading }] = useCurrentMutation();
  useEffect(() => {
    const token = localStorage.getItem("token") ?? '';
    getUser(token);
  }, []);
return (
  <>
    <Redirector isRedirect={isError} to="/auth" />
  </>
);

};



export default AuthProvider;
