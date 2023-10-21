import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import LOGO from "../../assests/main-logo.png";
import { useSwipeable } from "react-swipeable";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [home, setHome] = useState(false);
  const [menuOPened, setMenuOpened] = useState(false);

  const isMob = window.innerWidth <= 768 ? true : false;

  const ulRef = useRef(null);

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const showNavbar = () => {
    setMenuOpened(!menuOPened);
    // if (e.target.classList.contains("hamburg-menu")) {
    //   setMenuOpened(false);
    // }
    // if (e.target.classList.contains("mob-menu")) {
    //   setMenuOpened(false);
    // }
    // if (e.target.classList.contains("hamberg-menuu")) {
    //   setMenuOpened(false);
    // } else {
    //   setMenuOpened(true);
    // }
  };

  const closeNav = useSwipeable({
    onSwiped: (eventData) => {
      if(eventData.dir === "Left"){
        setMenuOpened(false)
    }
    }
  });
  // const outsideClick = (e) => {
  //   if (e.target.classList.contains("n-right")) {
  //     setMenuOpened(true);
  //   } else {
  //     setMenuOpened(false);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("click", outsideClick, true);
  // }, []);

  const bgColor = () => {
    if (window.scrollY > 800) {
      setHome(true);
    } else {
      setHome(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", bgColor);
    return () => {
      window.removeEventListener("scroll", bgColor);
    };
  }, []);

  return (
    <div
      className={show ? "wh-wrapper active-nav " : "wh-wrapper nav-wrapper"}
      style={{
        backgroundColor: "#3853a4",
        position: "fixed",
        zIndex: 99999,
        transition: " 0.3s linear",
      }}
    >
      <div className={"nav-section wrapper"}>
        <Link to="home" spy={true} smooth={true} className="n-left">
          <img className="nav-logo" src={LOGO} alt="logo" />
        </Link>
        <div className="mob-menu" onClick={showNavbar}>
          <div
            className={
              menuOPened ? "hamburg-menu clicked" : "hamburg-menu unclicked"
            }
          >
            <div className="hamberg-menuu"></div>
            <div className="hamberg-menuu"></div>
            <div className="hamberg-menuu"></div>
          </div>
        </div>
        <div
          className={menuOPened ? "n-right menu-open" : "n-right"}
          ref={ulRef}
        >
          <ul
           {...closeNav}
           className="menu-links">
            <li onClick={() => setMenuOpened(false)} className="menu-logo">
              <img src={LOGO} alt="" />
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                style={{ background: isMob ? "" : home ? "transparent" : "" }}
                className="menu-link"
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="about"
                spy={true}
                smooth={true}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="work-process"
                spy={true}
                smooth={true}
              >
                Work process
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="work"
                spy={true}
                smooth={true}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="services"
                spy={true}
                smooth={true}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="contact"
                spy={true}
                smooth={true}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
