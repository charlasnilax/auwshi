import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//jathu courousel starts
const CarouselComponent = () => {
  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <Carousel id="header-carousel">
        <Carousel.Item>
          <img className="w-100" src="images/products/img2.png" alt="Image" />
          <Carousel.Caption>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                  <h1 className="display-2 mb-5 animated slideInDown">Organic Food Is Good For Health</h1>
                  {/* <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a> */}
                  {/* <a href="" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a> */}
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src="images/products/img2.png" alt="Image" />
          <Carousel.Caption>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                  <h1 className="display-2 mb-5 animated slideInDown">Natural Food Is Always Healthy</h1>
                  {/* <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                  <a href="" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a> */}
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
//jathu courousel ends

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src="img/about.jpg" alt="About" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};





// carousel
function CarouselFadeExample() {
  return (
    <div class="carousell">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="Img "
          src="images/products/img1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Img "
          src="images/products/img2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Img "
          src="images/products/img3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </div>
    
  );
}

// icon side
function ShapeExample() {
  return (
    <Container align='center'>
      <p><h1>Why Choose Our products</h1></p>
      <hr color='#0F2B05' ></hr>
      <br></br><br></br>
      <Row>
        <Col xs={6} md={4}>
        <Image src="images/products/Natural1.gif" width="150px"height="150px"  roundedCircle/>
        </Col>
        <Col xs={6} md={4}>
        <Image src="images/products/Natural2.gif" width="150px"height="150px"  roundedCircle/>
        </Col>
        <Col xs={6} md={4}>
          <Image src="images/products/Natural3.gif" width="150px"height="150px"  roundedCircle/>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col xs={6} md={4}>
        <Image src="images/products/Natural3.gif" width="150px"height="150px"  roundedCircle/>
        </Col>
        <Col xs={6} md={4}>
        <Image src="images/products/Natural2.gif" width="150px"height="150px"  roundedCircle/>
        </Col>
        <Col xs={6} md={4}>
          <Image src="images/products/Natural1.gif" width="150px"height="150px"  roundedCircle/>
        </Col>
      </Row>
    </Container>
  );
}

// function Icons() {
//   return (
//     <Container align='center'>
//       <hr color='#0F2B05'></hr>
//       <Row>
//         <Col xs={6} md={4}>
//         <Image src="images/icon1.gif" width="150px"height="150px"  roundedCircle/>
//         </Col>
//         <Col xs={6} md={4}>
//         <Image src="images/icon2.gif" width="150px"height="150px"  roundedCircle/>
//         </Col>
//         <Col xs={6} md={4}>
//           <Image src="images/icon3.gif" width="150px"height="150px"  roundedCircle/>
//         </Col>
//       </Row>
//     </Container>
//   );
// }




function App() {
  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <br></br>
      {<About></About>}
      <br></br><br></br><br></br>
      {/* <ShapeExample /> */}
      <br></br><br></br><br></br>
      {/* <Icons /> */}
      
      

    </div>
  );
}

export default App;
