function Setuser({setUser}) {
    return(<>
        <input onChange={(e)=>setUser(e.target.value)} className="form-control mb-1" placeholder="Enter name" type="text"/>
        <hr />
    </>)
}
export default Setuser