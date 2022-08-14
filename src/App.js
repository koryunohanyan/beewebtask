import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/Homepage";
import RegisterPage from "./pages/ReagisterPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
   <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/registration" element={<RegisterPage/>}/>
     <Route path="/login" element={<LoginPage/>}/>

   </Routes>
  );
}

export default App;
