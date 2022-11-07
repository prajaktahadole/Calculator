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
        <div className='display'></div>
        
        <div >
                  <button>AC</button>
                  <button>+/-</button>
                  <button>%</button>
                  {Numbers()}
                  <button>.</button>
        </div>

        <div>
                  <button>/</button>
                  <button>*</button>
                  <button>+</button>
                  <button>-</button>
                  <button>=</button>
        </div>
                

      </div>
    </div>
  )
}

export default App
