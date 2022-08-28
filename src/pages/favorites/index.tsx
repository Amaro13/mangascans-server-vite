import * as S from "./style"; //importing all const exports from style contained within as S
import { useState } from "react";
import Header from "../../components/header";
import { useMangas } from "../../contexts/mangas";
import MangaList from "../../components/MangaList";
import { Favorite, Manga, User } from "../../types/interfaces";
import { mockedFavorites } from "../../mocks/favorite";
import { mockedUsers } from "../../mocks/user";

const Favorites = () => {
  const [activeUser, setactiveUser] = useState<User>(mockedUsers[0]);
  const { mangas } = useMangas();

  const filteredFavorites: Favorite[] = mockedFavorites.filter(
    (element) => element.userId === activeUser.id
  );

  const filteredManga = (req1: Favorite[], req2: Manga[]) => {
    let res = [];
    res = req2.filter((el) => {
      return req1.find((element) => {
        return element.mangaName === el.name;
      });
    });
    return res;
  };

  return (
    <S.favorites>
      <S.FavoritesContent>
        <Header path="favorites" />

        <S.MangasHeaderContainer>
          <h2>Manga Favorites</h2>
        </S.MangasHeaderContainer>
        <MangaList list={filteredManga(filteredFavorites, mangas)} />
      </S.FavoritesContent>
    </S.favorites>
  );
};

export default Favorites;
