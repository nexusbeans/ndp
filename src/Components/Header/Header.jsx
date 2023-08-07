import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.scss";
import logoheader from "../../assets/images/logo.png";
import DonateImg from "../../assets/images/Donatebtn.png";

import ButtonLogo from "../../assets/images/button.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  const [menuReleased, setMenuReleased] = useState(false);

  const toggleMenu = () => {
    setMenuReleased((prevMenuReleased) => !prevMenuReleased);
  };

  return (
    <header
      className={isSticky ? "sticky header_Elements  " : "header_Elements "}
    >
      <div className="greyback grad">
        <Container>
          <Row>
            <Col>
              <div
                className={` NavItem_elements right_toggle_menu ${
                  menuReleased ? "right_toggle_menu_release" : ""
                }`}
              >
                <div className="logo_items">
                  <Link to="/">
                    <img src={logoheader} className="logo" alt="logo" />
                  </Link>
                </div>

                <div className="NavBarItem">
                  <nav className="stroke">
                    <ul>
                      <li>
                        <Link to="/aboutset" className="header zoom">
                          About SRI ASHISH
                        </Link>
                      </li>
                      <li>
                        <Link to="/three-page" className="header zoom">
                          THREE-FOLD PATH
                        </Link>
                      </li>
                      <li>
                        <div className="dropdown">
                          <Link className="header zoom">“I AM” – Book </Link>
                          <div className="dropdown-content">
                            <Link to="/i-am-book" className="ancher">
                              WHAT'S IN THE BOOK
                            </Link>
                            <Link
                              href="/ashish/i-am-book.html#readthisbook"
                              className="ancher"
                            >
                              Why should you read this book?
                            </Link>
                            <Link href="#" className="ancher">
                              LOOK INSIDE!
                            </Link>
                            <Link
                              href="/ashish/i-am-book.html#aboutauthor"
                              className="ancher"
                            >
                              About the Author
                            </Link>
                            <Link
                              href="/ashish/i-am-book.html#review"
                              className="ancher"
                            >
                              Reviews
                            </Link>
                            <Link to="/BuyNow" className="ancher">
                              Buy Now
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown">
                          <Link href="" className="header zoom">
                            EVENTS
                          </Link>
                          <div className="dropdown-content">
                            <Link
                             to="/live-events"
                            >
                              Live
                            </Link>
                            <Link
                              to="/ashish/volunteering.html"
                              className="ancher"
                            >
                              Recordings
                            </Link>
                            <Link to="/session-contact" className="ancher">
                              Session with Sri Ashish{" "}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown">
                          <Link className="header zoom">GALLERY</Link>
                          <div className="dropdown-content">
                            <Link to="/video-items">Photo & Videos</Link>
                            {/* <Link
                              to="/photos"
                              className="ancher"
                            >
                              Photos
                            </Link> */}
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="/contact-us" className="header zoom">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                
                <div className="donateIink d-flex">
                <div className="NavBlockIcon">
                    <Link to="/" target="_blank">
                      <img src={ButtonLogo} className="headerlogo" alt="img" />
                    </Link>
                  </div>
                  <div className="NavBlockIcon donateIcon">
                    <Link to="" target="_blank">
                      <img src={DonateImg} className="headerlogo" alt="img" />
                    </Link>
                  </div>
                 
                </div>
                <div
                  className="hamburger-linesOuter right_toggle"
                  onClick={toggleMenu}
                >
                  <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}
