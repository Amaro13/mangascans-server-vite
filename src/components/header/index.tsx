import * as S from "./style";
import Icon from "../../assets/imgs/icons/Icon.webp";
import { DateTime } from "luxon";
import { FaSearch } from "react-icons/fa";

interface HeaderProps {
  path: "home" | "settings" | "mangas" | "favorites" | "users";
}

const actualDate = DateTime.now().setLocale("en");
const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

const Header = ({ path }: HeaderProps) => {
  return (
    <header>
      <S.HeaderContainer>
        <S.TitleContainer>
          <img alt="logo" src={Icon} />
          <h1>MangaScans</h1>
          <p>{formatedDate}</p>
        </S.TitleContainer>
        <S.SearchContainer>
          <S.SearchInputContainer>
            <input placeholder="Search" />
            <button>
              <FaSearch color="#555" />
            </button>
          </S.SearchInputContainer>
        </S.SearchContainer>
      </S.HeaderContainer>
      <S.HeaderNav>
        <S.Menu>
          <S.Box href="/">
            <S.Link>Home</S.Link>
          </S.Box>
          <S.Box href="/mangas">
            <S.Link>New Manga</S.Link>
          </S.Box>
          <S.Box href="/favorites">
            <S.Link>Favorites</S.Link>
          </S.Box>
          <S.Box href="/settings">
            <S.Link>Settings</S.Link>
          </S.Box>
        </S.Menu>
      </S.HeaderNav>
    </header>
  );
};

export default Header;
