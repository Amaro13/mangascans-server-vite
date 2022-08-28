import * as S from "./style"; //importing all const exports from style contained within as S
import { useState } from "react";
import Header from "../../components/header";
import { useMangas } from "../../contexts/mangas";
import MangaList from "../../components/MangaList";
import { useGenres } from "../../contexts/genres";
import { Genre, Manga } from "../../types/interfaces";

const Home = () => {
  const { mangas } = useMangas();
  const { genres } = useGenres();

  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre); //// must always create the useState before you create the useEffect, when using useState with a value from api, must give an optional with the inter

  let filteredMangas: Manga[] =
    mangas.filter(
      (element) => selectedGenre && element.genreId === selectedGenre.id
    ) || mangas;

  if (selectedGenre.id == null) {
    filteredMangas = mangas;
  }

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
          <h2>Manga Lists</h2>
        </S.MangasHeaderContainer>
        <MangaList list={filteredMangas} />
      </S.HomeContent>
    </S.home>
  );
};

export default Home;
