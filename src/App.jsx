import './App.css'
import { useState } from 'react';

function App() {

  const [cal , setCal] = useState("");
  const [result, setResult] = useState("");

  const operators = ['÷' , 'x' , '+' , '-', '+-', '%' , '.']

  const UpdateCal = value =>{
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


  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {result ? <span>(0)</span> : '' }
          {cal || '0'}
        </div>
        
      <div className='keypad'>
        <div className='left'>
                  <button>AC</button>
                  <button onClick={() => UpdateCal('+-')}>+-</button>
                  <button onClick={() => UpdateCal('%')}>%</button>
                  {Numbers()}
                  <button onClick={() => UpdateCal('.')}>.</button>
        </div>

        <div className='right'> 
                  <button onClick={() => UpdateCal('÷')}>÷</button>
                  <button onClick={() => UpdateCal('x')}>x</button>
                  <button onClick={() => UpdateCal('+')}>+</button>
                  <button onClick={() => UpdateCal('-')}>-</button>
                  <button className='equal'>=</button>
        </div>
        </div>       

      </div>
    </div>
  )
}

export default App
