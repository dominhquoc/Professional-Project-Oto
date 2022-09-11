import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import videoHero from "../assets/videos/Movies & TV 9_8_2022 5_02_15 PM.mp4";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";


import "../styles/home.css";


import products from "../assets/fake-data/products.js";



import ProductCard from "../components/UI/product-card/ProductCard.jsx";




const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotCar, sethotCar] = useState([]);

  useEffect(() => {
    const filteredCar = products.filter((item) => item.category === "Sedans");
    const sliceCar = filteredCar.slice(0, 4);
    sethotCar(sliceCar);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Sedans") {
      const filteredProducts = products.filter(
        (item) => item.category === "Sedans"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Suv") {
      const filteredProducts = products.filter(
        (item) => item.category === "Suv"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Coupes") {
      const filteredProducts = products.filter(
        (item) => item.category === "Coupes"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Vans") {
      const filteredProducts = products.filter(
        (item) => item.category === "Vans"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section className="hero-banner">        
        <Container>
          <Row>
            <Col lg="6" md="6" >
              <div className="hero__content">
                <h5 className="mb-3">The new Mercedes-Maybach S-Class.</h5>
                <h1 className="mb-4 hero__title">
                  <span>The Future</span>  of  <br /> Sophisticated
                  <span>  Luxury</span>
                </h1>

                <p>
                The wealth of independence.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Buy now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">Discover more</Link>
                  </button>
                </div>
                 
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
               <video src={videoHero} autoPlay loop muted style={{width:'100%', height:'100%',objectFit:'cover',borderRadius:'20px'}} />
               <h5 style={{color:'#fff'}}>Story</h5>
               <hr style={{color:'#fff'}}/>
               <p style={{color:'#fff'}}>Climb aboard and enjoy the almost limitless spaciousness and comfort, coupled here with the very latest in technology and unmistakable styling. The new Mercedes-Maybach GLS: there's no freer or more independent feeling to be found in any other luxury-class..</p>
              </div>

            </Col>
          </Row>
        </Container>       
      </section>

      <section className="pt-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,85.3C480,107,600,181,720,192C840,203,960,149,1080,112C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>New models <i class="ri-star-s-fill" style={{color:'#df2020'}}></i></h2>
            </Col>
          
            {hotCar.map((item) => (
              <Col lg="3" md="4" sm="12" xs="12" key={item.id} className="new-models-568">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Our vehicles</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center flex-wrap justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "CarBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                 All 
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Sedans" ? "CarBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Sedans")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.48-5.788A2 2 0 0 1 6.32 4H17.68a2 2 0 0 1 1.838 1.212L22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-7H4v5h16v-5zM4.176 11h15.648l-2.143-5H6.32l-2.143 5zM6.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="rgba(223,32,32,1)"/></svg>
                  Sedans
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Suv" ? "CarBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Suv")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5H2l2.48-5.788A2 2 0 0 1 6.32 4H17.68a2 2 0 0 1 1.838 1.212L22 11h1.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.757.97L22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-2v-5H4v5h16zM5.477 11h13.046a1 1 0 0 0 .928-1.371L18 6H6L4.549 9.629A1 1 0 0 0 5.477 11zM5 14c2.317 0 3.879.755 4.686 2.264a.5.5 0 0 1-.441.736H6a1 1 0 0 1-1-1v-2zm14 0v2a1 1 0 0 1-1 1h-3.245a.5.5 0 0 1-.44-.736C15.12 14.754 16.682 14 19 14z" fill="rgba(223,32,32,1)"/></svg>
                  Suv
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Coupes" ? "CarBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Coupes")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5h1.875l2.138-5.702A2 2 0 0 1 6.386 4h11.228a2 2 0 0 1 1.873 1.298L21.625 11H23.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.757.97L22 13.5zM4 15v2a1 1 0 0 0 1 1h3.245a.5.5 0 0 0 .44-.736C7.88 15.754 6.318 15 4 15zm16 0c-2.317 0-3.879.755-4.686 2.264a.5.5 0 0 0 .441.736H19a1 1 0 0 0 1-1v-2zM6 6l-1.561 4.684A1 1 0 0 0 5.387 12h13.226a1 1 0 0 0 .948-1.316L18 6H6z" fill="rgba(223,32,32,1)"/></svg>
                 Coupes
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Vans" ? "CarBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Vans")}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M14.172 3c.53 0 1.039.21 1.414.586l4.828 4.828c.375.375.586.884.586 1.414V17h2v2h-8.126c-.445 1.726-2.01 3-3.874 3-1.864 0-3.43-1.274-3.874-3H3c-.552 0-1-.448-1-1V5c0-1.105.895-2 2-2h10.172zM11 16c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm3-9H6v6h8V7zm-2 2v2H8V9h4z" fill="rgba(223,32,32,1)"/></svg>
                 Vans / MPVs
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="12" xs="12" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,250.7C672,267,768,277,864,256C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </Helmet>
  );
};

export default Home;
