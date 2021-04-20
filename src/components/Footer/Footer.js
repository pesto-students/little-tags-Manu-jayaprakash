import React from "react";
import "./Footer.css";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaCcVisa,
  FaCcAmex,
  FaCcMastercard,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <ul className="footer-list">
            <li className="footer-header">Links</li>
            <li>
              <a href="#/">About Us</a>
            </li>
            <li>
              <a href="#/">Contact Us</a>
            </li>
            <li>
              <a href="#/">Blog</a>
            </li>
            <li>
              <a href="#/">Size Guide</a>
            </li>
            <li>
              <a href="#/">Place a Return Request</a>
            </li>
            <li>
              <a href="#/">Privacy Policy</a>
            </li>
            <li>
              <a href="#/">Shipping Policy</a>
            </li>
            <li>
              <a href="#/">Refund Policy</a>
            </li>
            <li>
              <a href="#/">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="footer-list">
            <li className="footer-header">Follow Us</li>
            <li>
              <a href="#/">
                <FaFacebookSquare /> Faceook
              </a>
            </li>
            <li>
              <a href="#/">
                <FaInstagramSquare /> Instagram
              </a>
            </li>
            <li>
              <a href="#/">
                <FaTwitterSquare /> Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="footer-list">
            <li className="footer-header">Newsletter</li>
            <li className="subscribe-line">
              Hello! Sign up below to get access to our exclusive offers, flash
              sales and more in your inbox
            </li>
            <li>
              <form className="subscribe">
                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Your Email"
                    autoComplete="off"
                    name="email"
                  />
                </div>
                <div className="form-field">
                  <button>Subscribe</button>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copy-right">
          Copyright © 2021, BB. Powered by Binary Beasts
        </div>
        <div className="payment-methods">
          <div className="icon">
            <FaCcAmex />
          </div>
          <div className="icon">
            <FaCcVisa />
          </div>
          <div className="icon">
            <FaCcMastercard />
          </div>
          <div className="icon">
            <FaCcVisa />
          </div>
          <div className="icon">
            <FaCcVisa />
          </div>
          <div className="icon">
            <FaCcVisa />
          </div>
          <div className="icon">
            <FaCcVisa />
          </div>
          <div className="icon">
            <FaCcVisa />
          </div>
          <div className="icon">
            <FaCcVisa />
          </div>
        </div>
      </div>
    </div>
  );
}
