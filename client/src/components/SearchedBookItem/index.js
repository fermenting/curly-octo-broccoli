import React from "react";
// import SavedBooks from '../../pages/SavedBooks';
// import SavedBookButton from "../SaveBookButton";
import './style.css';


function SearchedBookItem(props) {
   
   // I was going to use this object to insert the books data into the function on the save button, but I haven't gotten the formatting right.
   const bookInfo = {
      title: props.title,
      author: props.author,
      description: props.description,
      image: props.image
   };

   return (
      <div className="card searched-book-item">
         <div className="row">
            <div className="col">
               <img src={props.image} className="book-image" alt="book jacket"></img>
            </div>
            <div className="col">
               <h4><strong>Title: </strong>{props.title}</h4>
               <p><strong>Author(s): </strong>{props.author}</p>
               <p><strong>Description: </strong>{props.description}</p>
            </div>
         </div>
         <div className="row button-container">         
            <button className="btn btn-primary">
               <a href={props.url} target="_blank" rel="noopener noreferrer">
                  More Info
               </a>
            </button>
            <button className="btn btn-success">
               {/* This is where I was putting the bookInfo object*/}
               <b onClick={() => props.saveBook(bookInfo)}>
                  Save Book
               </b>
            </button>
         </div>
      </div>
   );
}

export default SearchedBookItem;