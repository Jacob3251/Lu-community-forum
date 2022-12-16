import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAdmin = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  // const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      const checkreg = /^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(
        email
      );
      console.log("from use Admin, admin before: ", admin);
      if (!checkreg) {
        setAdmin(true);
      }
      console.log("from use Admin, admin after: ", admin);
    }
  }, [user]);
  return [admin];
};

export default useAdmin;
