import React from "react";
import { Container, Row, Col } from "reactstrap";
import minhQuoc from "../assets/images/generous.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting,setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState('');
  const [delta,setDelta] = useState(300 - Math.random() * 100);
  const period = 500;

  useEffect(()=> {
    let ticker = setInterval(()=>{
tick();
    },delta)
    return () => {clearInterval(ticker)}
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting){
      setDelta(preDelta => preDelta / 2)
    }

    if(!isDeleting && updatedText == fullText) {
      setIsDeleting(true);
      setDelta(period)
    } else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagLine">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm `} <span>{text}</span>
            </h1>
            <p>
              My name is Quoc. I'm 26 years old. I'm from HCM city but I live in
              Tan Binh District. My hobbies are watching youtube, playing video
              game and playing video game. I love Pizza. I have one bird. I'm
              very ambitious sometimes T'm too honest. I am average height and
              weight. I read boos everyday because i want to be smart. Tks
            </p>
            <Link to="/home">
            <button onClick={()=> console.log('connect')} style={{padding:"10px"}} >Let's connect</button>
            </Link>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div style={{textAlign:"center"}}>
              <img src={minhQuoc} alt="Me" style={{width:"280px", height:"280px"}}/>
              <span className="border_animation border_animation_1"></span>
              <span className="border_animation border_animation_2"></span>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
