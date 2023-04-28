import React from "react";
import Header from "../shared/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../shared/LeftNav";
import RightNav from "../shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="mx mt-4">
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h2 className="">Main Content Cooming</h2>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
