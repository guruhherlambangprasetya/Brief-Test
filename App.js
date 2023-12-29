// App.js
import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import ProtectedRoute from './ProtectedRoute';
import 'src/styles/main.css'; // Import Tailwind CSS

const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const onSuccessGoogleLogin = (response) => {
    setIsAuthenticated(true);
    setUserData({
      name: response.profileObj.name,
      email: response.profileObj.email,
      picture: response.profileObj.imageUrl,
    });
  };

  const onFailureGoogleLogin = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData }}>
      <Router>
        <Switch>
          <Route path="/login">
            <div className="flex items-center justify-center h-screen">
              <div className="max-w-md p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <GoogleLoginButton
                  onSuccess={onSuccessGoogleLogin}
                  onFailure={onFailureGoogleLogin}
                />
              </div>
            </div>
          </Route>
          <ProtectedRoute
            path="/profile"
            component={ProfilePage}
            isAuthenticated={isAuthenticated}
          />
          <Route path="/" exact>
            <div className="text-center mt-10">
              <h2 className="text-3xl font-bold mb-4">Home Page</h2>
            </div>
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

const ProfilePage = () => {
  const { isAuthenticated, userData } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Profile Page</h2>
        {isAuthenticated && (
          <div>
            <p className="mb-2">Name: {userData?.name}</p>
            <p className="mb-2">Email: {userData?.email}</p>
            <img
              src={userData?.picture}
              alt="Profile"
              className="rounded-full h-20 w-20 mx-auto mb-4"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
