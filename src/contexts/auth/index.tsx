import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../services"; // importing from the axios connection
import { User } from "../../types/interfaces"; //Notice that you don't need to import the user from api because the auth api already references the user api

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  logout: () => void;
}

interface LoginParams {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState<boolean>(false);

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    navigate("/");
    toast.success("Login successfully!");
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/login");
  };

  const checkTokenExpiration = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`/users/${user.id}`, headers)
      .then(() => {
        setLogged(true);
        navigate("/");
      })
      .catch(() => {
        logout();
        toast.success("Need to make another login atempt");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();
  }, []);

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
