import { Manga } from "../../types/interfaces";
import * as S from "./style";

interface MangaCardProps {
  manga: Manga;
}

const MangaCard = ({ manga }: MangaCardProps) => {
  return (
    <S.CardContainer>
      <img alt={manga.name} src={manga.image} />
      <h3>{manga.name}</h3>
      <p>Chapters: {manga.chapters}</p>
      {/* <p>{manga.description}</p> */}
    </S.CardContainer>
  );
};

export default MangaCard;
