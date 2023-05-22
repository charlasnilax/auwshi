import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './Carousel.css';
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

const Feature = () => {
  return (
    <div className="container-fluid bg-light bg-icon my-5 py-6">
      <div className="container">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <h1 className="display-5 mb-3">Our Features</h1>
          <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
              <img className="img-fluid mb-4" src="" alt="Feature 1" />
              <h4 className="mb-3">Natural Process</h4>
              <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
              <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
              <img className="img-fluid mb-4" src="" alt="Feature 2" />
              <h4 className="mb-3">Organic Products</h4>
              <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
              <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
              <img className="img-fluid mb-4" src="" alt="Feature 3" />
              <h4 className="mb-3">Biologically Safe</h4>
              <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
              <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function ProductSection() {
return (
  
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-0 gx-5 align-items-end">
        <div className="col-lg-6">
          <div
            className="section-header text-start mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h1 className="display-5 mb-3">Our Products</h1>
            <p>
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 text-start text-lg-end wow slideInRight"
          data-wow-delay="0.1s"
        >
          <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
            <li className="nav-item me-2">
              <a
                className="btn btn-outline-primary border-2 active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                Vegetable
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className="btn btn-outline-primary border-2"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                Fruits{" "}
              </a>
            </li>
            <li className="nav-item me-0">
              <a
                className="btn btn-outline-primary border-2"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                Fresh
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row g-4">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-1.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-6.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-7.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-8.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-12 text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                Browse More Products
              </a>
            </div>
          </div>
        </div>
        <div id="tab-2" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-1.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-2.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-3.jpg"
                    alt=""
                  />
                  <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    New
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5 mb-2" href="">
                    Fresh Tomato
                  </a>
                  <span className="text-primary me-1">$19.00</span>
                  <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                </div>
                <div className="d-flex border-top">
                  <small className="w-50 text-center border-end py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-eye text-primary me-2" />
                      View detail
                    </a>
                  </small>
                  <small className="w-50 text-center py-2">
                    <a className="text-body" href="">
                      <i className="fa fa-shopping-bag text-primary me-2" />
                      Add to cart
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                Browse More Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)

}







function App() {
  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <br></br>
      {<About></About>}
      <br></br><br></br><br></br>
      {<Feature></Feature>}
      <br></br><br></br><br></br>
      {<ProductSection></ProductSection>}
      
      

    </div>
  );
}

export default App;
