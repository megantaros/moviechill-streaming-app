import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardMovies from "./CardMovies";
import AOS from "aos";

const Section = (props) => {
  const { title, data, id } = props;
  const [category, setCategory] = useState({
    name: "",
    path: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
    });

    function categoryName(id) {
      switch (id) {
        case "popular":
          setCategory({ name: "Popular", path: "/popular" });
          break;
        case "toprated":
          setCategory({ name: "Top Rated", path: "/top_rated" });
          break;
        case "upcoming":
          setCategory({ name: "Upcoming", path: "/upcoming" });
          break;
        default:
          return "undefined";
      }
    }

    categoryName(id);
  }, [id]);

  return (
    <section id={id ? id : ""}>
      <Container>
        <h4 className="title-section">{title ? title : "undefined"}</h4>
      </Container>
      <Container className="text-center">
        <Row
          className="my-4 row row-cols-lg-4 row-cols-md-4 row-cols-2"
          data-aos="fade-up"
        >
          {data?.length === 0 && (
            <Col className="d-flex justify-content-center align-items-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          )}
          {data?.map((result) => (
            <CardMovies key={result.id} {...result} lable={category.name} />
          ))}
        </Row>
        <Link to={category.path} className="btnList mt-5 rounded-2">
          Lihat {category.name}
        </Link>
      </Container>
    </section>
  );
};

export default Section;
