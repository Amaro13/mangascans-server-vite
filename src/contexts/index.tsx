import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./auth";
import { MangasProvider } from "./mangas";
import { GenresProvider } from "./genres";
import theme from "../assets/styles/theme";
import { FavoritesProvider } from "./favorites";
import { UsersProvider } from "./users";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UsersProvider>
            <GenresProvider>
              <FavoritesProvider>
                <MangasProvider>{children}</MangasProvider>
              </FavoritesProvider>
            </GenresProvider>
          </UsersProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
