import { useState } from "react";
import { IoIosSettings, IoIosTrash } from "react-icons/io";
import UserModal from "../../components/UserModal";
import DeleteUserModal from "../../components/DeleteUserModal";
import Header from "../../components/header";
import SettingsMenu from "../../components/SettingsMenu";
import { Manga, User } from "../../types/interfaces";
import * as S from "./style";
import { useUsers } from "../../contexts/users";

const SettingsUsers = () => {
  const { users } = useUsers();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [Searchlist, setSearchlist] = useState<Manga[]>([]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenUpdateModal = (user: User) => {
    setUser(user);
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <S.SettingsContainer>
      <Header setSearchlist={setSearchlist} />
      <S.joining>
        <SettingsMenu path="users" />
        <S.EntitiesEditContainer>
          <h2>Manage Users</h2>
          <S.EntitiesEditList>
            <S.AddEntityCard onClick={handleOpenModal}>
              <h3>+</h3>
              <p>Add User</p>
            </S.AddEntityCard>
            {users.map((element) => {
              return (
                <S.EntityCard key={element.id}>
                  <p>{element.username}</p>
                  {/* <img>{element.image}</img> */}
                  <div>
                    <S.SettingsUserDeleteButton
                      onClick={() => {
                        setUser(element);
                        handleOpenDeleteModal();
                      }}
                    >
                      <IoIosTrash /> Remove
                    </S.SettingsUserDeleteButton>
                    <S.SettingsUserEditButton
                      onClick={() => handleOpenUpdateModal(element)}
                    >
                      <IoIosSettings /> Edit
                    </S.SettingsUserEditButton>
                  </div>
                </S.EntityCard>
              );
            })}
          </S.EntitiesEditList>
        </S.EntitiesEditContainer>
        {openModal && (
          <UserModal
            setUser={setUser}
            user={user}
            handleOpenModal={handleOpenModal}
          />
        )}
        {openDeleteModal && (
          <DeleteUserModal
            userId={user?.id}
            handleOpenDeleteModal={handleOpenDeleteModal}
            setUser={setUser}
          />
        )}
      </S.joining>
    </S.SettingsContainer>
  );
};

export default SettingsUsers;
