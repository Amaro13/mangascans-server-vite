import Input from "../../components/Input";
import * as S from "./style";
import Icon from "../../assets/imgs/icons/Icon.webp";
import Button from "../../components/button";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      setLogged(true);
      navigate("/");
      toast.success("Login successfully!");
      return;
    }

    toast.error("Incorrect user/password.");
  };

  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer>
        <S.LoginLogoContainer>
          <h1>MangaScans</h1>
          <img alt="logo" src={Icon} />
        </S.LoginLogoContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button text="Enter" size="large" onClick={handleLogin} />
      </S.LoginFormContainer>
    </S.LoginPageContainer>
  );
};

export default Login;
