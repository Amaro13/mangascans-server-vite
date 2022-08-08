import { Manga } from "../../types/interfaces";
import * as S from "./style";
import { IoIosSettings } from "react-icons/io";

interface SettingsMangaCardProps {
  manga: Manga;
}

const SettingsMangaCard = ({ manga }: SettingsMangaCardProps) => {
  return (
    <S.SettingsMangaCardContainer>
      <img alt={manga.name} src={manga.image} />
      <h3>{manga.name}</h3>
      <p>Chapters: {manga.chapters}</p>
      <S.SettingsMangaCardButton>
        <IoIosSettings /> Edit Manga
      </S.SettingsMangaCardButton>
    </S.SettingsMangaCardContainer>
  );
};

export default SettingsMangaCard;
