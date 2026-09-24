import { useEffect, useOptimistic, useState } from 'react';

export default function AddSkill() {
    const [name, setName] = useState('');
    const [skills,setSkills] = useState([]);
    const [opSkills,setOpSkills] = useOptimistic(skills);
    useEffect(()=>{
        getSkills();
    },[]);

    const getSkills = async ()=>{
        try {
            let res = await fetch('http://localhost:3000/skills');
            res = await res.json();
            setSkills(res);
        } catch (error) {
            console.log(error);
        }
    }  
    function sleep(ms){
        return new Promise(res => setTimeout(res,ms))
    }
    const handleAddSkillForm = async (e) => {
        // e.preventDefault();

        setOpSkills(prev=>[...prev,{name}]);
        try {
            const url = "http://localhost:3000/skills";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name
                })
            });

            // HTTP errors: 400, 404, 500 etc.
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            await sleep(2000);
            const data = await response.json();
            // alert('Skill Added');
            console.log(data);
            if (data) {
                getSkills();
            }

        } catch (error) {
            // Server offline / network error
            console.error(error);

            alert("Unable to connect to the server. Please try again later.");
        }
    };

    return (
        <>
            <div className="container py-5">
                <h2>Add Skill</h2>

                <form className="card" action={handleAddSkillForm}>
                    <div className="card-header">
                        <h4>Skill Details</h4>
                    </div>

                    <div className="card-body">
                        <div className="row">

                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <label htmlFor="name" className="mb-1">
                                        Enter Skill
                                    </label>

                                    <input
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        name="name"
                                        id="name"
                                        placeholder="Enter Skill name"
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

                <hr />
                <h2>All Skills</h2>
                <ul className="list-group">
                    {opSkills.map((item,index)=>(
                        <li key={index} className="list-group-item">{item.name}</li>
                    ))}
                </ul>
            </div>

        </>
    );
}