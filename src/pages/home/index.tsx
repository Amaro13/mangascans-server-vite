import * as S from "./style"; //importing all const exports from style contained within as S
import { Dispatch, SetStateAction, useState } from "react";
import Header from "../../components/header";
import { mockedManga } from "../../mocks/manga";
import MangaList from "../../components/MangaList";
import { mockedGenres } from "../../mocks/genre";
import { Genre, Manga } from "../../types/interfaces";

interface HomeProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ setLogged }: HomeProps) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>(mockedGenres[0]);

  const filteredMangas: Manga[] = mockedManga.filter(
    (element) => element.genreId === selectedGenre.id
  );

  return (
    <S.home>
      <S.HomeContent>
        <Header path="home" setLogged={setLogged} />
        <section>
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
          </S.GenresNavigationBar>
          <S.MangasHeaderContainer>
            <h2>Pick your read</h2>
          </S.MangasHeaderContainer>
          <MangaList list={filteredMangas} />
        </section>
      </S.HomeContent>
    </S.home>
  );
};

export default Home;
