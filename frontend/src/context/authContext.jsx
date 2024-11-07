import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login"); // Redirect to login if no token is found
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.success && res.data.user) {
          setUser(res.data.user); // Set user data if verification is successful
        } else {
          navigate("/login"); // Navigate to login if user verification fails
        }
      } catch (error) {
        console.error("Verification failed:", error);
        navigate("/login"); // Redirect to login if error occurs
      } finally {
        setLoading(false); // Set loading to false after checking
      }
    };

    verifyUser(); // Call verifyUser on initial load
  }, [navigate]);

  const logIn = (user) => {
    setUser(user);
    localStorage.setItem("token", user.token); // Save token in localStorage
    navigate("/admin-dashboard"); // Redirect to the admin dashboard after login
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token"); // Remove token on logout
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <userContext.Provider value={{ user, logIn, logOut, loading }}>
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => useContext(userContext);
export default AuthContext;
