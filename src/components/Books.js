import React, { Component } from 'react';
import './Books.css'

const BOOKS_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"

export class Books extends Component {

  render() {

    let bookItems = this.props.booklist.map(function(each,index){
      return <li key={index} className="bodymovie">

      <div className="card">
        <img id="pictures" className="card-img-top" src={`${BOOKS_URL}${each.imageLink}`} alt="Card image cap" />
        <div className="card-body">
          <h3 className="card-text"><a href="#">{each.title}</a></h3>
          <p className="card-text"><a href="#">Author : {each.author}</a></p>
          <p className="card-text"><a href="#">Language : {each.language}</a></p>
          <p className="card-text"><a href="#">Pages : {each.pages}</a></p>
        </div>
      </div>

      </li>
    })

    return (
      <div className="maindiv">
      {bookItems}
      </div>
    )
  }

}
export default Books
