import { createContext, useContext, useState, useEffect } from "react";

const TOKEN_KEY = "authToken";

const AuthContext = createContext({
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    setIsLoggedIn(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
