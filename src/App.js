import React, { useEffect } from "react";
import "./App.css";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Button,
  Card,
  Form
} from "react-bootstrap";
import Typewriter from "typewriter-effect/dist/core";

function App() {
  useEffect(() => {
    const animatedText = document.getElementById("animated-text");
    const typewriter = new Typewriter(animatedText, {
      loop: true
    });

    typewriter
      .typeString("Tamil Coding Academy")
      .pauseFor(2500)
      .deleteAll()
      .typeString("Web Developer")
      .pauseFor(2500)
      .deleteAll()
      .typeString("FrontEnd Developer")
      .pauseFor(2500)
      .start();
  }, []);

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Full Stack Developer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <section className="container py-5" id="about">
          <Row>
            <Col xs={12} md={8}>
              <h5>I'am</h5>
              <h1 id="animated-text"></h1>
              <div>
                <p>
                  I'm a full-stack developer specialized in frontend and backend
                  development for scalable web apps. I have made a variety of
                  MERN Stack Applications. Want to know how I may help your
                  project? Check out my projects from my GitHub{" "}
                  <img src="/github.png" alt="GitHub" width={20} />{" "}
                  <a
                    href="https://github.com/abilitycoding"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-black fw-bold">Profile</span>
                  </a>
                  .
                </p>
                <Button variant="dark" size="sm">
                  My Resume
                </Button>
              </div>
            </Col>
            <Col xs={12} md={4} className="p-0 d-flex justify-content-center">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocJ0nQdzLxkxIm06rrqzR0wVSmhv45F8_TdzJSLcuOyG5LHQ8lc=s288-c-no"
                alt="Profile"
                className="shadow-lg rounded-circle border border-5 border-warning"
                width={200}
              />
            </Col>
          </Row>
        </section>
        <section className="skills container py-5" id="skills">
          <Row>
            <h1 className="text-center pb-4">Skills</h1>
            <h5 className="text-center">
              Below is a quick overview of my main technical skill sets and
              tools I use.
            </h5>
            <span className="pb-3">
              <p className="text-center fw-bold">EDUCATION</p>
              <p className="text-center fw-bold">
                B.E Computer Science and Engineering
              </p>
              <p className=" text-center">
                (Valliammai Engineering College, Chennai.)
              </p>
            </span>
          </Row>
          <Row>
            <Col className="d-flex flex-wrap gap-3 justify-content-center">
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="frontend.jpg"
                  height={150}
                />
                <Card.Body>
                  <Card.Title>Frontend</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="/backend.webp"
                  height={150}
                />
                <Card.Body>
                  <Card.Title>Backend</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="/fullstack.jpg"
                  height={150}
                />
                <Card.Body>
                  <Card.Title>Full-stack</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default App;