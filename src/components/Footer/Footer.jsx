import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import AMG from "../../assets/images/AMG-GT-gif.gif";


import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          


          <Col lg="6" md="4" sm="6">
            <h5 className="footer__title" style={{color:"#df2020"}}>Buy vehicle</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Find used vehicles</span>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Find a new car</span>
              </ListGroupItem>

            </ListGroup>

            <h5 className="footer__title" style={{color:"#df2020"}}>Purchase advice</h5>
            <ListGroup className="deliver__time-list">

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 0934077904</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: minhquoc0605@gmail.com</span>
              </ListGroupItem>


            </ListGroup>
          </Col>



          <Col lg="6" md="4" sm="6">
            <h5 style={{color:'#fff'}}>Blog & Image</h5>
            <div className="layout">
              <div className="layout-item">
              <img src={AMG} alt="" style={{width:"150px"}} />
              </div>
              <div className="layout-item">
              <img src={AMG} alt="" style={{width:"150px"}} />
              </div>
              <div className="layout-item">
              <img src={AMG} alt="" style={{width:"150px"}} />
              </div>
              <div className="layout-item">
              <img src={AMG} alt="" style={{width:"150px"}} />
              </div>
              <div className="layout-item">
              <img src={AMG} alt="" style={{width:"150px"}} />
              </div>
              <div className="layout-item">
              <img src={AMG} alt="" style={{width:"150px"}} />
              </div>
            </div>
          </Col>

        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6" sm="12">
            <p className="copyright__text">
              Copyright - 2022
            </p>
          </Col>
          <Col lg="6" md="6" sm="12">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0" style={{color:'#fff'}}>Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/muhib160">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/muhib160">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
