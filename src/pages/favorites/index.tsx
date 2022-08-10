import * as S from "./style"; //importing all const exports from style contained within as S
import { Dispatch, SetStateAction, useState } from "react";
import Header from "../../components/header";
import { mockedManga } from "../../mocks/manga";
import MangaList from "../../components/MangaList";
import { Favorite, Manga, User } from "../../types/interfaces";
import { FaSearch } from "react-icons/fa";
import { mockedFavorites } from "../../mocks/favorite";
import { mockedUsers } from "../../mocks/user";

interface FavoritesProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Favorites = ({ setLogged }: FavoritesProps) => {
  const [activeUser, setactiveUser] = useState<User>(mockedUsers[0]);

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
        <Header path="favorites" setLogged={setLogged} />

        {/* <S.GenresNavigationBar> */}
        <S.SearchContainer>
          <S.SearchInputContainer>
            <form>
              <input
                type="text"
                placeholder="Search"
                // onChange={filterByName}
              />
              <button type="submit">
                <FaSearch color="#555" />
              </button>
            </form>
          </S.SearchInputContainer>
        </S.SearchContainer>
        {/* </S.GenresNavigationBar> */}
        <S.MangasHeaderContainer>
          <h2>Manga Favorites</h2>
        </S.MangasHeaderContainer>
        <MangaList list={filteredManga(filteredFavorites, mockedManga)} />
        {/* <MangaList list={filteredMangas} /> */}
      </S.FavoritesContent>
    </S.favorites>
  );
};

export default Favorites;
