import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

function UsersContainerHooks({ userData, fetchUsers }) {
  const u = useSelector((state) => state.user.users);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };

export default UsersContainerHooks;
