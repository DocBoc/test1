import React, { useState }  from 'react';
import '../../App.css';
import {Pdfdata} from "./Pdf/Pdfdata";
import "./Pdf/Pdf.css";

export default function Pdf() {
  const [searchTerm, setSearchTerm] = useState("");
  return(
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
      {Pdfdata.filter((val) => {
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
          <div className="Pdfbox">           
            <div  id="user" key={key}>
              
              <iframe className="pdf" src={val.src} title = {val.id} />
              <p >{val.name}</p>
              
            </div>
          </div>
        );
      })}
      </div>
     </div>
     </div>
  )

}