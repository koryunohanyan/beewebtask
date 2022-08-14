import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";
function RegisterPage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Registration</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">sign-in </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
