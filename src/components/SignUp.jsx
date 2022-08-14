import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

export default function SignUp() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleRegister = async (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    
    .then(({user}) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      )
    }
       
      )
      .then(navigate("/", { replace: true }))
      .catch(console.error)
  };

  return <Form title="register" handleClick={handleRegister} />;
}
