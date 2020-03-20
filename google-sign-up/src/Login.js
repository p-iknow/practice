import React from 'react';
import "./Login.css"

import GoogleLogin from 'react-google-login';

const Login = (props) => {
  const { onLoginGoogle } = props;
  return (
      <GoogleLogin
         clientId='343925492799-pra5s6c36t598bgn0limna5rkjea5kpc.apps.googleusercontent.com'
         onSuccess={result => onLoginGoogle(result)}
         onFailure={result => console.log(result)}
         cookiePolicy={'single_host_origin'}
      />
  );
};

export default Login;