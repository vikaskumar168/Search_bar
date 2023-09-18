import data from "./sampledata.json";
import './style.css';

import React, {useState} from "react";

function App() {
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <>
    <div className='container'>
      <div className='search_container'>
        <input id='searchinput' type="text" placeholder='Search here... ' onChange={(e)=>{
          setSearchTerm(e.target.value);
        }}></input>
      </div>
      <h1 id='header'>List of items</h1>
      <div className='template_container'>
       { 
        data.data 
       
        .filter((val) => {
          if(searchTerm === ""){
            return val;
          }
          else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val;
          }
          return null;
        })
        .map((val) => (
          <div className="card" >
            <div className='template' key={val.id}>
             <img src={val.thumbnail}alt={val.title}/>
              <h3 className="title">{val.title}</h3>
              <p className="desc">{val.description}</p>
              <h2 className="brand">{val.brand}</h2>
              <p className='price'>{val.price}</p>
              </div>
          </div>
        ))
       }
      </div>
    </div>
    </>
  );
}

export default App;
