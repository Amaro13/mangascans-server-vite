import * as S from "./style";
import Icon from "../../assets/imgs/icons/Icon.webp";
import Button from "../../components/button";
import { toast } from "react-hot-toast"; // used for automatic messages
import { api } from "../../services"; // importing the api instance created with axios
import { useAuth } from "../../contexts/auth"; // the authorization context check
import { useForm } from "react-hook-form"; // used to make forms
import * as yup from "yup"; // used to validate the inputs
import { yupResolver } from "@hookform/resolvers/yup"; // used to unite the useForm and yup
import { Input } from "../../assets/styles/inputform";
import { ErrorMessage } from "../../assets/styles/inputform";

interface LoginData {
  username: string;
  password: string;
}

const loginSchema = yup.object().shape({
  username: yup.string().required("username field is mandatory"),

  password: yup
    .string()
    .min(8, "your password must be at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Your password must be at least 1 special character, one number and on uppercase letter"
    )
    .required("Password field is mandatory."),
});

const Login = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post("/auth", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("User or Login is invalid");
      });
  };

  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <S.LoginLogoContainer>
          <h1>MangaScans</h1>
          <img alt="logo" src={Icon} />
        </S.LoginLogoContainer>
        <Input placeholder="Username" {...register("username")} />
        <Input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <ErrorMessage>
          {errors.username?.message || errors.password?.message}
        </ErrorMessage>
        <Button text="Enter" size="large" type="submit" />
      </S.LoginFormContainer>
    </S.LoginPageContainer>
  );
};

export default Login;
