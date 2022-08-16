import Input from "../../components/Input";
import * as S from "./style";
import Icon from "../../assets/imgs/icons/Icon.webp";
import Button from "../../components/button";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../contexts/auth";

// interface LoginProps {
//   setLogged: Dispatch<SetStateAction<boolean>>;
// }

// const Login = ({ setLogged }: LoginProps) => {
//   const navigate = useNavigate();
const Login = () => {
  const { login } = useAuth();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      const data = {
        username,
        password,
      };
      return axios
        .post("http://localhost:3333/auth/login", data)
        .then((res) => {
          // localStorage.setItem("token", res.data.token);
          // localStorage.setItem("user", JSON.stringify(res.data.user));
          // setLogged(true);
          // navigate("/");
          // toast.success("Login successfully!");
          login({ token: res.data.token, user: res.data.user });
        })
        .catch(() => {
          toast.error("Invalid username or password!");
        });
    }

    toast.error("Fill the fields to login!");
  };

  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer>
        <S.LoginLogoContainer>
          <h1>MangaScans</h1>
          <img alt="logo" src={Icon} />
        </S.LoginLogoContainer>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
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
