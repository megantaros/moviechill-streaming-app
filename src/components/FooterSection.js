import React from "react-bootstrap";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-muted footer"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Koneksikan dengan media sosial kami:</span>
        </div>

        <div>
          {/* <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a> */}
          <a
            href="https://www.instagram.com/megantaros/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/gita-megantara-928303228/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="https://github.com/megantaros" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="6" lg="6" xl="6" className="mx-auto mb-4">
              <h6 className="fw-bold mb-4 footer-title">
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                Movie<span className="footer-span">Chill</span>
              </h6>
              <p>
                MovieChill adalah platform hiburan streaming film yang
                menghadirkan berbagai koleksi film terbaik dari berbagai genre
                dan tahun.
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Populer</h6>
              <p>
                <a href="#!" className="text-reset">
                  Trending
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Superhero
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Horror
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Kategori</h6>
              <p>
                <Link to={`/popular`} className="text-reset">
                  Populer
                </Link>
              </p>
              <p>
                <Link to={`/toprated`} className="text-reset">
                  Top Rated
                </Link>
              </p>
              <p>
                <Link to={`/upcoming`} className="text-reset">
                  Upcoming
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Kontak</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Yogyakarta, YK 55291, INA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />{" "}
                megantaragita@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 62 877 7866 7288
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold">MovieChill</a>
      </div>
    </MDBFooter>
  );
};

export default FooterSection;
