import React, { useState } from 'react';

const MessageComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome back! You are logged in.</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in to continue.</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default MessageComponent;