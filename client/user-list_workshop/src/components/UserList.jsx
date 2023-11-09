import UserListTable from "../UserListTable";
import ListHeader from "./ListHeader";

const UserList = () => {
  return (
    <main className="main">
      {/* <!-- Section component  --> */}
      <section className="card users-container">
        {/* <!-- Search bar component --> */}

        <ListHeader />

        {/* <!-- Table component --> */}
        <div className="table-wrapper">
          <UserListTable />
        </div>
        <button className="btn-add btn">Add new user</button>
      </section>
    </main>
  );
};
export default UserList;
