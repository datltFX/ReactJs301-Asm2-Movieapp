import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchLogo from "./SearchLogo.svg";

const Navbar = () => {
  const navigate=useNavigate()
  const [show, setShow] = useState(false);

  //hook useEffect xu ly su kien cuon
  useEffect(() => {
    //su kien scroll
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    //cleanup
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  //ham chuyen trang chu
  const handlerHome = () => {
   navigate("/");
  };

  //ham chuyen trang tim kiem
  const handlerSearch = () => {
        navigate("/search");
  };

  //render
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h2 className="nav__logo" onClick={handlerHome}>
        Movie App
      </h2>
      <img
        className="nav__search"
        src={SearchLogo}
        alt="Search"
        onClick={handlerSearch}
      />
    </div>
  );
};

export default Navbar;
