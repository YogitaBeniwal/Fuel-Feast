import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const openNewPage = () => {
    window.open("/chatbot.html", "_blank");
  };

  return (
    <>
      <nav>
        <div className="logo">FUEL FEAST</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks
              .filter((element) => element.title !== "Team") // Exclude the Team link
              .map((element) => (
                <Link
                  to={element.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={element.id}
                >
                  {element.title}
                </Link>
              ))}
          </div>
          <button className="menuBtn" onClick={openNewPage}>
            Talk to Fuel Feast Fitness Coach
          </button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;