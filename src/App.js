import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './components/Books'

const BOOKS_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"


class App extends Component {

  constructor(props) {
   super(props)
   this.state = {
   books : []

    }
  }

   componentDidMount() {

    fetch(BOOKS_URL).then((data) => {
    return data.json()
    }).then((json) => {
    console.log(json)
     this.setState({
     books : json
    })

  })

 }

  render() {
    return (

     <div className="maincontainer">
     <h2 className="title">Book Barn</h2>
     <Books booklist = {this.state.books}/>
     </div>

    );
  }
}

export default App;
