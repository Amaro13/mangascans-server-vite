import * as S from "./style"; //importing all const exports from style contained within as S
import { useEffect, useState } from "react";
import Header from "../../components/header";
import { useMangas } from "../../contexts/mangas";
import MangaList from "../../components/MangaList";
import { useGenres } from "../../contexts/genres";
import { Favorite, Genre, Manga, User } from "../../types/interfaces";
import { api } from "../../services";

const Home = () => {
  const { mangas } = useMangas();
  const { genres } = useGenres();

  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre); //// must always create the useState before you create the useEffect, when using useState with a value from api, must give an optional with the inter

  const [isFavoritesList, setIsFavoritesList] = useState<boolean>(false);
  const [userFavoritesList, setUserFavoritesList] = useState<Manga[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  let filteredMangas: Manga[] =
    mangas.filter(
      (element) => selectedGenre && element.genreId === selectedGenre.id
    ) || mangas;

  if (selectedGenre.id == null) {
    filteredMangas = mangas;
  }

  const handleGetFavorites = async () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const user: User = JSON.parse(localStorage.getItem("user") || "");

    const res = await api.get<Favorite[]>(
      `/favorites/user/${user?.id}`,
      headers
    );

    const favorites = res.data;

    const favoritesNames: string[] = favorites.map((elem) => elem.mangaName);

    const favoritesList: Manga[] = mangas.filter((elem) => {
      return favoritesNames.includes(elem.name);
    });

    setUserFavoritesList(favoritesList);
  };

  useEffect(() => {
    handleGetFavorites();
  }, [mangas]);

  return (
    <S.home>
      <S.HomeContent>
        <Header path="home" />

        <S.GenresNavigationBar>
          {genres.map((element) => {
            return (
              <S.GenresNavigationButton
                active={element.name === selectedGenre.name}
                onClick={() => setSelectedGenre(element)}
              >
                {element.name}
              </S.GenresNavigationButton>
            );
          })}
        </S.GenresNavigationBar>
        <S.MangasHeaderContainer>
          <h2>Manga List</h2>
        </S.MangasHeaderContainer>
        <MangaList list={filteredMangas} />
      </S.HomeContent>
    </S.home>
  );
};

export default Home;
