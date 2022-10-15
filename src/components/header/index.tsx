import * as S from "./style";
import Icon from "../../assets/imgs/icons/Icon.webp";
import { DateTime } from "luxon";
import { FaSearch } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom"; //is a method to navigate to a certain page from the basic url, make sure it's defined in the route.ts
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import { Favorite, Genre, Manga, User } from "../../types/interfaces";
import { useMangas } from "../../contexts/mangas";
import { useGenres } from "../../contexts/genres";
import { api } from "../../services";

interface HeaderProps {
  // path: "home" | "settings" | "favorites";
  setSearchlist: any;
  // setLogged: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setSearchlist }: HeaderProps) => {
  const navigate = useNavigate();
  const { mangas } = useMangas();
  const [name, setName] = useState("");

  const actualDate = DateTime.now().setLocale("en");
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  const { logout } = useAuth();

  const search = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response: Manga[] = mangas.filter((element) =>
      element.name.includes(name)
    );

    setSearchlist(response);
    console.log(response);
  };

  const handlehome = () => {
    navigate("/");
  };

  const handlesettings = () => {
    navigate("/Settings/mangas");
  };

  const handlefavorites = () => {
    navigate("/Favorites");
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
          <S.SearchInputContainer onSubmit={search}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Look for the manga"
            />
            <button type="submit">
              <FaSearch color="#555" />
            </button>
          </S.SearchInputContainer>
        </S.SearchContainer>
      </S.HeaderContainer>
      <S.HeaderNav>
        <S.Pages>
          <S.Box>
            <S.Link onClick={handlehome}>Home</S.Link>
          </S.Box>
          <S.Box>
            <S.Link onClick={handlefavorites}>Favorites</S.Link>
          </S.Box>
          <S.Box>
            <S.Link onClick={handlesettings}>Settings</S.Link>
          </S.Box>
        </S.Pages>
        <S.Logout logout>
          <S.LogoutButton
            onClick={() => {
              logout();
              toast.success("Logout successfully!");
            }}
          >
            <IoIosLogOut color="#ffff" width="5rem" height="5rem" />
          </S.LogoutButton>
        </S.Logout>
      </S.HeaderNav>
    </header>
  );
};

export default Header;
