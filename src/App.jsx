// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Cards from './components/Cards';
import "./css/home.css";

const App = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // Toggle card expansion
  };

  return(
    <div>
        <div className='header-container'>
          <header className='header'>
            <h1 className='heading'>Anubhav Singh</h1>
          </header>
          <Navbar />
        </div>
          
      <main>
        <div className='introduction-container'>
          <Introduction />
        </div>

        <Cards onCardClick={handleCardClick} expandedCard={expandedCard} />
      </main>
      <footer className='footer'>
        <p>© 2023 Anubhav Singh. All rights reserved.</p>
      </footer>
    </div>
  )

{/* 
  return (
    <div>
      <header>
        <h1 className="heading">Anubhav Singh</h1>
      </header>

      <Navbar />

      <main>
        <Introduction />
        <Cards onCardClick={handleCardClick} expandedCard={expandedCard} />
      </main>
    </div>
  ); */}
};

export default App;
