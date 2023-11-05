import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/userSlice";
import "bootstrap/dist/css/bootstrap.min.css";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(users);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        dispatch(getUser(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="userTable table-responsive">
        <button type="button" class="btn btn-success">
          + Add
        </button>
        <div className="mb-2"></div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <th scope="row">{user.name}</th>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>
                    <button className="btn btn-success">Edit</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
