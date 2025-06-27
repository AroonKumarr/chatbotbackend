import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aroon Kumar</span> from{" "}
            <span className="purple">SZABIST Islamabad, Pakistan</span>.
            <br />
            I am currently a 3rd-year Computer Science student with a CGPA of 3.27.
            <br />
            I'm passionate about AI, Machine Learning, and NLP. I'm actively learning tools like Python, Pandas, Matplotlib, LangChain, and Streamlit.
            <br />
            <br />
            Here are some of the AI and ML projects I've built:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Home Price Prediction App – using Flask and scikit-learn
            </li>
            <li className="about-activity">
              <ImPointRight /> Celebrity Face Recognition – with OpenCV and Machine learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Finance News QA Tool – built with LangChain + OpenAI + FAISS
            </li>
            <li className="about-activity">
              <ImPointRight /> Cold Mail Generator – automated email generation using LangChain + ChromaDB
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning never stops — especially in AI!"{" "}
          </p>
          <footer className="blockquote-footer">Aroon Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
