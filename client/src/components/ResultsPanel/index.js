import React from 'react';
import SearchedBookItem from '../SearchedBookItem';
import './style.css';

function ResultsPanel(props) {
   return (
      <div id="results-panel">
         {props.books.map( (book, i) => (
            <SearchedBookItem
               title={book.volumeInfo.title}
               author={book.volumeInfo.authors}
               description={book.volumeInfo.description}
               image={book.volumeInfo.imageLinks.thumbnail}
               url={book.volumeInfo.infoLink}
               // I further pass it down to each bookItem component
               saveBook={props.saveBook}
               key={i}
            />
         ))}
         
      </div>
   );
}

export default ResultsPanel;
