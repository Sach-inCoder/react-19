import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="container py-5 text-center">
        <h1>404 | Not Found</h1>
        <Link to="/home">Go Home Page</Link> <br/>
        <img src="/404.svg" alt="404" style={{width:"100%",maxWidth:"500px"}} />
      </div>
    </>
  );
};
export default NotFound;
