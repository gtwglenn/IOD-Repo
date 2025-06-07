


// ----------- DO NOT LISTEN TO THE COFFEE: DO NOT TOUCH THIS -----------------------
// ----------- I KNOW WHAT YOU'RE THINKING BUT THIS WORKS ----------------------------
// ----------- DON'T DO IT -----------------------------------------------------------




import { createContext, useState, useEffect, useContext } from "react";

// 🧼 Normalize backend user shape into frontend format
function normalizeUser(userFromBackend) {
  return {
    id: userFromBackend.id,
    firstName: userFromBackend.first_name,
    lastName: userFromBackend.last_name,
    email: userFromBackend.email,
    storeLocation: userFromBackend.store_location,
    role: userFromBackend.role,
    instrument: userFromBackend.instrument,
  };
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hoist fetchUser above useEffect so it's defined when called
  const fetchUser = async (authToken) => {
    const resolvedToken = authToken || token;
    if (!resolvedToken) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/api/user-data", {
        headers: {
          Authorization: `Bearer ${resolvedToken}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch user");

      const data = await res.json();
      const normalized = normalizeUser(data);
      setUser(normalized);
      localStorage.setItem("user", JSON.stringify(normalized));
    } catch (err) {
      console.error("User fetch error:", err);
      setError(err.message || "Unknown error");
      setUser(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  // On first load, restore token and user from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken); //Now safe to call
    } else {
      setLoading(false);
    }

    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) setUser(storedUser);
    } catch (err) {
      console.warn("Corrupt user in localStorage", err);
      localStorage.removeItem("user");
    }
  }, []);

  const login = (userData, authToken) => {
    const normalized = normalizeUser(userData);
    setUser(normalized);
    setToken(authToken);
    localStorage.setItem("user", JSON.stringify(normalized));
    localStorage.setItem("token", authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        fetchUser,
        loading,
        error,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 🪄 Optional custom hook so you don't have to manually useContext(AuthContext)
export const useAuth = () => useContext(AuthContext);
