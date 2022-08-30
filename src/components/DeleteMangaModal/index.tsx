import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/inputform";
import { useMangas } from "../../contexts/mangas";
import { api } from "../../services";
import { Manga } from "../../types/interfaces";
import Button from "../button";
import { DeleteModalContainer } from "./style";

interface DeleteMangaModalProps {
  mangaId?: string;
  handleOpenDeleteModal: () => void;
  setManga: Dispatch<SetStateAction<Manga | undefined>>;
}

const DeleteMangaModal = ({
  mangaId,
  handleOpenDeleteModal,
  setManga,
}: DeleteMangaModalProps) => {
  const { handleGetMangas } = useMangas();

  const handleDeleteManga = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/mangas/${mangaId}`, headers).then(() => {
      toast.success("Manga deleted successfully!");
      handleGetMangas();
      setManga(undefined);
      handleOpenDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Delete Manga</h2>
        <div>
          <Button
            onClick={() => {
              setManga(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancel"
            variant="cancel"
          />
          <Button text="Delete" onClick={handleDeleteManga} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteMangaModal;
