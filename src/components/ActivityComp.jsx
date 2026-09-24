import { Activity, useState } from "react";

export default function ActivityComp(){
    const [hide,setHide] = useState(true);
    return (<>
        <div className="container py-5">
            <h1>Activity Update in React 19.2.0</h1>
            <button onClick={()=>setHide(true)} className="btn btn-success me-2">Home</button>
            <button onClick={()=>setHide(false)} className="btn btn-success me-2">Form</button>
            <Activity mode={hide?'visible':'hidden'}>
                <Home/>
            </Activity>
            <Activity mode={!hide?'visible':'hidden'}>
                <Form/>
            </Activity>
        </div>
    </>)
}
function Home() {
    return (
        <>
        <h2>Home</h2>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet earum quasi accusantium repellendus eligendi minima cupiditate natus amet laborum quaerat? Possimus vel necessitatibus aut numquam, quia vitae expedita consectetur iste!
        </p>
        </>
    )
}
function Form() {
    return (
        <>
        <h2>Form</h2>
        <input type="text" className="form-control" placeholder="Enter name"/>
        </>
    )
}