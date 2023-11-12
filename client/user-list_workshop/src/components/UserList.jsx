import ListHeader from "./ListHeader";
import UserListTable from "./UserListTable";

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
        <button className="btn-add btn" onClick={showModalHanleer}>
          Add new user
        </button>
      </section>
    </main>
  );
};
export default UserList;
