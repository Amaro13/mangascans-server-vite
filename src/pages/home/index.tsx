import * as S from "./style"; //importing all const exports from style contained within as S
import { Dispatch, SetStateAction, useState } from "react";
import Header from "../../components/header";
import { mockedManga } from "../../mocks/manga";
import MangaList from "../../components/MangaList";
import { mockedGenres } from "../../mocks/genre";
import { Genre, Manga } from "../../types/interfaces";
import { FaSearch } from "react-icons/fa";

interface HomeProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

// para inserir no localStorage:

// localStorage.setItem('key', true);

// Para fazer a leitura:

// if (localStorage.key) {
//       setLogin(true);
//     };

const Home = ({ setLogged }: HomeProps) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>(mockedGenres[0]);

  const filteredGenres: Manga[] = mockedManga.filter(
    (element) => element.genreId === selectedGenre.id
  );

  return (
    <S.home>
      <S.HomeContent>
        <Header path="home" setLogged={setLogged} />

        <S.GenresNavigationBar>
          {mockedGenres.map((element) => {
            return (
              <S.GenresNavigationButton
                active={element.name === selectedGenre.name}
                onClick={() => setSelectedGenre(element)}
              >
                {element.name}
              </S.GenresNavigationButton>
            );
          })}
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
        </S.GenresNavigationBar>
        <S.MangasHeaderContainer>
          <h2>Manga Lists</h2>
        </S.MangasHeaderContainer>
        <MangaList list={filteredGenres} />
        {/* <MangaList list={filteredMangas} /> */}
      </S.HomeContent>
    </S.home>
  );
};

export default Home;
