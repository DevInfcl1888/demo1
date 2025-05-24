// // import React from "react";
// // import { Container, Row, Col } from "react-bootstrap";
// // import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// // const Footer = () => {
// //   return (
// //     <footer style={{ backgroundColor: "#f7931e", padding: "40px 0", color: "#000" }}>
// //       <Container>
// //         <Row>
// //           <Col md={3}>
// //             <h4><strong>Wah!</strong></h4>
// //             <p style={{ margin: 0 }}>Smart Deals</p>
// //             <p style={{ marginTop: "10px" }}><strong>Subscribe</strong></p>
// //             <p>Get First Deal for free</p>
// //           </Col>
// //           <Col md={3}>
// //             <h5><strong>Support</strong></h5>
// //             <p>Frisco, Texas, US, 75035</p>
// //             <p><a href="mailto:admin@wahsmartdeals.com" style={{ color: "#000" }}>admin@wahsmartdeals.com</a></p>
// //             <p>+1 972-565-4111</p>
// //           </Col>
// //           <Col md={2}>
// //             <h5><strong>Account</strong></h5>
// //             <p>My Account</p>
// //             <p>My Stuff</p>
// //             <p>Wallet</p>
// //             <p>Chat</p>
// //           </Col>
// //           <Col md={2}>
// //             <h5><strong>Quick Link</strong></h5>
// //             <p>Privacy Policy</p>
// //             <p>Terms Of Use</p>
// //             <p>FAQ</p>
// //             <p>Contact</p>
// //           </Col>
// //           <Col md={2}>
// //             <h5><strong>Download App</strong></h5>
// //             <img src="/path/to/qr.png" alt="QR Code" style={{ width: "60px", marginBottom: "10px" }} />
// //             <div>
// //               <img src="/path/to/googleplay.png" alt="Google Play" style={{ width: "100px", marginBottom: "5px" }} />
// //               <img src="/path/to/appstore.png" alt="App Store" style={{ width: "100px" }} />
// //             </div>
// //             <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
// //               <FaFacebookF />
// //               <FaTwitter />
// //               <FaInstagram />
// //             </div>
// //           </Col>
// //         </Row>
// //         <Row>
// //           <Col className="text-center" style={{ marginTop: "30px" }}>
// //             <p style={{ fontSize: "0.9em" }}>
// //               &copy; Copyright wahsmartdeals 205. All rights reserved
// //             </p>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </footer>
// //   );
// // };

// // export default Footer;
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: "#f7931e", padding: "40px 0", color: "#000" }}>
//       <Container>
//         <Row>
//           <Col md={3}>
//             <h4><strong>Wah!</strong></h4>
//             <p style={{ margin: 0 }}>Smart Deals</p>
//             <p style={{ marginTop: "10px" }}><strong>Subscribe</strong></p>
//             <p>Get First Deal for free</p>
//           </Col>
//           <Col md={3}>
//             <h5><strong>Support</strong></h5>
//             <p>Frisco, Texas, US, 75035</p>
//             <p><a href="mailto:admin@wahsmartdeals.com" style={{ color: "#000" }}>admin@wahsmartdeals.com</a></p>
//             <p>+1 972-565-4111</p>
//           </Col>
//           <Col md={2}>
//             <h5><strong>Account</strong></h5>
//             <p>My Account</p>
//             <p>My Stuff</p>
//             <p>Wallet</p>
//             <p>Chat</p>
//           </Col>
//           <Col md={2}>
//             <h5><strong>Quick Link</strong></h5>
//             <p>Privacy Policy</p>
//             <p>Terms Of Use</p>
//             <p>FAQ</p>
//             <p>Contact</p>
//           </Col>
//           <Col md={2}>
//             <h5><strong>Download App</strong></h5>
//             <img src="" alt="QR Code" style={{ width: "60px", marginBottom: "10px" }} />
//             <div>
//               <img src="/images/googleplay.png" alt="Google Play" style={{ width: "100px", marginBottom: "5px" }} />
//               <img src="/images/appstore.png" alt="App Store" style={{ width: "100px" }} />
//             </div>
//             <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
//               <FaFacebookF />
//               <FaTwitter />
//               <FaInstagram />
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-center" style={{ marginTop: "30px" }}>
//             <p style={{ fontSize: "0.9em" }}>
//               &copy; Copyright wahsmartdeals 205. All rights reserved
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// ✅ Import images from src/images folder
import qrCode from "../Images/qr code.png";
import googlePlay from "../Images/playstore.png";
import appStore from "../Images/app store.png";

const Footer = () => {
  return (
    <footer className="mt-3" style={{ backgroundColor: "#f7931e", padding: "40px 0", color: "#000" }}>
      <Container>
        <Row>
          <Col md={3}>
            <h4><strong>Wah!</strong></h4>
            <p style={{ margin: 0 }}>Smart Deals</p>
            <p style={{ marginTop: "10px" }}><strong>Subscribe</strong></p>
            <p>Get First Deal for free</p>
          </Col>
          <Col md={3}>
            <h5><strong>Support</strong></h5>
            <p>Frisco, Texas, US, 75035</p>
            <p><a href="mailto:admin@wahsmartdeals.com" style={{ color: "#000" }}>admin@wahsmartdeals.com</a></p>
            <p>+1 972-565-4111</p>
          </Col>
          <Col md={2}>
            <h5><strong>Account</strong></h5>
            <p>My Account</p>
            <p>My Stuff</p>
            <p>Wallet</p>
            <p>Chat</p>
          </Col>
          <Col md={2}>
            <h5><strong>Quick Link</strong></h5>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </Col>
          <Col md={2}>
            <h5><strong>Download App</strong></h5>
            <img src={qrCode} alt="QR Code" style={{ width: "60px", marginBottom: "10px" }} />
            <div>
              <img src={googlePlay} alt="Google Play" style={{ width: "100px", marginBottom: "5px" }} />
              <img src={appStore} alt="App Store" style={{ width: "100px" }} />
            </div>
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{ marginTop: "30px" }}>
            <p style={{ fontSize: "0.9em" }}>
              &copy; Copyright wahsmartdeals 205. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
