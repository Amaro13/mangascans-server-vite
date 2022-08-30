import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/inputform";
import { useUsers } from "../../contexts/users";
import { api } from "../../services";
import { User } from "../../types/interfaces";
import Button from "../button";
import { DeleteModalContainer } from "./style";

interface DeleteUserModalProps {
  userId?: string;
  handleOpenDeleteModal: () => void;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const DeleteUserModal = ({
  userId,
  handleOpenDeleteModal,
  setUser,
}: DeleteUserModalProps) => {
  const { handleGetUsers } = useUsers();

  const handleDeleteUser = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/users/${userId}`, headers).then(() => {
      toast.success("User deleted successfully!");
      handleGetUsers();
      setUser(undefined);
      handleOpenDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Delete User</h2>
        <div>
          <Button
            onClick={() => {
              setUser(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancel"
            variant="cancel"
          />
          <Button text="Delete" onClick={handleDeleteUser} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteUserModal;
