import { createContext, useState, useEffect, useContext } from "react";

// function normalizeUser(userFromBackend) {
//   return {
//     id: userFromBackend.id,
//     firstName: userFromBackend.first_name,
//     lastName: userFromBackend.last_name,
//     email: userFromBackend.email,
//     storeLocation: userFromBackend.store_location,
//     role: userFromBackend.role,
//     instrument: userFromBackend.instrument,
//     // Add others as needed
//   };
// }


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // New
  const [error, setError] = useState(null);     // New

  // Load user/token from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken); // Fetch user data from backend
    } else {
      setLoading(false); // Done loading even if no token
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Optional: preload basic info
    }
  }, []);

//   const fetchUser = async (authToken = token) => {
//   setLoading(true);
//   setError(null);

//   try {
//     console.log("🔁 Attempting fetch to /api/user-data");
//     console.log("🧠 Token being sent:", authToken);

//     const res = await fetch("http://localhost:5000/api/user-data", {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     });

//     if (!res.ok) {
//       console.error(`❌ Failed to fetch user: Status ${res.status}`);
//       const text = await res.text();
//       console.error("🔍 Response body:", text);
//       throw new Error("Failed to fetch user");
//     }

//     const data = await res.json();
//     console.log("✅ User fetched:", data);

//     // later build --> find a better way to do this, do not need to pull all user-data, especially not credentials like password 

//     const normalized = normalizeUser(data);
//     setUser(normalized);
//     localStorage.setItem("user", JSON.stringify(normalized));
//   } catch (err) {
//     console.error("⚠️ fetchUser error:", err);
//     setError(err.message || "Unknown error");
//     setUser(null);
//   } finally {
//     setLoading(false);
//   }
// };

const fetchUser = async (authToken = token) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/api/user-data", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch user");
      console.log("failed to fetch user");

      const data = await res.json();
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (err) {
      console.error("User fetch error:", err);
      setError(err.message || "Unknown error");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };










  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("user", JSON.stringify(userData));
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
        fetchUser, // allow re-fetching profile
        loading,
        error,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier access
export const useAuth = () => useContext(AuthContext);
