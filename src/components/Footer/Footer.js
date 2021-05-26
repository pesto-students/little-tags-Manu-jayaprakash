import React from "react";
import "./Footer.css";
import { MdLocationOn,MdCall,MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span className="first-letter">B</span> &
          <span className="second-letter"> B</span>
        </h3>

        <p className="footer-links">
          <a href="#/">Home</a>·<a href="#/">Blog</a>·<a href="#/">About</a>·
          <a href="#/">Faq</a>·<a href="#/">Contact</a>
        </p>

        <p className="footer-company-name">B & B &copy; 2020</p>
      </div>

      <div className="footer-center">
        <div>
          <MdLocationOn/>
          <p>
            <span>Lorem, ipsum dolor.</span> India
          </p>
        </div>

        <div>
          <MdCall/>
          <p>+000 000000</p>
        </div>

        <div>
          <MdEmail/>
          <p>
            <a href="mailto:townmate-dev@gmail.com">b_and_b-dev@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          voluptate molestiae deleniti iusto adipisci corporis?
        </p>
      </div>
    </footer>
  );
}
