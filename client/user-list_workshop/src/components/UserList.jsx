import { useState } from "react";
import CreateUserModa from "./CreateUserModal";
import ListHeader from "./ListHeader";
import UserListTable from "./UserListTable";

const UserList = () => {
  const [showCreate, setShowCreate] = useState(false);

  const showModalHandler = () => {
    setShowCreate(true);
  };

  const closeModalHandler = () => {
    setShowCreate(false);
  };

  return (
    <main className="main">
      <section className="card users-container">
        <ListHeader />

        <div className="table-wrapper">
          {showCreate && <CreateUserModa closeModal={closeModalHandler} />}
          <UserListTable />
        </div>
        <button className="btn-add btn" onClick={showModalHandler}>
          Add new user
        </button>
      </section>
    </main>
  );
};
export default UserList;
