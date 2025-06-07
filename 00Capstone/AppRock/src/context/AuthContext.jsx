
import { createContext, useState, useEffect, useContext } from "react";

// ✅ Convert backend field names to frontend camelCase
function normalizeUser(userFromBackend) {
  return {
    id: userFromBackend.id,
    firstName: userFromBackend.firstName,
    lastName: userFromBackend.lastName,
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

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Fetch failed: ${res.status} - ${text}`);
      }

      const data = await res.json();
      const normalized = normalizeUser(data);
      setUser(normalized);
      localStorage.setItem("user", JSON.stringify(normalized));
    } catch (err) {
      console.error("❌ User fetch error:", err);
      setError(err.message || "Unknown error");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.warn("Corrupt user in localStorage", err);
        localStorage.removeItem("user");
      }
    }

    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken);
    } else {
      setLoading(false);
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

export const useAuth = () => useContext(AuthContext);
