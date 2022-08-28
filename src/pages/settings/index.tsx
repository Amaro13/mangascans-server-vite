import { Dispatch, SetStateAction } from "react";
import Header from "../../components/header";
import * as S from "./style";
import { IoIosSettings } from "react-icons/io";
import Button from "../../components/button";
import { useMangas } from "../../contexts/mangas";
import SettingsMangaCard from "../../components/SettingsMangaCard";
import { useGenres } from "../../contexts/genres";
import { useUsers } from "../../contexts/users";

const Settings = () => {
  const { mangas } = useMangas();
  const { genres } = useGenres();
  const { users } = useUsers();
  return (
    <S.SettingsContainer>
      <Header path="settings" />
      <S.SettingsFlow>
        <S.SettingsNavigationContainer>
          <h2>Settings</h2>
          <S.SettingsNavigationButtonsList>
            <S.SettingsNavigationButtonContainer active>
              <S.SettingsNavigationButtonSelected active>
                <IoIosSettings />
                <h2>Customize Mangas</h2>
                <p>Edit mangas description, genres, chapters</p>
              </S.SettingsNavigationButtonSelected>
            </S.SettingsNavigationButtonContainer>
            <S.SettingsNavigationButtonContainer>
              <S.SettingsNavigationButtonSelected>
                <IoIosSettings />
                <h2>Customize Genres</h2>
                <p>Add and edit genres</p>
              </S.SettingsNavigationButtonSelected>
            </S.SettingsNavigationButtonContainer>
            <S.SettingsNavigationButtonContainer>
              <S.SettingsNavigationButtonSelected>
                <IoIosSettings />
                <h2>Edit users</h2>
                <p>Manage users access to system</p>
              </S.SettingsNavigationButtonSelected>
            </S.SettingsNavigationButtonContainer>
          </S.SettingsNavigationButtonsList>
        </S.SettingsNavigationContainer>
        <S.EntitiesEditContainer>
          <h2>Manage Mangas</h2>
          <S.EntitiesEditCategoriesSelector className="entities-edit-categories-selector">
            <S.EntitiesEditCategoriesButton active>
              Fantasy
            </S.EntitiesEditCategoriesButton>
            <S.EntitiesEditCategoriesButton>
              Action
            </S.EntitiesEditCategoriesButton>
            <S.EntitiesEditCategoriesButton>
              Gore
            </S.EntitiesEditCategoriesButton>
          </S.EntitiesEditCategoriesSelector>
          <S.EntitiesEditList>
            <S.AddEntityCard>
              <h3>+</h3>
              <p>Add Item</p>
            </S.AddEntityCard>
            {mangas.map((element) => (
              <SettingsMangaCard manga={element} key={element.id} />
            ))}
          </S.EntitiesEditList>
          <S.ConfirmationContainer>
            <Button text="Cancel" variant="cancel" />
            <Button text="Save changes" />
          </S.ConfirmationContainer>
        </S.EntitiesEditContainer>
      </S.SettingsFlow>
    </S.SettingsContainer>
  );
};

export default Settings;
