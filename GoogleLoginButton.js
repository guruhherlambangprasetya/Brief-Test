// GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import 'src/styles/main.css'; // Import Tailwind CSS

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId = '623068502848-vb5b9lma1h77f2icb1uq7rt2phrmceoa.apps.googleusercontent.com'; // Ganti dengan ID klien Google Anda

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    />
  );
};

export default GoogleLoginButton;
