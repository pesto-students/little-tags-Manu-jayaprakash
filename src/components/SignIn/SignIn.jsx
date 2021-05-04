import React, {useState} from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignIn.styles.scss';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const {value, name} = e.target;
        if(name === 'email'){
            setEmail(value);
        }else{
            setPassword(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={email}
                    label='Email'
                    required
                    autoComplete="off"
                />

                <FormInput 
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={password}
                    label='Password'
                    required
                    autoComplete="off"
                />  
                
                <div className="buttons">
                    <CustomButton type='submit'>Sign in</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
