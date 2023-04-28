import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import './RightNav.css'
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";
import bg from "../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mb-3 fw-bold">Login With</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        {" "}
        <FaGoogle></FaGoogle> Login with Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        {" "}
        <FaGithub></FaGithub> Login with Github
      </Button>
      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup className="mt-3 bg">
          <ListGroup.Item className="p-3 bg">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="p-3 bg">
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="p-3 bg">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-4 bg-secondary py-3 px-1">
        <h4>Q-Zone</h4>
        <div className="text-center">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
      <div className="mt-2 mb-2 position-relative">
        <img className="w-100 " src={bg} alt="" />
        <div className="text-center position-absolute top-50 start-50 text-white  translate-middle">
          <h3 className="fs-1">Create an Amazing Newspaper</h3>
          <p className="my-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
