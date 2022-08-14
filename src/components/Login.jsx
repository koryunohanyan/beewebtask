import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      }
        
      )
      .then(()=>navigate("/"))
      .catch(() => alert("Invalid user"));
  };
  console.log(useAuth(), "<><><<");
  return <Form title="sign in" handleClick={handleLogin} />;
}
