import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
//import { signOut } from "firebase/auth";
//import { auth } from "./firebase-config";
import Yourpost from "./pages/Yourpost";
//import {AuthContextProvider} from './pages/AuthContext'
//import Protected from './pages/Protected'
import Account from "./pages/Account";
import Liked from "./pages/Liked";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  

  return (
    <Router>
      <nav>
      

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/"> Home </Link>
            <Link to="/createpost"> Create  </Link>
            <Link to="/yourpost"> Your Blogs </Link>
            <Link to="/liked"> Liked Blogs </Link>

            <Link to="/account"> Account </Link>


            
            
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/yourpost" element={<Yourpost isAuth={isAuth} />} />
        <Route path="/liked" element={<Liked isAuth={isAuth} />} />

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/account" element={<Account setIsAuth={setIsAuth} />} />

      </Routes>
    </Router>
  );
}

export default App;