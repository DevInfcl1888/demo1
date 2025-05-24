import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa6";
import "../Styles/ShowProduct.css";
import img1 from "../Images/Remote1.jpg";
import img2 from "../Images/Remote2.jpg";
import img3 from "../Images/Remote3.jpg";
import img4 from "../Images/Remote4.jpg";
import { CiStar, CiClock2 } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";

export default function ImageSelector() {
  const images = [img1, img2, img3, img4];
  const [selectedImage, setSelectedImage] = useState(images[0]); // Default image set

  return (
    <Container fluid className="p-0 m-0 w-100">
      <Row xs={12} md={12} lg={12} className="m-2 p-2 mt-5">
        <Col xs={2} md={2} lg={2} className="m-0 p-0">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(imgSrc)}
              className="thumbnail-container"
            >
              <img
                src={imgSrc}
                alt={`img-${index}`}
                className="thumbnail-image"
              />
            </div>
          ))}
        </Col>

        <Col xs={5} md={5} lg={5} className="m-0 p-0">
          <img src={selectedImage} alt="selected" className="selected-image" />
        </Col>

        <Col xs={3} md={3} lg={3} className="m-0 p-0">
          <Row xs={12} md={12}>
            <Col xs={8} md={8}>
              <span className="texthavic">
                40% OFF on Havic HV
                <br />
                G-92 Gamepad
              </span>
            </Col>
            <Col xs={4} md={4}>
              <FaRegHeart />
            </Col>
          </Row>
          <Row className="mt-3" xs={12} md={12}>
            <Col xs={8} md={8}>
              <span>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <span className="textstart">
                  (150 Reviews) | 25 Coupons Left
                </span>
              </span>
              <br /> <br />
              <span className="social-icons">
                <FaInstagram size={30} /> <FaFacebook size={30} />{" "}
                <FaRegHeart size={30} />
              </span>
            </Col>
          </Row>
          <Row className="mt-1" xs={12} md={12}>
            <Col xs={8} md={8}>
              <span>Anu Attires</span>
              <br />
              <span className="price-highlight">$120</span>
              <span>
                <del>$160</del>
              </span>
            </Col>
          </Row>
          <Row className="mt-1" xs={12} md={12}>
            <Col xs={12} md={12} className="flex-center gap-40">
              <div className="flex-column-center">
                <CiClock2 size={24} />
                <span>07-feb-2025</span>
              </div>

              <div className="flex-column-center">
                <IoChatbubbleEllipsesOutline size={24} />
                <span>chat</span>
              </div>

              <div className="flex-column-center">
                <FaPhoneAlt size={24} />
                <span>phone</span>
              </div>
            </Col>
          </Row>
          <Row className="mt-5" xs={12} md={12}>
            <Col
              className="m-0 p-0 option"
              xs={12}
              md={12}
              style={{ border: "1px solid #e5e7eb", height: "20rem" }}
            >
              <Row ms={12} xs={12}>
                <Col md={12} xs={12}>
                  <p
                    style={{ borderBottom: "1px solid black" }}
                    className="m-1 p-2"
                  >
                    Please Select Atleast one item
                  </p>
                </Col>
              </Row>
              <Row ms={12} xs={12}>
                <Col className="m-2 p-2" md={12} xs={12}>
                  <input className="ms-4" type="checkbox" />
                  <span className="ms-4" style={{ fontSize: "10px" }}>
                    Get flat 50% off on new and latest collection
                  </span>
                  <span
                    style={{ color: "#FF9900", fontWeight: "bold" }}
                    className="ms-3"
                  >
                    $100
                  </span>
                </Col>
                <Col className="m-2 p-2" md={12} xs={12}>
                  <input className="ms-4" type="checkbox" />
                  <span className="ms-4" style={{ fontSize: "10px" }}>
                    Get flat 50% off on new and latest collection
                  </span>
                  <span
                    style={{ color: "#FF9900", fontWeight: "bold" }}
                    className="ms-3"
                  >
                    $70
                  </span>
                  <p className="mt-3" style={{ fontSize: "10px" }}>
                    Our Add on Services
                  </p>
                </Col>
              </Row>
              <Row ms={12} xs={12}>
                <Col className="m-2 p-2" md={12} xs={12}>
                  <input className="ms-4" type="checkbox" />
                  <span className="ms-4" style={{ fontSize: "10px" }}>
                    Get flat 50% off on new and latest collection
                  </span>
                  <span
                    style={{ color: "#FF9900", fontWeight: "bold" }}
                    className="ms-3"
                  >
                    $300
                  </span>
                </Col>
                <Col className="m-2 p-2" md={12} xs={12}>
                  <input className="ms-4" type="checkbox" />
                  <span className="ms-4" style={{ fontSize: "10px" }}>
                    Get flat 50% off on new and latest collection
                  </span>
                  <span
                    style={{ color: "#FF9900", fontWeight: "bold" }}
                    className="ms-3"
                  >
                    $150
                  </span>
                </Col>

                <button
                  style={{
                    border: "none",
                    backgroundColor: "#FF9900",
                    height: "40px",
                    borderRadius: "2px",
                  }}
                  className="mt-3"
                >
                  Generate Coupon
                </button>
              </Row>
              <Row xs={12} ms={12}>
                <Col
                  xs={12}
                  ms={12}
                  style={{ borderBottom: "1px solid black" }}
                >
                  <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                    Deals Description{" "}
                  </p>
                  <p>
                    play station skin high quality viny with air channel
                    otherwise for easy bubble free install and mess free removal
                    resure sestive
                  </p>
                </Col>
              </Row>
              <Row xs={12} ms={12}>
                <Col
                  xs={12}
                  ms={12}
                  style={{ borderBottom: "1px solid black" }}
                >
                  <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                    Deals Terms & Condition{" "}
                  </p>
                  <p>
                    play station skin high quality viny with air channel
                    otherwise for easy bubble free install and mess free removal
                    resure sestive
                  </p>
                </Col>
              </Row>
              <Row xs={12} ms={12}>
                <Col
                  xs={12}
                  ms={12}
                  style={{ borderBottom: "1px solid black" }}
                >
                  
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
