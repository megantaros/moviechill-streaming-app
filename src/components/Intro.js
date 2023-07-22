import "../style/landingPages.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
    });
  }, []);

  return (
    <div>
      <div className="intro" data-aos="fade-up">
        <Container className="text-white d-flex justify-content-center align-items-center">
          <Row>
            <Col className="text-center">
              <div className="title">NONTON GRATIS</div>
              <div className="title">TANPA TIKET</div>
              <Button variant="dark" className="mt-5" href="#popular">
                Lihat Semua List
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
