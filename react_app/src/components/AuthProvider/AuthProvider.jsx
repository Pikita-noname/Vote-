import { useEffect } from "react";
import VoteListPage from "../../pages/VoteListPage/VoteListPage";
import { useCurrentMutation } from "../../Store/api/UserApiSlice";
import { useNavigate, useLocation } from "react-router-dom";

const AuthProvider = () => {
  const [getUser, { isError, isLoading }] = useCurrentMutation();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  if (isError || location.pathname != "/auth") navigate("auth");
  console.log(isError);
  useEffect(() => {
    getUser();
  }, []);
};

export default AuthProvider;
