import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/inputform";
import { useGenres } from "../../contexts/genres";
import { api } from "../../services";
import { Genre } from "../../types/interfaces";
import { DeleteModalContainer } from "./style";
import Button from "../button";

interface DeleteGenreModalProps {
  genreId?: string;
  handleOpenDeleteModal: () => void;
  setGenre: Dispatch<SetStateAction<Genre | undefined>>;
}

const DeleteGenreModal = ({
  genreId,
  handleOpenDeleteModal,
  setGenre,
}: DeleteGenreModalProps) => {
  const { handleGetGenres } = useGenres();

  const handleDeleteGenre = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/genre/${genreId}`, headers).then(() => {
      toast.success("Genre deleted with success!");
      handleGetGenres();
      setGenre(undefined);
      handleOpenDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Delete Genre</h2>
        <div>
          <Button
            onClick={() => {
              setGenre(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancel"
            variant="cancel"
          />
          <Button text="Delete" onClick={handleDeleteGenre} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteGenreModal;
