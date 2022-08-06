import * as S from "./style";
import Icon from "../../assets/imgs/icons/Icon.webp";
import Search from "../../assets/imgs/icons/search.svg";
import HomeIcon from "../../assets/imgs/icons/home.svg";
import SettingsIcon from "../../assets/imgs/icons/settings.svg";
import LogoutIcon from "../../assets/imgs/icons/logout.svg";

interface HeaderProps {
  path: "home" | "settings" | "mangas" | "favorites" | "users";
}

const Header = ({ path }: HeaderProps) => {
  return (
    <header>
      <S.HeaderContainer>
        <img alt="logo" src={Icon} />
        <S.SearchDiv>
          <S.formu>
            <S.Searchbox
              type="text"
              placeholder="Search"
              autoComplete="false"
            ></S.Searchbox>
            {/* <button type="submit" id="submit">
              <img alt="search" src={Search}></img>
            </button> */}
          </S.formu>
        </S.SearchDiv>
      </S.HeaderContainer>
      <S.HeaderNav>
        <S.Menu>
          <S.Link href="/">
            <span>Home</span>
          </S.Link>
          <S.Link href="/mangas">
            <span>New Manga</span>
          </S.Link>
          <S.Link href="/favorites">
            <span>Favorites</span>
          </S.Link>
        </S.Menu>
      </S.HeaderNav>
    </header>
  );
};

export default Header;
