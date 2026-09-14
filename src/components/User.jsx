function User({user}) {
  
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-hader"><h2>{user.name}</h2></div>
        <div className="card-body">Age: <b>{user.age}</b> Class: <b>{user.class}</b></div>
      </div>
    </div>
  );
}
export default User;
