import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function EditUser() {
  const param = useParams();
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    let res = await fetch("http://localhost:3000/users/" + param.id);
    res = await res.json();
    if (res.error) {
        alert("User not found");
        nav('/api');
    }
    setName(res.name);
    setAge(res.age);
    setEmail(res.email);
  };
  
  
  const handleEditUserForm = async () => {
    const url = "http://localhost:3000/users/" + param.id;
    let res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name, email, age }),
    });
    res = await res.json();
    if (res) {
      alert("User Updated");
      nav('/api');
    }
  };
  return (
    <>
      <div className="container py-5">
        <h2>Edit User</h2>
        <form className="card" action={handleEditUserForm}>
          <div className="card-header">
            <h4>User Details</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-2">
                  <label htmlFor="name" className="mb-1">
                    Enter Name
                  </label>
                  <input
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-2">
                  <label htmlFor="age" classage="mb-1">
                    Enter age
                  </label>
                  <input
                    value={age}
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                    name="age"
                    id="age"
                    placeholder="Enter Age"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-2">
                  <label htmlFor="email" className="mb-1">
                    Enter email
                  </label>
                  <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    </>
  );
}
