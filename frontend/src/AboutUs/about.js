import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FluidExample() {
  
  return <div class="aboutusimg1">
    <h1 align="center">Profile</h1>
    <Image src="/images/Auwshi.gif" fluid/>
    </div>;
}
// export default FluidExample;



function AutoLayoutExample() {
  return (
    <div class="container">
      <h1 align="center">Contact Us</h1>

  <div class="row">
    <div class="col border border-dark">
      1 of 2
    </div>
    <div class="col border border-dark">
      2 of 3
    </div>
  </div>
  </div>
  );
}

// export default AutoLayoutExample;
function About() {
  return (
    <div>
      <FluidExample />
      <br></br>
      <AutoLayoutExample/>
    

    </div>
  )
  
};
export default About;