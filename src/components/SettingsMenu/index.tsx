import { IoIosSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface SettingsMenuProps {
  path: "users" | "genres" | "mangas";
}

const SettingsMenu = ({ path }: SettingsMenuProps) => {
  const navigate = useNavigate();
  return (
    <S.SettingsContainer>
      {/* <h2>Settings</h2> */}
      <S.SettingsNavigationButtonsList>
        <S.SettingsNavigationButtonContainer
          active={path === "mangas"}
          onClick={() => navigate("/settings/mangas")}
        >
          <S.SettingsNavigationButtonSelected active={path === "mangas"}>
            <IoIosSettings />
            <h2>Manage Mangas</h2>
            <p>Edit Mangas</p>
          </S.SettingsNavigationButtonSelected>
        </S.SettingsNavigationButtonContainer>
        <S.SettingsNavigationButtonContainer
          active={path === "genres"}
          onClick={() => navigate("/settings/genres")}
        >
          <S.SettingsNavigationButtonSelected active={path === "genres"}>
            <IoIosSettings />
            <h2>Manage Genres</h2>
            <p>Add and Edit Genres</p>
          </S.SettingsNavigationButtonSelected>
        </S.SettingsNavigationButtonContainer>
        <S.SettingsNavigationButtonContainer
          active={path === "users"}
          onClick={() => navigate("/settings/users")}
        >
          <S.SettingsNavigationButtonSelected active={path === "users"}>
            <IoIosSettings />
            <h2>Manage Users</h2>
            <p>Manage sistem access</p>
          </S.SettingsNavigationButtonSelected>
        </S.SettingsNavigationButtonContainer>
      </S.SettingsNavigationButtonsList>
    </S.SettingsContainer>
  );
};

export default SettingsMenu;
