import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      const checkreg = /^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(
        email
      );
      console.log("from use Admin, isAdminLoading before: ", isAdminLoading);
      if (!checkreg) {
        setAdmin(true);
        setIsAdminLoading(false);
      }
      console.log("from use Admin, isAdminLoading after: ", isAdminLoading);
    }
  }, [user]);
  return [admin, isAdminLoading];
};

export default useAdmin;
