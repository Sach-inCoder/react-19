import { useState } from 'react';
function Form() {
    const [nameValue, setNameValue] = useState('');
    const [genderValue, setgenderValue] = useState('');
    const [cityValue, setcityValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [skillsValue, setSkillsValue] = useState([]);
    function clearVals() {
        setNameValue('');
        setEmailValue('');
        setPasswordValue('');
        setSkillsValue('');
    }
    function checkedSkills(e){
        if(e.target.checked){
            setSkillsValue([...skillsValue, e.target.value]);
        }else{
            setSkillsValue(skillsValue.filter((skill) => skill !== e.target.value));
        }
    }
    return(
        <>
            <div>
                <input className="form-control mb-1" type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} placeholder="Enter your name" />
                <input className="form-control mb-1" type="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} placeholder="Enter your email" />
                <input className="form-control mb-1" type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} placeholder="Enter your password" /> <br />
                <input className="mb-1" type="checkbox" name="skills" value="PHP" onChange={checkedSkills} /> <b>PHP</b> <br />
                <input className="mb-1" type="checkbox" name="skills" value="JS" onChange={checkedSkills} /> <b>JS</b> <br />
                <input className="mb-1" type="checkbox" name="skills" value="React" onChange={checkedSkills} /> <b>React</b> <br />
                <input className="mb-1" type="checkbox" name="skills" value="Laravel" onChange={checkedSkills} /> <b>Laravel</b> <br />
                <hr />

                <input className="mb-1" type="radio" name="gender" value='MALE' onChange={(e)=> setgenderValue(e.target.value)} id="male" />MALE
                <input className="mb-1" type="radio" name="gender" value='FEMALE' onChange={(e)=> setgenderValue(e.target.value)} id="female" />FEMALE <br/>

                <select className="form-select" name="city" id="city" onChange={(e)=> setcityValue(e.target.value)}> 
                    <option value="delhi">DELHI</option>
                    <option value="MUMBAI">MUMBAI</option>
                </select>
                <br/>
                <button onClick={clearVals}>Clear</button>

                <h3>NAME: {nameValue}</h3>
                <h3>EMAIL: {emailValue}</h3>
                <h3>PASSWORD: {passwordValue}</h3>
                <h3>SKILLS: {skillsValue.join(', ')}</h3>
                <h3>GENDER: {genderValue}</h3>
                <h3>CITY: {cityValue}</h3>

            </div>
        </>
    )
}
export default Form;