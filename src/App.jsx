import './App.css'
import { useState } from 'react';

function App() {

  const [cal , setCal] = useState("");
  const [result, setResult] = useState("");

  const operators = ['/' , '*' , '+' , '-', '%' , '.']

  
  const UpdateCal = value =>{
    if(
      operators.includes(value) && cal === ""   ||  // check last value is operators and cal has nothing
      operators.includes(value) && operators.includes(cal.slice(-1)  // check more than one operator use in sequence
      ) 
    ) 
    return;
    setCal(cal+value )
  }



  const Numbers = () =>{
    const numbs = [];
    for(let i = 9; i >= 0; i--)
    {
      numbs.push(
        <button onClick={() => UpdateCal(i.toString())} 
        key={i}>{i}
         </button>
      )
    }
    return numbs;
  }



  const Equalto = () =>{
    setCal(eval(cal).toString());
  }


  const Allclear = () =>{
    if(cal == ''){
      return;
    }
    else{
      const value = "";
      setCal(value)
    }
  }


  const Clear = () =>{
    if(cal == ''){
      return;
    }
    else{
      const value = cal.slice(0, -1);
      setCal(value)
    }

  }



  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {result ? <span>(0)</span> : '' }
          {cal || '0'}
        </div>
        
      <div className='keypad'>
        <div className='left'>
                  <button onClick={Allclear}>AC</button>
                  <button onClick={Clear}>C</button>
                  <button onClick={() => UpdateCal('%')}>%</button>
                  {Numbers()}
                  <button onClick={() => UpdateCal('.')}>.</button>
        </div>

        <div className='right'> 
                  <button onClick={() => UpdateCal('/')}>÷</button>
                  <button onClick={() => UpdateCal('*')}>x</button>
                  <button onClick={() => UpdateCal('+')}>+</button>
                  <button onClick={() => UpdateCal('-')}>-</button>
                  <button onClick={Equalto} className='equal'>=</button>
        </div>
        </div>       

      </div>
    </div>
  )
}

export default App
