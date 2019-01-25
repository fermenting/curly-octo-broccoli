import React from "react";

function SearchedBookItem(props) {
   return (
      <div className="card p-4 m-4 d-flex flex-column justify-content-center align-items-center" style={{width: 800}}>
         <h4><strong>Title: </strong>{props.title}</h4>
         <p><strong>Author(s): </strong>{props.author}</p>
         <p><strong>Description: </strong>{props.description}</p>
         <button className="btn btn-primary mb-3" style={{width: 100, height: 50}}>
            <a href={props.url} style={{color: "#ffffff"}}>
               More Info
            </a>
         </button>
         <img src={props.image} alt="book jacket" style={{width: 300, height: 300}}></img>
      </div>
   );
}

export default SearchedBookItem;