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
               image={book.volumeInfo.imageLinks.smallThumbnail}
               url={book.volumeInfo.infoLink}
               key={i}
            />
         ))}
      </div>
   );
}

export default ResultsPanel;