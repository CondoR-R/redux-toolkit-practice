import { useDispatch, useSelector } from "react-redux";
import { clearSelection } from "./userDetailsSlice";

function SelectedUserDetails() {
  const selectedUserId = useSelector(
    (state) => state.userDetails.selectedUserId
  );
  const users = useSelector((state) => state.userList.users);

  const dispatch = useDispatch();

  const renderContent = () => {
    if (!selectedUserId) {
      return <p>No users selected</p>;
    }

    const selectedUser = users.find((user) => user.id === selectedUserId);

    if (!selectedUser) {
      return <p>User not found</p>;
    }

    return (
      <>
        <h2>Selected User</h2>
        <p>
          <strong>Name: </strong>
          {selectedUser.name}
        </p>
        <p>
          <strong>Email: </strong>
          {selectedUser.email}
        </p>

        <button
          onClick={() => dispatch(clearSelection())}
          className="clear-btn"
        >
          Clear Selection
        </button>
      </>
    );
  };

  return <div className="selected-user-details">{renderContent()}</div>;
}

export default SelectedUserDetails;
