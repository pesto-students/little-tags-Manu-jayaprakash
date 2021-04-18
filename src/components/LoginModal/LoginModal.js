import React from "react";
import "./LoginModal.css";
import {signInWithGoogle} from '../../firebase/firebase'

export default function LoginModal() {

  const handleGoogleLogin = ()=>{
    signInWithGoogle();
  }

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
      </div>
    </div>
  );
}
