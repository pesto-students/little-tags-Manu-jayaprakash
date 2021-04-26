import React from "react";
import "./LoginModal.css";
import { signInWithGoogle, signInWithFacebook } from "../../firebase/firebase";

export default function LoginModal() {
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handleFacebookLogin = () => {
    signInWithFacebook();
  };

  return (
    <div className="login-modal__wrapper">
      <div className="login-modal__card">
        <div className="google-btn" onClick={handleGoogleLogin}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google icon"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
        <div className="facebook-btn" onClick={handleFacebookLogin}>
          <div className="facebook-icon-wrapper">
            <img
              className="facebook-icon"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png"
              alt="facebook icon"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with facebook</b>
          </p>
        </div>
      </div>
    </div>
  );
}
