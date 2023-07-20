import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from 'react';
function App() {
  const [data,setData]=useState(0);
  function getQuote(){

    fetch("https://api.quotable.io/random").then(
      response =>response.json().then(
       (quote)=>{
        setData(quote);
       }
      )
    )
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='Title' >Welcome to the peaceful world of quotations</h1>
       <h3 className='Quote'>Quote: {data.content}</h3>
       <h3 className='author'>Author: {data.author}</h3>
       
       
       <button className='Generator' onClick={getQuote}> Get Quote</button>
        
        
      </header>
    </div>
  );
}

export default App;
