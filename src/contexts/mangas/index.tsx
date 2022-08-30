import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Manga } from "../../types/interfaces";
import { api } from "../../services";
import { useAuth } from "../auth";

interface MangasProviderProps {
  children: ReactNode;
}

interface MangasProviderData {
  mangas: Manga[];
  handleGetMangas: () => void;
}

const MangasContext = createContext<MangasProviderData>(
  {} as MangasProviderData
);

export const MangasProvider = ({ children }: MangasProviderProps) => {
  const { logged } = useAuth();

  const [mangas, setMangas] = useState<Manga[]>([]);

  const handleGetMangas = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/mangas", headers).then((res) => {
      setMangas(res.data);
    });
  };

  useEffect(() => {
    if (logged) handleGetMangas();
  }, [logged]);

  return (
    <MangasContext.Provider value={{ mangas, handleGetMangas }}>
      {children}
    </MangasContext.Provider>
  );
};

export const useMangas = () => useContext(MangasContext);
