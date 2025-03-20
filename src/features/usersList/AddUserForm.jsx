import { useDispatch } from "react-redux";
import { addUser } from "./userListSlice";
import { useState } from "react";

function AddUserForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email, id: Date.now() }));
    setName("");
    setEmail("");
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={handleChangeName}
        type="text"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={handleChangeEmail}
        type="email"
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
