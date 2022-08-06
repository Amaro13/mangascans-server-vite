import { Manga } from "../../types/interfaces";
import MangaCard from "../MangaCard";
import * as S from "./style";

interface MangasListProps {
  list: Manga[];
}

const MangasList = ({ list }: MangasListProps) => {
  return (
    <S.MangasListContainer>
      {list.map((element) => (
        <MangaCard manga={element} key={element.id} />
      ))}
    </S.MangasListContainer>
  );
};

export default MangasList;
