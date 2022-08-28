import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Favorite } from "../../types/interfaces";
import { api } from "../../services";
import { useAuth } from "../auth";

interface FavoritesProviderProps {
  children: ReactNode;
}

interface FavoritesProviderData {
  favorites: Favorite[];
  handleGetFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesProviderData>(
  {} as FavoritesProviderData
);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const { logged } = useAuth();

  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const handleGetFavorites = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/favorites", headers).then((res) => {
      setFavorites(res.data);
    });
  };

  useEffect(() => {
    if (logged) handleGetFavorites();
  }, [logged]);

  return (
    <FavoritesContext.Provider value={{ favorites, handleGetFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
