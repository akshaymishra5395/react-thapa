import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App2 = ()=>{
  return (
    <>
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    </>
  );
};

function NetflixSeries(){
  const name="Thedrma";
  const rating=8.2;
  const summary="dakdhakjdahkjd akjhdakjdakjdh ajkdb akjdbakjdakjdbadajdg ahjdbajdadabdnabdjabda"
  
  const retGenre=()=>{
    const genre="romCom"
    return genre;
  }
  return (<div>
    <img src='test.jpg' alt='test.jpg' width="40%" height="50%"></img>
    <h1>Name:{name} </h1>
    <h2>Rating: {rating} </h2>
    <p>
      Summary:{summary}
    </p>
    <p>
      Genre:{retGenre()}
    </p>
  </div>);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p onClick={() => setCount((count) => count - 1)}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// export default App;
export default App2;

