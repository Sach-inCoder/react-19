import { useState } from 'react';

export default function AddUser() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const handleAddUserForm = async (e) => {
        e.preventDefault();

        try {
            const url = "http://localhost:3000/users";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    age
                })
            });

            // HTTP errors: 400, 404, 500 etc.
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();

            alert('User Added');
            console.log(data);

        } catch (error) {
            // Server offline / network error
            console.error(error);

            alert("Unable to connect to the server. Please try again later.");
        }
    };

    return (
        <>
            <div className="container py-5">
                <h2>Add User</h2>

                <form className="card" onSubmit={handleAddUserForm}>
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
                                    <label htmlFor="age" className="mb-1">
                                        Enter age
                                    </label>

                                    <input
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
                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}