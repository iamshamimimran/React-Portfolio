import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import nexage from "../../Assets/Projects/Nexage.png";
import text2qr from "../../Assets/Projects/text-2-qr.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import bgremove from "../../Assets/Projects/bg-remover.png";
import gemini from "../../Assets/Projects/gemini-clone.png";
import askgemini from "../../Assets/Projects/askgemini.png";
import aismartnotes from "../../Assets/Projects/aismartnotes.png";
import quizmaster from "../../Assets/Projects/quizmaster.png";
import RProject from "./RProject";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          <RProject />
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text2qr}
              isBlog={false}
              title="Text to QR code"
              description="Convert any text to QR in one second"
              ghLink="https://github.com/iamshamimimran/Text-2-QR-Generator"
              demoLink="https://text2qr-generate.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A portfolio website is a unique way to showcase your work and let others know about yourself."
              ghLink="https://github.com/iamshamimimran/portfolio2.0"
              demoLink="https://shamimimran.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgremove}
              isBlog={false}
              title="Background Remover"
              description="Remove your photo background in one click"
              ghLink="https://github.com/iamshamimimran/Background-Remover"
              demoLink="https://removeback.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isBlog={false}
              title="Gemini Clone"
              description="A GEMINI Clone Using 'Natural Launguage Processing'"
              ghLink="https://github.com/iamshamimimran/Gemini-Clone"
              demoLink="https://gemini-clone-01.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={askgemini}
              isBlog={false}
              title="Gemini Image Question Answering"
              description=" Ask anything about an uploaded image"
              ghLink="https://github.com/iamshamimimran/AskGemini"
              demoLink="https://askgemini.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aismartnotes}
              isBlog={false}
              title="AI Smart Notes"
              description="AI Smart Notes is a web application that allows users to take notes and generate summaries using AI."
              ghLink="https://github.com/iamshamimimran/AI-SMART-NOTES-FRONTEND"
              demoLink="https://ai-smart-notes-frontend.vercel.app/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizmaster}
              isBlog={false}
              title="AI Smart Quiz Master"
              description="A maltiplayer quiz game summarizing the questions and answers using AI."
              ghLink="https://github.com/iamshamimimran/GAME-FRONTEND"
              demoLink="https://game-frontend-pearl.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
