"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../Assets/Images/NavBar/Logo.png";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialGoogle,
} from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const [hidden, setHidden] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setHidden(window.innerWidth <= 650);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer-wrapper">
      <div className="footer-info-wrapper">
        <Image
          src={Logo}
          alt="Logo"
          className={hidden ? "logo-hidden" : "logo-visible"}
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
