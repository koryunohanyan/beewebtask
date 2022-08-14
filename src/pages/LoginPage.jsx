import { Link } from "react-router-dom";
import Login from "../components/Login";

function LoginPage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>LoginPage</h1>
      <Login />
      <p>
        or <Link to="/registration">registration</Link>
      </p>
    </div>
  );
}

export default LoginPage;
