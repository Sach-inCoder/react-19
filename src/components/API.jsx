import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const API = () => {
  const [offline,setOffline] = useState(false);
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  useEffect(() => {
    setUserLoading(true);
    getUsers("http://localhost:3000/users");
  }, []);

  async function getUsers(url) {
    try {
      let res = await fetch(url);
      res = await res.json();
      setUsers(res);
      setUserLoading(false);
    } catch (error) {
      setOffline(true);
    }
  }
  const deleteUser = async (id) => {
    let c = confirm("Do you want to delete this user?");
    if (!c) {
      return;
    }
    const url = "http://localhost:3000/users/" + id;
    let res = await fetch(url, {
      method: "DELETE",
    });
    res = await res.json();
    if (res) {
      alert("DELETED");
      getUsers("http://localhost:3000/users");
    }
  };
  return (
    <>
      <div className="container py-5">
        <h2>API in React Js</h2>
      {offline ? <h4>Server is offline</h4> :
        <>
        <NavLink className="btn btn-success me-2" to="/add-user">
          Add user
        </NavLink>
        <NavLink className="btn btn-success me-2" to="/add-skill">
          Add Skill
        </NavLink>
        <table className="table table-bordered my-2">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {!userLoading ? (
              users.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <NavLink
                      to={"/user/" + item.id}
                      className="btn btn-warning me-2"
                    >
                      EDIT
                    </NavLink>
                    <button
                      onClick={(e) => deleteUser(item.id)}
                      className="btn btn-danger"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </>
      }
      </div>
    </>
  );
};
export default API;
