import * as S from "./style";
import Icon from "../../assets/imgs/icons/Icon.webp";
import { DateTime } from "luxon";
import { FaSearch } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom"; //is a method to navigate to a certain page from the basic url, make sure it's defined in the route.ts
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  path: "home" | "settings" | "favorites" | "New Manga";
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const actualDate = DateTime.now().setLocale("en");
const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

const Header = ({ path, setLogged }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogged(false);
    navigate("/login");
  };

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
        <S.Pages>
          <S.Box href="/">
            <S.Link>Home</S.Link>
          </S.Box>
          <S.Box href="/favorites">
            <S.Link>Favorites</S.Link>
          </S.Box>
          <S.Box href="/mangas">
            <S.Link>New Manga</S.Link>
          </S.Box>
          <S.Box href="/settings">
            <S.Link>Settings</S.Link>
          </S.Box>
        </S.Pages>
        <S.Logout logout>
          <S.LogoutButton onClick={handleLogout}>
            <IoIosLogOut color="#ffff" width="5rem" height="5rem" />
          </S.LogoutButton>
        </S.Logout>
      </S.HeaderNav>
    </header>
  );
};

export default Header;
