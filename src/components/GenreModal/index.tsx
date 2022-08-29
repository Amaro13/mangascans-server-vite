import {
  ErrorMessage,
  ModalOverlay,
  Input,
} from "../../assets/styles/inputform";
import Button from "../button";
import { ModalContainer } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useGenres } from "../../contexts/genres";
import { Genre } from "../../types/interfaces";
import { Dispatch, SetStateAction } from "react";

interface GenreModalProps {
  handleOpenModal: () => void;
  genre?: Genre;
  setGenre: Dispatch<SetStateAction<Genre | undefined>>;
}

interface GenreData {
  name: string;
}

const genreSchema = yup.object().shape({
  name: yup.string().required("Must inform the new genre"),
});

const GenreModal = ({ handleOpenModal, genre, setGenre }: GenreModalProps) => {
  const { handleGetGenres } = useGenres();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenreData>({
    resolver: yupResolver(genreSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewGenre = (data: GenreData) => {
    api
      .post("/genres", data, headers)
      .then(() => {
        toast.success("Genre created with success");
        handleGetGenres();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Error trying to create new genre");
      });
  };

  const handleUpdateGenre = (data: GenreData) => {
    api
      .patch(`/genres/${genre?.id}`, data, headers)
      .then(() => {
        toast.success("Genre edited with success");
        handleGetGenres();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Error trying to edit new genre");
      });
  };

  return (
    <ModalOverlay>
      <ModalContainer
        onSubmit={handleSubmit(genre ? handleUpdateGenre : handleNewGenre)}
      >
        <h2>{genre ? "Edit genre" : "Create new genre"}</h2>
        <Input
          placeholder="Name of the genre"
          {...register("name")}
          defaultValue={genre ? genre.name : ""}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <div>
          <Button
            text="Cancel"
            variant="cancel"
            onClick={() => {
              setGenre(undefined);
              handleOpenModal();
            }}
            size="small"
          />
          <Button text="Send" type="submit" size="small" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default GenreModal;
