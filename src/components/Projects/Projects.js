import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your custom project images
import pricePredicter from "../../Assets/Projects/Price Predicter.jpeg";
import imageClassifier from "../../Assets/Projects/Image classifier.jpg";
import coldMailGenerator from "../../Assets/Projects/Cold mail Generator.jpeg";
import newsResearchTool from "../../Assets/Projects/News Research Tool.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pricePredicter}
              isBlog={false}
              title="Price Predicter"
              description="A machine learning-based system to predict prices of products or assets using historical data and trend analysis."
              ghLink="https://github.com/AroonKumarr/PricePredicter"
              demoLink="https://pricepredicter-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageClassifier}
              isBlog={false}
              title="Image Classifier"
              description="An image classification system trained using CNNs to recognize objects or patterns in images."
              ghLink="https://github.com/AroonKumarr/ImageClassifier"
              demoLink="https://imageclassifier-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coldMailGenerator}
              isBlog={false}
              title="Cold Mail Generator"
              description="An AI tool built with LangChain and OpenAI that generates personalized cold emails based on target context."
              ghLink="https://github.com/AroonKumarr/ColdMailGenerator"
              demoLink="https://coldmail-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsResearchTool}
              isBlog={false}
              title="News Research Tool"
              description="A research assistant that summarizes and analyzes recent news using NLP techniques and AI APIs."
              ghLink="https://github.com/AroonKumarr/NewsResearchTool"
              demoLink="https://newsresearch-demo.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
