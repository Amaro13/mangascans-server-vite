import { Manga } from "../../types/interfaces";
import { FaBookmark } from "react-icons/fa";
import * as S from "./style";
import {
  ErrorMessage,
  ModalOverlay,
  Input,
} from "../../assets/styles/inputform";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import { useFavorites } from "../../contexts/favorites";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useUsers } from "../../contexts/users";
import { User, Favorite } from "../../types/interfaces";

interface MangaCardProps {
  manga: Manga;
}

const MangaCard = ({ manga }: MangaCardProps) => {
  return (
    <S.CardContainer>
      <img alt={manga.name} src={manga.image} />
      <h3>{manga.name}</h3>
      <p>Chapters: {manga.chapters}</p>
      <S.MangaCardButton
      // onClick={() => {
      //   setManga(manga);
      //   handleOpenModal();
      // }}
      >
        <FaBookmark /> Favorite
      </S.MangaCardButton>
      {/* <p>{manga.description}</p> */}
    </S.CardContainer>
  );
};

export default MangaCard;
