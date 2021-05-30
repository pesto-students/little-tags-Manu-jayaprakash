import React from "react";
import "./Footer.css";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";

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
          <MdLocationOn />
          <p>India</p>
        </div>

        <div>
          <MdCall />
          <p>+91 8547213535</p>
        </div>

        <div>
          <MdEmail />
          <p>
            <a href="mailto:townmate-dev@gmail.com">b_and_b-dev@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          BinBeas brings you a daily fashion fix incorporating everything that
          you love, all at one place. Sign up on BinBeas today and start
          organising your fashion feed, just the way you want to.
        </p>
      </div>
    </footer>
  );
}
