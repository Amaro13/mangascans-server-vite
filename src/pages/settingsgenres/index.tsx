import { useState } from "react";
import { IoIosSettings, IoIosTrash } from "react-icons/io";
import GenreModal from "../../components/GenreModal";
import DeleteGenreModal from "../../components/DeleteGenreModal";
import Header from "../../components/header";
import SettingsMenu from "../../components/SettingsMenu";
import { Genre } from "../../types/interfaces";
import * as S from "./style";
import { useGenres } from "../../contexts/genres";

const SettingsGenres = () => {
  const { genres } = useGenres();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [genre, setGenre] = useState<Genre | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenUpdateModal = (genre: Genre) => {
    setGenre(genre);
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <S.SettingsContainer>
      <Header path="settings" />
      <SettingsMenu path="genres" />
      <S.EntitiesEditContainer>
        <h2>Manage Genres</h2>
        <S.EntitiesEditList>
          <S.AddEntityCard onClick={handleOpenModal}>
            <h3>+</h3>
            <p>Add Genre</p>
          </S.AddEntityCard>
          {genres.map((element) => {
            return (
              <S.EntityCard key={element.id}>
                <p>{element.name}</p>
                <div>
                  <S.SettingsGenreDeleteButton
                    onClick={() => {
                      setGenre(element);
                      handleOpenDeleteModal();
                    }}
                  >
                    <IoIosSettings /> Remove
                  </S.SettingsGenreDeleteButton>
                  <S.SettingsGenreEditButton
                    onClick={() => handleOpenUpdateModal(element)}
                  >
                    <IoIosTrash /> Edit
                  </S.SettingsGenreEditButton>
                </div>
              </S.EntityCard>
            );
          })}
        </S.EntitiesEditList>
      </S.EntitiesEditContainer>
      {openModal && (
        <GenreModal
          setGenre={setGenre}
          genre={genre}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openDeleteModal && (
        <DeleteGenreModal
          genreId={genre?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
          setGenre={setGenre}
        />
      )}
    </S.SettingsContainer>
  );
};

export default SettingsGenres;
