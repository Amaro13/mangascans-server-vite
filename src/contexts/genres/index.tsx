import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Genre } from "../../types/interfaces";
import { api } from "../../services";
import { useAuth } from "../auth";

interface GenresProviderProps {
  children: ReactNode;
}

interface GenresProviderData {
  genres: Genre[];
  handleGetGenres: () => void;
}

const GenresContext = createContext<GenresProviderData>(
  {} as GenresProviderData
);

export const GenresProvider = ({ children }: GenresProviderProps) => {
  const { logged } = useAuth();

  const [genres, setGenres] = useState<Genre[]>([]);

  const handleGetGenres = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/genre", headers).then((res) => {
      setGenres(res.data);
    });
  };

  useEffect(() => {
    if (logged) handleGetGenres();
  }, [logged]);

  return (
    <GenresContext.Provider value={{ genres, handleGetGenres }}>
      {children}
    </GenresContext.Provider>
  );
};

export const useGenres = () => useContext(GenresContext);
