import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "./userListSlice";
import { selectUser } from "../userDetails/userDetailsSlice";

function UserList() {
  const users = useSelector((state) => state.userList.users);
  const loading = useSelector((state) => state.userList.loading);
  const error = useSelector((state) => state.userList.error);

  const dispatch = useDispatch();

  const handleSelectUser = (userId) => () => {
    dispatch(selectUser(userId));
  };

  const handleDeleteUser = (userId) => () => {
    dispatch(deleteUser(userId));
  };

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return (
        <p>
          {error.status}: {error.message}
        </p>
      );
    }

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.email}
            </span>

            <div className="btn-group">
              <button
                onClick={handleSelectUser(user.id)}
                className="select-btn"
              >
                Select
              </button>

              <button
                onClick={handleDeleteUser(user.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="user-list">
      <h2>User List</h2>

      {/* Кнопка загрузки */}
      <button onClick={() => dispatch(fetchUsers())} className="load-btn">
        Load Users
      </button>

      {renderContent()}
    </div>
  );
}

export default UserList;
