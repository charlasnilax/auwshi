import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

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
      <CarouselFadeExample />
      <br></br><br></br><br></br>
      <ShapeExample />
      <br></br><br></br><br></br>
      {/* <Icons /> */}

    </div>
  );
}

export default App;
