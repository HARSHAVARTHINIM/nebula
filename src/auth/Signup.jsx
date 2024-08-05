import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      navigate('/login'); // Redirect to entry page after signup
    } else {
      alert('Passwords do not match');
    }
  };

  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/025/934/704/large_2x/abstract-neon-light-gaming-background-generated-by-ai-free-photo.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const containerStyle = {
    width: '360px',
    padding: '30px 50px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    animation: 'neon 1.5s ease-in-out infinite alternate'
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'pulse 2s infinite'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.7)'
  };

  const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: 'rgba(255, 255, 255, 0.5)',
    color: '#000',
    transition: 'all 0.3s ease'
  };

  const formBtnStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease'
  };

  const buttonContainerStyle = {
    marginTop: '20px'
  };

  const socialBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.3s ease'
  };

  const socialIconStyle = {
    marginRight: '10px',
    filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))'
  };

  const signupLabelStyle = {
    marginTop: '20px',
    color: '#1b1717',
    textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
  };

  const signupLinkStyle = {
    color: '#111518',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  };

  return (
    <div style={mainStyle}>
      <div style={containerStyle}>
        <div style={formContainerStyle}>
          <div style={titleStyle}>Sign Up</div>
          <form style={formStyle} onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
            />
            <button type="submit" style={formBtnStyle}>Sign Up</button>
            <div style={buttonContainerStyle}>
              <div style={socialBtnStyle}>
                <FontAwesomeIcon icon={faApple} style={socialIconStyle} />
                Continue with Apple
              </div>
              <div style={socialBtnStyle}>
                <FontAwesomeIcon icon={faGoogle} style={socialIconStyle} />
                Continue with Google
              </div>
            </div>
            <label style={signupLabelStyle}>Already have an account?</label>
            <span style={signupLinkStyle} onClick={() => navigate('/')}>Login</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
