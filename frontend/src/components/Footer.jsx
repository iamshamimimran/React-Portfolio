import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3 className="cr">Designed and Developed by Shamim Imran</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3 className="cr">Copyright © {year} lunatic.exe</h3>
        </Col>

        <Col md="4" className="footer-body" style={{ textAlign: "right" }}>
          <ul
            className="footer-icons"
            style={{ display: "inline-flex", gap: "10px" }}
          >
            <li className="social-icons">
              <a
                href="https://github.com/iamshamimimran"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/iamshamimimran"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/iamshamimimran/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/x_lunatic.exe"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            {/* Visitor counter with down arrow */}
            <div
              style={{
                color: "white",
                fontSize: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div className="counterapi" />
            </div>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
