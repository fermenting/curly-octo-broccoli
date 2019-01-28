import React from 'react';
import API from '../utils/API';
import { Input, FormBtn } from '../components/SearchForm';
import ResultsPanel from '../components/ResultsPanel'

class BookSearch extends React.Component {
   
   state = {
      title: "",
      books: []
   }

   searchGoogleBooks(query) {
      API.searchBooks(query)
         .then(res => {
            this.setState({
               books: res.data.items
            })
         })
         .catch(err => console.log(err));
   }

   // This is the function I started, but it's not working yet
   saveBook(bookInfo) {
      API.saveBook(bookInfo)
         .then(res => {
            console.log("Book saved! Response: ", res);
         })
         .catch(err => console.log(err));
   }

   handleInputChange = event => {
      const { name, value } = event.target;

      this.setState({
         [name]: value
      })
   }

   handleFormSubmit = event => {
      event.preventDefault();
      this.searchGoogleBooks(this.state.title);
   }
   
   render() {
      return (
         <div className="container">
            <div>
               <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Enter the title of the book you would like to search"
               />
               <FormBtn
                  onClick={this.handleFormSubmit}
               />
            </div>
            {/* I pass the saveBook function to this component */}
            <ResultsPanel books={this.state.books} saveBook={this.saveBook}/>
         </div>
      );
   }
}

export default BookSearch;