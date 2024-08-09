"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../Assets/Images/NavBar/Logo.png";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

import "./Footer.css";

const Footer = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="footer-wrapper">
      <div className="footer-info-wrapper">
        <Image
          src={Logo}
          alt="Logo"
          style={{ display: hidden ? "none" : "block" }}
        />

        <ul className="footer-text-wrapper">
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem.</li>
        </ul>
        <ul className="footer-text-wrapper">
          <li>Lorem, ipsum.</li>
          <li>Lorem.</li>
        </ul>
        <ul className="footer-text-wrapper">
          <li>Lorem, ipsum.</li>
          <li>Lorem.</li>
        </ul>
      </div>

      <div className="footer-social-networks-wrapper">
        <div className="footer-line"></div>
        <div className="footer-social-icons-wrapper">
          <SlSocialFacebook />
          <FaInstagram />
          <SlSocialLinkedin />
          <SlSocialTwitter />
          <SlSocialGoogle />
        </div>
        <div className="footer-line"></div>
      </div>
    </footer>
  );
};

export default Footer;
