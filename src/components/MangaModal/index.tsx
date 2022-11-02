import {
  ErrorMessage,
  ModalOverlay,
  Input,
} from "../../assets/styles/inputform";
import * as S from "./style";
import Button from "../button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import { useGenres } from "../../contexts/genres";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useMangas } from "../../contexts/mangas";
import { Manga, Genre } from "../../types/interfaces";

interface MangaModalProsp {
  handleOpenModal: () => void;
  manga?: Manga;
  setManga: Dispatch<SetStateAction<Manga | undefined>>;
}

interface NewMangaData {
  name?: string;
  description?: string;
  chapters?: number;
  image?: string;
  genreId?: string;
}

const newMangaSchema = yup.object().shape({
  name: yup.string(),

  description: yup.string(),

  chapters: yup.number(),

  genreId: yup.string(),

  image: yup.string().url("Invalid URL format"),
});

const updateMangaSchema = yup.object().shape({
  name: yup.string(),

  description: yup.string(),

  chapters: yup.number(),

  genreId: yup.string(),

  image: yup.string().url("Invalid URL format"),
});

const MangaModal = ({ handleOpenModal, manga, setManga }: MangaModalProsp) => {
  const { handleGetMangas } = useMangas();
  const { genres } = useGenres();

  const [genreId, setGenreId] = useState<string>(manga ? manga.genreId : "");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewMangaData>({
    resolver: yupResolver(manga ? updateMangaSchema : newMangaSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewManga = (data: NewMangaData) => {
    data.genreId = genreId;
    console.log(data.genreId);

    api
      .post("/mangas", data, headers)
      .then(() => {
        toast.success("Manga registered successfully");
        handleGetMangas();
        handleOpenModal();
        setManga(undefined);
      })
      .catch(() => toast.error("Failed to create the manga"));
  };

  const handleUpdateManga = (data: NewMangaData) => {
    data.genreId = genreId;
    console.log(data.genreId);

    api.patch(`/mangas/${manga?.id}`, data, headers).then(() => {
      toast.success("Manga updated with success");
      handleGetMangas();
      handleOpenModal();
      setManga(undefined);
    });
  };

  return (
    <ModalOverlay>
      <S.ModalContainer
        onSubmit={handleSubmit(manga ? handleUpdateManga : handleNewManga)}
      >
        <h2>{manga ? "Edit Manga" : "Add Manga"}</h2>
        <Input
          defaultValue={manga ? manga.name : ""}
          placeholder="Manga's name"
          {...register("name")}
        />
        <Input
          defaultValue={manga ? manga.description : ""}
          placeholder="Manga's description"
          {...register("description")}
        />
        <Input
          defaultValue={manga ? manga.chapters : ""}
          type="number"
          step="0.01"
          placeholder="Manga's Chapters"
          {...register("chapters")}
        />
        <Input
          defaultValue={manga ? manga.image : ""}
          placeholder="Manga's image URL"
          {...register("image")}
        />
        <S.Select value={genreId} onChange={(e) => setGenreId(e.target.value)}>
          <option>Select a genre</option>
          {genres.map((element) => (
            <option key={element.id} value={element.id}>
              {element.name}
            </option>
          ))}
        </S.Select>
        <ErrorMessage>
          {errors.name?.message ||
            errors.description?.message ||
            errors.chapters?.message ||
            errors.image?.message}
        </ErrorMessage>
        <div>
          <Button
            onClick={() => {
              setManga(undefined);
              handleOpenModal();
            }}
            size="small"
            text="Cancel"
            variant="cancel"
          />
          <Button size="small" text="Send" type="submit" />
        </div>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default MangaModal;
