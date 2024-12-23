import React from "react";
import Home from "./home/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./course/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Buys from "./components/Buy";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="https://book-store-app-omega-dusky.vercel.app/" element={<Home />} />
          <Route
            path="https://book-store-app-omega-dusky.vercel.app/course"
            element={authUser ? <Courses /> : <Navigate to="https://book-store-app-omega-dusky.vercel.app/signup" />}
          />
          <Route path="https://book-store-app-omega-dusky.vercel.app/signup" element={<Signup />} />
          <Route path="https://book-store-app-omega-dusky.vercel.app/contact" element={<Contact />} />
          <Route path="https://book-store-app-omega-dusky.vercel.app/buy" element={<Buys />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
