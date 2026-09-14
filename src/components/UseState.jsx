const UseState = () => {
    
    return(
        <>
            <h3>useState</h3>
            <p>The most common and simple example of <span className="badge text-bg-secondary">useState</span> is a <b>counter</b> that tracks how many times a user clicks a button.</p>
            <p><span className="badge text-bg-secondary">useState</span> allows you to add state variables to functional React components. When the state variable changes, React automatically re-renders the component to show the updated value on the screen.</p>
            <h4>The Counter Example</h4>
            <h5>jsx</h5>
            <div className="">
                <pre className="bg-dark p-3 rounded-4 border-start border-warning border-5">
                    <code className="text-white">
                        {`import React, { useState } from 'react';

function Counter() {
  // 1. Declare a state variable named "count", initialized to 0
  // "setCount" is the function we use to update this state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* 2. Display the current value of the state */}
      <h2>You clicked {count} times</h2>
      
      {/* 3. Update the state when the button is clicked */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`}
                    </code> 
                </pre>
            </div>
            <h4>How does it work</h4>
            <ol>
                <li>
                    <span className="badge text-bg-secondary">const [count, setCount] = useState(0);</span>
                    <ul>
                        <li>
                            <span className="badge text-bg-secondary">useState</span> : The current value of your state (starts at 0).
                        </li>
                        <li>
                            <span className="badge text-bg-secondary">setCount</span> : A special function used to change the value of count.
                        </li>
                        <li>
                            <span className="badge text-bg-secondary">useState(0)</span> : Initializes the state with a starting value of 0. You can change this to any value (like a string, boolean, array, or object).
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="badge text-bg-secondary">setCount(count + 1);</span>
                    <ul>
                        <li>
                            When the button is clicked, this function tells React: "Hey, update count to the current value plus one, and redraw this component on the screen."
                        </li>
                    </ul>
                </li>
            </ol>
        </>
    )
}
export default UseState