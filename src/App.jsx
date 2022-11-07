import './App.css'

function App() {

  const Numbers = () =>{
    const numbs = [];
    for(let i = 9; i >= 0; i--)
    {
      numbs.push(
        <button key={i}>{i}</button>
      )
    }
    return numbs;
  }


  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          <span>0</span>
        </div>
        
      <div className='keypad'>
        <div className='left'>
                  <button>AC</button>
                  <button>+-</button>
                  <button>%</button>
                  {Numbers()}
                  <button>.</button>
        </div>

        <div className='right'> 
                  <button>÷</button>
                  <button>x</button>
                  <button>+</button>
                  <button>-</button>
                  <button className='equal'>=</button>
        </div>
        </div>       

      </div>
    </div>
  )
}

export default App
