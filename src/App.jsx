import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function addStep() {
    setStep(step + 1);
  }
  function decreaseStep() {
    setStep(step - 1);
  }

  function addCount() {
    setCount(count + step);
  }

  function decreaseCount() {
    setCount(count - step);
  }

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + count); // Automatically handles month and day overflow
  
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return (
    <div className="bg-slate-600 h-screen w-full flex flex-col justify-center items-center ">
    <div className="flex flex-col justify-center items-center h-1/2 w-1/2 max-sm:w-[90%] max-sm:h-[40%] bg-slate-300 rounded-3xl shadow-black shadow-2xl  ">
      <Step
        title="Step:"
        initialValue={step}
        increase={addStep}
        decrease={decreaseStep}
      />
      {/* count */}
      <Step
        title="Count:"
        initialValue={count}
        increase={addCount}
        decrease={decreaseCount}
      />
      {/* date */}
      <h2 className="text-3xl font-bold mt-10 text-center px-10">
  {count} day(s) from today is:    
  <span className="text-blue-600 font-semibold">
    {dayOfWeek[futureDate.getDay()]} {monthOfYear[futureDate.getMonth()]} {futureDate.getDate()}, {futureDate.getFullYear()}
  </span>
</h2>

    </div>
    </div>
  );
}

export default App;

export function Step({ title, initialValue, increase, decrease }) {
  return (
    <div className="flex items-center space-x-4">
      <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700">
        -
      </button>
      <h1 className="text-6xl font-bold text-center ">
        {title} {initialValue}
      </h1>
      <button onClick={increase} className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700">
        +
      </button>
    </div>
  );
}
