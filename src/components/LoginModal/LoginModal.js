import React, {useState} from "react";
import "./LoginModal.css";
import Google from '../../images/google-logo.jpg';
import Facebook from '../../images/fb-logo.png';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';


import { signInWithGoogle, signInWithFacebook } from "../../firebase/firebase";

export default function LoginModal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleChange = (e) => {
        const {value, name} = e.target;
        if(name === 'email'){
            setEmail(value);
        }else if(name === 'password'){
            setPassword(value);
        }else{
          setMobileNumber(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    }

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handleFacebookLogin = () => {
    signInWithFacebook();
  };

  return (
    <div className="login-modal__wrapper">
      {/* <Signin /> */}
      
      <div className="login-modal__card">
          <form className='sign-in-form' onSubmit={handleSubmit}>
            <input 
              name='email'
              type='email'
              onChange={handleChange}
              value={email}
              placeholder='Email'
              required
              autoComplete="off"
            />
            <input 
              name='password'
              type='password'
              onChange={handleChange}
              value={password}
              placeholder='Password'
              required
              autoComplete="off"
            />
            
            <div className="buttons">
                <CustomButton type='submit'>Sign in</CustomButton>
            </div>
            <div className='forgot-password'>
                <p>Forgot password?</p>
            </div>
          </form>
          <div className='line-divider'></div>
          <div className='sign-in-options'>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src={Google}
                alt="google icon"
              />
            </div>
          </div>
          <div className="facebook-btn" onClick={handleFacebookLogin}>
            <div className="facebook-icon-wrapper">
              <img
                className="facebook-icon"
                src={Facebook}
                alt="facebook icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
