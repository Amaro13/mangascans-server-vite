import { useState } from "react";
import Header from "../../components/header";
import * as S from "./style";
import Button from "../../components/button";
import { useMangas } from "../../contexts/mangas";
import SettingsMangaCard from "../../components/SettingsMangaCard";
import { useGenres } from "../../contexts/genres";
import { Genre, Manga } from "../../types/interfaces";
import MangaModal from "../../components/MangaModal";
import DeleteMangaModal from "../../components/DeleteMangaModal";
import SettingsMenu from "../../components/SettingsMenu";

const SettingsMangas = () => {
  const { mangas } = useMangas();
  const { genres } = useGenres();

  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

  let filteredMangas: Manga[] =
    mangas.filter(
      (element) => selectedGenre && element.genreId === selectedGenre.id
    ) || mangas;

  if (selectedGenre.id == null) {
    filteredMangas = mangas;
  }

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [manga, setManga] = useState<Manga | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <S.SettingsContainer>
      <Header path="settings" />
      <S.joining>
        <SettingsMenu path="mangas" />
        <S.EntitiesEditContainer>
          <h2>Manage Mangas</h2>
          <S.EntitiesEditCategoriesSelector className="entities-edit-categories-selector">
            {genres.map((element) => {
              return (
                <S.EntitiesEditCategoriesButton
                  active={element.name === selectedGenre.name}
                  onClick={() => setSelectedGenre(element)}
                >
                  {element.name}
                </S.EntitiesEditCategoriesButton>
              );
            })}
          </S.EntitiesEditCategoriesSelector>
          <S.EntitiesEditList>
            <S.AddEntityCard onClick={handleOpenModal}>
              <h3>+</h3>
              <p>Add Item</p>
            </S.AddEntityCard>
            {filteredMangas.map((element) => (
              <SettingsMangaCard
                handleOpenModal={handleOpenModal}
                handleOpenDeleteModal={handleOpenDeleteModal}
                setManga={setManga}
                manga={element}
                key={element.id}
              />
            ))}
          </S.EntitiesEditList>
        </S.EntitiesEditContainer>
        {openModal && (
          <MangaModal
            setManga={setManga}
            manga={manga}
            handleOpenModal={handleOpenModal}
          />
        )}
        {openDeleteModal && (
          <DeleteMangaModal
            setManga={setManga}
            mangaId={manga?.id}
            handleOpenDeleteModal={handleOpenDeleteModal}
          />
        )}
      </S.joining>
    </S.SettingsContainer>
  );
};

export default SettingsMangas;
