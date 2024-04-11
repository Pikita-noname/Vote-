import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Redirector = ({ isRedirect, to }) => {
  const location = useLocation();
  const navigate = useNavigate();

   useEffect(() => {
     if (isRedirect && location.pathname !== to) {
       navigate(to);
     }
   }, [isRedirect, to, location, navigate]);
};

export default Redirector;
