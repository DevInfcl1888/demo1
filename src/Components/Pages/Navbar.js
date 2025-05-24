// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wahlogo from "../Images/wahlogo.png";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import "../Styles/Navbar.css";
import React, { useState } from "react";
// ... other imports remain the same

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Wah");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Container fluid className="p-0 m-0 w-100">
      <Row
        style={{ borderBottom: "2px solid #f0f0f0" }}
        className="m-2 p-2"
        xs={12}
      >
        <Col className="p-0 m-0" md={4} xs={4}>
          <img src={wahlogo} alt="Logo" className="height_image" />
        </Col>
        <Col className="p-0 m-0" xs={6} md={8}>
          <Row className="p-0 mt-2" xs={12}>
            <Col className="p-0 m-0" xs={12} md={6}>
              <Row className="p-0 m-0" xs={12}>
                {["Wah", "My Stuff", "Wallet", "Communities"].map(
                  (tab, index) => (
                    <Col key={index} className="p-0 m-0" xs={12} md={3}>
                      <span
                        className={
                          activeTab === tab ? "orange-bold-text" : "text-11"
                        }
                        onClick={() => handleTabClick(tab)}
                        style={{ cursor: "pointer" }}
                      >
                        {tab}
                      </span>
                    </Col>
                  )
                )}
              </Row>
            </Col>

            <Col className="p-0 m-0" xs={12} md={6}>
              <Row className="p-0 m-0" xs={12}>
                <Col className="p-0 m-0" xs={12} md={3}>
                  <span
                    className={
                      activeTab === "chat"
                        ? "orange-bold-text ms-3"
                        : "text-11 ms-3"
                    }
                    onClick={() => handleTabClick("chat")}
                    style={{ cursor: "pointer" }}
                  >
                    chat
                  </span>
                </Col>

                <Col className="p-0 m-0 input-with-icon" xs={12} md={6}>
                  <input
                    className="ms-2"
                    placeholder="What Are You Looking for"
                  />
                  <FiSearch className="search-icon" />
                </Col>

                <Col className="p-0 m-0" xs={12} md={1}>
                  <span className="text-11 ms-2">
                    <FaRegHeart />
                  </span>
                </Col>
                <Col className="p-0 m-0" xs={12} md={1}>
                  <span className="text-11 icon2">
                    <FiUser />
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
