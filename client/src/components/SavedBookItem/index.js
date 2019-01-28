import React from "react";
import './style.css';

function SavedBookItem(props) {
   return (
      <div className="card searched-book-item">
         <div className="row">
            <div className="col">
               <img src={props.image} className="book-image" alt="book jacket"></img>
            </div>
            <div className="col">
               <h4><strong>Title: </strong>{props.title}</h4>
               <p><strong>Author(s): </strong>{formatAuthors(props.author)}</p>
               <p><strong>Description: </strong>{props.description}</p>
            </div>
         </div>
         <div className="row button-container">
            <button className="btn btn-primary">
               <a href={props.url} target="_blank" rel="noopener noreferrer">
                  More Info
               </a>
            </button>
            <button className="btn btn-danger" onClick={() => props.deleteBook(props.id)}>Delete</button>
         </div>
      </div>
   );
}
export default SavedBookItem;

function formatAuthors(array) {
   if (array.length === 1) {
      return array[0];
   } else {
      let authors = "";
      array.forEach(function (author) {
         authors += author + ", "
      })
      return authors.substring(0, authors.length - 2);
   }
}