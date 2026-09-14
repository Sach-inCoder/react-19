import User from "./components/User";
import Child from "./components/Child";
// import Form from './components/Form'
// import Counter from './components/Counter'
// import Setuser from './components/Setuser'
// import Displayuser from './components/Displayuser'

import { useEffect, useRef, useState, useTransition,useActionState } from "react";
import { redirect } from "react-router-dom";
import { useFormStatus } from "react-dom";
export default function App() {
  // const userList = [
  //   {
  //     id:1,
  //     name:'Sachin',
  //     class:'10th',
  //     age:'23'
  //   },
  //   {
  //     id:2,
  //     name:'Sam',
  //     age:'23',
  //     class:'12th',
  //   },
  //   {
  //     id:3,
  //     name:'Peter',
  //     age:'23',
  //     class:'9th',
  //   },
  //   {
  //     id:4,
  //     name:'Bruce',
  //     age:'50',
  //     class:'4th',
  //   }
  // ]

  // const [count,setCount] = useState(1);
  // function handleCount(){
  //   count <10 ? setCount(count + 1) : setCount(1)
  // }
  // const style = {
  //   fontSize:count+"rem",
  //   transition:"0.4s"
  // }

  // function callMe(e) {
  //   alert(e);
  // }

  // const inputRef = useRef(null);
  // function callInputRef() {
  //   inputRef.current.value = "1000";
  //   inputRef.current.focus();
  //   inputRef.current.style.color = "red";
  //   inputRef.current.style.background = "#1209aa";
  // }
  // const handleform = async () => {
  //   await new Promise((res) => setTimeout(res, 2000));
  //   alert("Submited");
  // };
  // const CostomerForm = () => {
  //   const {pending} = useFormStatus();
  //   return (
  //     <>
  //       <div className="card-header">
  //         <h2>Customer Form</h2>
  //       </div>
  //       <div className="card-body">
  //         <div className="row">
  //           <div className="col-md-6 mb-2">
  //             <label htmlFor="name">
  //               <b>Enter name</b>
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               placeholder="Enter name"
  //               id="name"
  //               required
  //             />
  //           </div>
  //           <div className="col-md-6 mb-2">
  //             <label htmlFor="password">
  //               <b>Enter password</b>
  //             </label>
  //             <input
  //               type="password"
  //               className="form-control"
  //               placeholder="Enter password"
  //               id="password"
  //               required
  //             />
  //           </div>
  //           <div className="col">
  //             <button type="submit" className="btn btn-success" disabled={pending}>
  //               {pending?'Submitting':'Submit'}
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };
  // const [pending,startTransition] = useTransition(false);
  // const callTransition=()=>{
  //   startTransition(async()=>{
  //     await new Promise(res => setTimeout(res,1000))
  //   })
  // }
  // const [users,setUsers] = useState([]);
  // const [user,setUser] = useState('');
  // const input = useRef(null);
  // const clearInputs = () =>{
  //   input.current.value = '';
  // }
  // const addUser = ()=>{
  //   setUsers([...users,user]);
  //   clearInputs();
  // }
  // const clearUsers = ()=>{
  //   setUsers([]);
  //   clearInputs();
  // }
  // const total = users.length;
  // const lastUser = users[users.length -1]
  // const unique = [...new Set(users)].length
  // const [user,setUser] = useState('');

  // const [data,setData] = useState({
  //   name:'Sachin',
  //   address:{
  //     city:'Delhi NCR',
  //     state:'New Delhi',
  //   }
  // })
  // const changeName = (val)=>{
  //   data.name = val;
  //   setData({...data});
  // }
  // const changeCity = (val)=>{
  //   data.address.city = val;
  //   setData({...data,address:{...data.address}});
  // }
  // const [data, setData] = useState([
  //   { name: "Sachin", age: 25 },
  //   { name: "Sonu", age: 23 },
  //   { name: "Shivam", age: 24 },
  // ]);
  // const [index,setIndex] = useState(0)
  // const changedata = (val,index) => {
  //   data[index].age = val;
  //   setData([...data]);
  // };
  const handleForm = async(previousData,formData)=>{
    let name = formData.get('name');
    let password = formData.get('password');
    
    await new Promise(res=>setTimeout(res,2100));
    if(name && password){
      return {msg:'Submited',name,password}
    }else{
      return {err:'Not Submited',name,password}
    }
  }
  const [data,action,pending] = useActionState(handleForm,undefined);

  return (
    <>
      <div className="container py-5">
        <form action={action} className="card">
          <div className="card-header">
            <h1>useActionState</h1>
          </div>
          <div className="card-body">
            <input defaultValue={data?.name} type="text" name="name" placeholder="Enter name"  className="form-control mb-2" />
            <input defaultValue={data?.password} type="password" name="password" placeholder="Enter password" className="form-control mb-2" />
            {data?.err && <span className="text-danger">{data?.err}</span>}
            {data?.msg && <span className="text-success">{data?.msg}</span>}
          </div>
          <div className="card-footer">
            <button disabled={pending} className="btn btn-warning">Submit</button>
          </div>
        </form>

      </div>
      {/* <h1>Change Array</h1>
      <select name="user" id="user" className="form-select" onChange={(e)=>setIndex(e.target.value)}>
        {data.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        className="form-control"
        placeholder="update user' age"
        onChange={(e) => changedata(e.target.value,index)}
      />
      {data.map((item, index) => (
        <h2 key={index}>
          Name: {item.name} | Age: {item.age}
        </h2>
      ))} */}
      {/* <h1>Update objects in State</h1>
      <input type="text" className="form-control" placeholder="change city" onChange={(e)=>changeCity(e.target.value)}/>
      <h4>Name: {data.name}</h4>
      <h4>City: {data.address.city}</h4>
      <h4>State: {data.address.state}</h4> */}
      {/* <h1>Listing State</h1>
      <Setuser setUser={setUser}/>
      <Displayuser user={user}/> */}
      {/* <h1>Derived State</h1>
      <h2>Total User: {total}</h2>
      <h2>Last User: {lastUser}</h2>
      <h2>Unique User: {unique}</h2>
      <div className="d-flex">
        <input type="text" ref={input} onChange={(e)=>setUser(e.target.value)} className="form-control d-inline me-2" /> 
        <button onClick={addUser} className="btn btn-success me-2">Add</button>
        <button onClick={clearUsers} className="btn btn-warning">Clear</button>
      </div>
      {
        users.map((element,index) => (
        <h3 key={index}>{element}</h3>
        ))
      } */}
      {/* <h1>useTransition</h1>
      {
        pending?<img src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif' height='60' /> : null
      }
      <button className="btn btn-warning" onClick={callTransition} disabled={pending}>
        Start
      </button> */}
      {/* <h1>useFormStatus</h1>
      <form action={handleform} className="card">
        <CostomerForm/>
      </form> */}
      {/* <h1>Forward useRef</h1> */}
      {/* <input className="form-control mb-1" placeholder="Enter name" type="text" name="name" id="name" ref={inputRef} /> */}
      {/* <input className="form-control mb-1" placeholder="Enter name" type="text" name="name" id="name" ref={props.inputRef} /> */}

      {/* <Child ref={inputRef} /> */}
      {/* <button className="btn btn-success" onClick={callInputRef}>Button</button> */}
      {/* <h1>Parent Component</h1> */}
      {/* <h1>Form Inputs</h1> */}
      {/* <User name="John Doe" /> */}
      {/* <Child callMe={callMe} name='name 2' /> */}
      {/* <Child callMe={callMe} name='name 3' /> */}
      {/* <Child callMe={callMe} name='name 4' /> */}
      {/* <Child callMe={callMe} name='Sachin' /> */}

      {/* <h1>Reuse components</h1>
      <div className="row">
        {userList.map((user)=>(
          <User key={user.id} user={user} />
        ))}
      </div> */}
      {/* <Form /> */}
      {/* <h1 className="main_heading">Module Style CSS</h1> */}
      {/* <Counter style={style} count={count} /> */}
      {/* <button className="btn btn-primary" onClick={handleCount}> */}
      {/* Add */}
      {/* </button> */}
    </>
  );
}

