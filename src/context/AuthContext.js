import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }, [loggedInUser]);

  const signup = ({ email, password, confirmPassword }) => {
    setSignupError('');
    if (!email || !password || !confirmPassword) {
      setSignupError('Please fill in all fields.');
      return false;
    }
    if (password !== confirmPassword) {
      setSignupError('Passwords do not match.');
      return false;
    }
    if (users.find(user => user.email === email)) {
      setSignupError('User with this email already exists.');
      return false;
    }
    setUsers([...users, { email, password }]);
    return true;
  };

  const login = ({ email, password }) => {
    setLoginError('');
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
      setLoginError('Invalid email or password.');
      return false;
    }
    setLoggedInUser(user);
    return true;
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        loggedInUser,
        loginError,
        signupError,
        signup,
        login,
        logout,
        setLoginError,
        setSignupError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
