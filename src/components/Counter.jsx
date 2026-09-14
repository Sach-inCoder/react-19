import { useEffect } from "react";
import counterCss from './counter.module.css';
// import './counter.module.css';

const Counter = ({count,style}) => {
  const handleCounter = () => {
    console.log("Conter called");
  };

  useEffect(()=>{
    handleCounter();
  },[])
  return (
    <>
      <h1 className={counterCss.main_heading}>Counter Module CSS </h1>
      {/* <h1 className="main_heading">Counter Module CSS </h1> */}
      <h1 style={style}>Counter {count}</h1>
    </>
  );
};
export default Counter;
