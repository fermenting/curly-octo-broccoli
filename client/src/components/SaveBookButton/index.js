import React from 'react';

import myAPI from "../../utils/API";

class SavedBookButton extends React.Component {
  state = {
    savedBooks: []
  }

  componentDidMount() {
    this.saveBooksHandler();
  }

  saveBooksHandler() {
    myAPI.getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  }

  deleteBookHandler = (event, id) => {
    myAPI.deleteBook(id)
      .then(res => this.saveBooksHandler())
      .catch(err => console.log(err));
  }

  render() {
    return (

      <div>
        <button onClick={this.saveBooksHandler} className="btn btn-success mb-3" style={{ width: 100, height: 50 }}>
          Save Book
          </button>
      </div>

    )
  }
}

export default SavedBookButton;