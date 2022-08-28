import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { User } from "../../types/interfaces";
import { api } from "../../services";
import { useAuth } from "../auth";

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersProviderData {
  users: User[];
  handleGetUsers: () => void;
}

const UsersContext = createContext<UsersProviderData>({} as UsersProviderData);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const { logged } = useAuth();

  const [users, setUsers] = useState<User[]>([]);

  const handleGetUsers = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/users", headers).then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    if (logged) handleGetUsers();
  }, [logged]);

  return (
    <UsersContext.Provider value={{ users, handleGetUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
