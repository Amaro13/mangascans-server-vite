import * as S from "./style"; //importing all const exports from style contained within as S
import { useState } from "react";
import Header from "../../components/header";
import { useMangas } from "../../contexts/mangas";
import MangaList from "../../components/MangaList";
import { mockedGenres } from "../../mocks/genre";
import { Genre, Manga } from "../../types/interfaces";

const Home = () => {
  const { mangas } = useMangas();
  console.log(mangas);

  const [selectedGenre, setSelectedGenre] = useState<Genre>(mockedGenres[0]); //// must always create the useState before you create the useEffect

  const filteredMangas: Manga[] = mangas.filter(
    (element) => selectedGenre && element.genreId === selectedGenre.id
  );

  return (
    <S.home>
      <S.HomeContent>
        <Header path="home" />

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
          <h2>Manga Lists</h2>
        </S.MangasHeaderContainer>
        <MangaList list={filteredMangas} />
      </S.HomeContent>
    </S.home>
  );
};

export default Home;
