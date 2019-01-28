import React from 'react';
import API from '../utils/API';
import SavedBookItem from '../components/SavedBookItem';

class SavedBooks extends React.Component {
   
   state = {
      books: []
   }

   componentDidMount() {
      API.getBooks()
         .then(res => (
            this.setState({
               books: res.data
            })
         ))
         .catch(err => console.log(err));                  
   }

   deleteBook(bookId) {
      API.deleteBook(bookId)
         .then(res => window.location.reload())
         .catch(err => console.log(err));
   }

   render() {
      return (
         <div>
            
            {this.state.books.map( (book, i) => (
               <SavedBookItem
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  image={book.image}
                  id={book._id}
                  deleteBook={this.deleteBook}
                  key={i}
               />
            ))}
         </div>
      );
   }
}

export default SavedBooks;