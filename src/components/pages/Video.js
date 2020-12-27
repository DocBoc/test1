import '../../App.css';
import React, {  useState } from "react";
import { Videodata } from "./Video/Videodata";
import "./Video/Video.css";
// import {button} from 'bootstrap/dist/css/bootstrap.min.css';

function Video() {
  
  const [searchTerm, setSearchTerm] = useState("");

  return (
    
      <div className="container">
      
      <div className="search">
      <input
        type="text"
        placeholder="Search"
        className="input"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      </div>
     <div className="grid-container">
     <div className="row center">
      {Videodata.filter((val) => {
        let value = "";
        if (searchTerm === "") {
          value = val;
        } else if (
          val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.category.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          value = val;
        }
        return value;
      }).map((val, key) => {
        return (
          <div >           
            <div  id="user" key={key} className="vdobox">         
            <iframe
                className = "vdo"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                title = {val.id} 
                src={val.src}
              />
              <h3>{val.name}</h3>
             <div className="button-div">
             <a href={val.href} ><button className="Button">Open</button></a>
             </div>
            </div>
          </div>
        );
      })}
      </div>
     </div>
    </div>
    
  );
 
}
export default Video;