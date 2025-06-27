import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE BIT ABOUT <span className="purple">WHAT I DO</span>
            </h1>
            <p className="home-about-body">
              I’m <b className="purple">Aroon Kumar</b>, a 3rd-year Computer Science student at SZABIST Islamabad with a CGPA of 3.27.
              <br />
              <br />
              I'm passionate about <b className="purple">Artificial Intelligence</b>, <b className="purple">Machine Learning</b>, and <b className="purple">Generative AI</b>.
              I actively build end-to-end AI apps using <b className="purple">Python</b>, <b className="purple">LangChain</b>, <b className="purple">OpenAI</b>, and <b className="purple">Streamlit</b>.
              <br />
              <br />
              My projects range from a <i><b className="purple">Home Price Predictor</b></i> to a 
              <i><b className="purple">Finance QA App using LangChain</b></i> and a 
              <i><b className="purple">Cold Mail Generator for B2B Outreach</b></i>.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AroonKumarr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aroon-kumar-38507528a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aroon_lohana_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
