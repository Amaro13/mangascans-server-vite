import { Manga } from "../../types/interfaces";
import * as S from "./style";
import { IoIosSettings, IoIosTrash } from "react-icons/io";
import { Dispatch, SetStateAction } from "react";

interface SettingsMangaCardProps {
  manga: Manga;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
  setManga: Dispatch<SetStateAction<Manga | undefined>>;
}

const SettingsMangaCard = ({
  manga,
  handleOpenModal,
  handleOpenDeleteModal,
  setManga,
}: SettingsMangaCardProps) => {
  return (
    <S.SettingsMangaCardContainer>
      <img alt={manga.name} src={manga.image} />
      <h3>{manga.name}</h3>
      <p>Chapters: {manga.chapters}</p>
      <S.SettingsMangaCardButton
        onClick={() => {
          setManga(manga);
          handleOpenModal();
        }}
      >
        <IoIosSettings /> Edit
      </S.SettingsMangaCardButton>
      <S.SettingsMangaCardButton
        onClick={() => {
          setManga(manga);
          handleOpenDeleteModal();
        }}
      >
        <IoIosTrash /> Delete
      </S.SettingsMangaCardButton>
    </S.SettingsMangaCardContainer>
  );
};

export default SettingsMangaCard;
