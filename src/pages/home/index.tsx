import * as S from "./style"; //importing all const exports from style contained within as S
import Header from "../../components/header";

const Home = () => {
  return (
    <S.home>
      <S.HomeContent>
        <Header path="home" />
        <div>
          <S.HomeProductTitle>
            <b>Mangas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>List of mangas here</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
    </S.home>
  );
};

export default Home;
