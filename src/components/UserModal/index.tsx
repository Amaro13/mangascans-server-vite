import {
  ErrorMessage,
  ModalOverlay,
  Input,
} from "../../assets/styles/inputform";
import * as S from "./style";
import Button from "../button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import { useGenres } from "../../contexts/genres";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useUsers } from "../../contexts/users";
import { User, Genre } from "../../types/interfaces";

interface UserModalProsp {
  handleOpenModal: () => void;
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

interface NewUserData {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  image?: string;
}

const newUserSchema = yup.object().shape({
  username: yup.string().required("Username is mandatory"),

  email: yup.string().required("User e-mail description is mandatory"),

  password: yup.string().required("User password is mandatory"),

  confirmPassword: yup.string().required("User password must be confirmed"),

  image: yup
    .string()
    .url("Invalid URL format")
    .required("User image is mandatory"),
});

const updateUserSchema = yup.object().shape({
  username: yup.string(),

  email: yup.string(),

  password: yup.string(),

  confirmPassword: yup.string(),

  image: yup.string().url("Invalid URL format"),
});

const UserModal = ({ handleOpenModal, user, setUser }: UserModalProsp) => {
  const { handleGetUsers } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserData>({
    resolver: yupResolver(user ? updateUserSchema : newUserSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewUser = (data: NewUserData) => {
    api
      .post("/users", data, headers)
      .then(() => {
        toast.success("User registered successfully");
        handleGetUsers();
        handleOpenModal();
        setUser(undefined);
      })
      .catch(() => toast.error("Registration Failed"));
  };

  const handleUpdateUser = (data: NewUserData) => {
    api.patch(`/users/${user?.id}`, data, headers).then(() => {
      toast.success("User updated with success");
      handleGetUsers();
      handleOpenModal();
      setUser(undefined);
    });
  };

  return (
    <ModalOverlay>
      <S.ModalContainer
        onSubmit={
          user ? handleSubmit(handleUpdateUser) : handleSubmit(handleNewUser)
        }
      >
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <Input
          defaultValue={user ? user.username : ""}
          placeholder="User's username"
          {...register("username")}
        />
        <Input
          defaultValue={user ? user.email : ""}
          placeholder="User's email"
          {...register("email")}
        />
        <Input
          defaultValue={user ? user.password : ""}
          placeholder="User's password"
          {...register("password")}
        />
        <Input
          defaultValue={user ? user.password : ""}
          placeholder="User's password"
          {...register("confirmPassword")}
        />
        <Input
          defaultValue={user ? user.image : ""}
          placeholder="User's image URL"
          {...register("image")}
        />
        <ErrorMessage>
          {errors.username?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.image?.message}
        </ErrorMessage>
        <div>
          <Button
            onClick={() => {
              setUser(undefined);
              handleOpenModal();
            }}
            size="small"
            text="Cancel"
            variant="cancel"
          />
          <Button size="small" text="Send" type="submit" />
        </div>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default UserModal;
