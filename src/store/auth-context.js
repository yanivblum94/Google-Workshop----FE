import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  email: "",
  userName: "",
  login: (result) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const userIsLoggedIn = !!token;

  const loginHandler = (result) => {
    setToken(result.user.accessToken);
    setEmail(result.user.email);
    setUserName(result.user.displayName);
    console.log(result);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    email: email,
    userName: userName,
    login: loginHandler,
    logout: logoutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
