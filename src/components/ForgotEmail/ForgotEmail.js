import React, { useState } from "react";
import auth from "../../firebase.init";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const ForgotEmail = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    const userEmail = e.target.value;
    setEmail(userEmail);
  };
  const handleForgetPassword = async (event) => {
    event.preventDefault();
    await sendPasswordResetEmail(email).then();
  };
  if (error) {
    alert(`${error.message}`);
    window.location.reload();
  } else {
    alert("Password reset email sent");
    console.log("password reset email sent");
    navigate("/login");
  }
  return (
    <div>
      <form onSubmit={handleForgetPassword} className="text-center">
        <input
          type="email"
          placeholder="enter email"
          required
          onBlur={handleEmail}
        />
        <br />
        <button>
          <input type="submit" />
        </button>
      </form>
    </div>
  );
};

export default ForgotEmail;
