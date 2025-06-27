import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { GlobalWorkerOptions } from "pdfjs-dist/build/pdf";
import { getDocument } from "pdfjs-dist"; // ✅ now below GlobalWorkerOptions

import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot/Chatbot";
import ChatbotOpenAI from "./components/Chatbot/ChatbotOpenAI";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Fix PDF.js worker
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const loadingTask = getDocument("/Chatbot_QA_Sample.pdf");
        const pdf = await loadingTask.promise;

        let text = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map((item) => item.str).join(" ") + "\n";
        }

        window.pdfText = text;
        console.log("✅ PDF text loaded to window.pdfText");
      } catch (error) {
        console.error("❌ Failed to load PDF:", error);
      }
    };

    loadPDF();
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Chatbot />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/chat-ai" element={<ChatbotOpenAI />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
