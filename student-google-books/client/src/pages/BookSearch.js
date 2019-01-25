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
         .then(res => (
            this.setState({
               books: res.data.items
            })
         ))
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
         <div>
            <Input
               value={this.state.title}
               onChange={this.handleInputChange}
               name="title"
               placeholder="Enter the title of the book you would like to search."
            />
            <FormBtn
               onClick={this.handleFormSubmit}
            />
            <ResultsPanel books={this.state.books}/>
         </div>
      );
   }
}

export default BookSearch;