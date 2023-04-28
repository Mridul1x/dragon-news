import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="container mt-2">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary my-2">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="text-secondary fw-semibold">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={100} pauseOnHover gradient className="text-danger">
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as....
        </Marquee>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Header;
