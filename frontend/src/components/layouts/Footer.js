
export  default function Footer (){
    return (
        <>
  {/* Footer Start */}
  <div
    className=" footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h1 className="fw-bold text-primary mb-4">
            A<span className="text-secondary">uw</span>shi
          </h1>
          <p className="auwshi">
          Auwshi, a leading herbal business, blends nature's wisdom with modern innovation. We craft premium herbal products that inspire well-being and vitality. Experience the transformative power of Auwshi and embrace a natural approach to health.
          </p>
          <div className="d-flex pt-2">
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-1"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-outline-light rounded-circle me-0"
              href=""
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 address">
          <h4 className="text-dark mb-4 ">Address</h4>
          <p>
            <i className=" fa fa-map-marker-alt me-3" />
          Chankanai, Vikneshwara road,No:09
          </p>
          <p>
            <i className="fa fa-phone-alt me-3" />
            +94 706443471
          </p>
          <p>
            <i className="fa fa-envelope me-3" />
            auwshiherbs@gmai
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-dark mb-4">Quick Links</h4>
          <a className="btn btn-link" href="/aboutus">
            About Us
          </a>
          {/* <a className="btn btn-link" href="">
            Contact Us
          </a> */}
          <a className="btn btn-link" href="">
            Our Services
          </a>
          {/* <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a> */}
        </div>
        {/* <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
           
          </div>
        </div> */}
      </div>
    </div>
    <div className="container-fluid copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a href="#">Auwshi Herbs</a>, All Right Reserved.
          </div>
         
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
</>

    )
}