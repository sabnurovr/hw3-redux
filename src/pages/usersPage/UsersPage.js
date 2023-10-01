import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/actions";
import User from "../../components/menu/User";

const UsersPage = () => {
  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(fetchUsersAction());
  };

  const { users } = useSelector((state) => state.usersReducer);

  return (
    <div>
      <button onClick={getUsers}>get users</button>
      {users.map((user) => (
        <User userInfo={user} />
      ))}
    </div>
  );
};

export default UsersPage;
