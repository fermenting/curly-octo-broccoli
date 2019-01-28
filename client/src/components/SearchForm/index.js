import React from 'react';
import './style.css';

export function Input(props) {
   return (
      <div className="form-group book-search">
         <input className="form-control" {...props} />
      </div>
   );
}

export function FormBtn(props) {
   return (
      <button {...props} className="btn btn-info search-button">
         Search
      </button>
   );
}