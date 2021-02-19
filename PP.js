import React, { useState } from "react";

function PP(props) {
  const [count, setCount] = useState(props.counter);
  const handleIncrement = () => {
    if(count<10){
    setCount(prevCount => prevCount + 1);
    document.getElementById('coun').style.background='green';
    }
    else{
        alert("Value Can't be greater than 10")
      }
  };

  const handleDecrement = () => {
      if(count>0){
        setCount(prevCount => prevCount - 1);
        document.getElementById('coun').style.background='red';
      }
      else{
        alert("Value Can't be Negative")
      }
    
  };
  return (
    <div>
      <div className="counter-style">
        <button  className='change' id="coun">{count}</button>
<br/>
        <button className='btn' onClick={handleDecrement}>Decrement</button>
        <button className='btn' onClick={handleIncrement}>Increment</button>
      </div>
      <button className='btn' onClick={() => {
          document.getElementById('coun').style.background='hotpink';
          setCount(0)}}>Reset</button>
    </div>
  );
}

export default PP;