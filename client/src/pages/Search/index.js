import React, { Component } from "react";
import axios from "axios";
import SaveBook from "../../components/SaveBook";
import { Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";
import EmptyList from "../../components/EmptyList";


class Search extends Component {
  state = {
    searchRes: [],
    query: "",
    books: []
  };

  displayRes = data => {
    this.setState({ books: data.items });
  };

  searchBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.query
    }`;
    axios
      .get(url)
      .then(res => {
        //console.log(res);
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    
  };


  

  render() {
    return (
      <Row>
        <Col size="md-12">
        <div>
          <input id="bookQ" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInput} />
          <button  type="submit" onClick={this.searchBooks} >
            search book
          </button>
                   

          {(this.state.books && this.state.books.length > 0) ? 
          <BookList>
          {this.state.books.map(book => {
            return (
              <div>
              <BookListItem
              key={book.id} 
              authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
              title={book.volumeInfo.title}
              synopsis={book.volumeInfo.description ? 
                book.volumeInfo.description : "No Description Available"}
              link={book.volumeInfo.infoLink}
              thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                book.volumeInfo.imageLinks.thumbnail : "#"}
              />

              <SaveBook
              authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
              title={book.volumeInfo.title}
              synopsis={book.volumeInfo.description ? 
                book.volumeInfo.description : "No Description Available"}
              link={book.volumeInfo.infoLink}
              thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                book.volumeInfo.imageLinks.thumbnail : "#"}
              
              />
              </div>
            )
          })}
          </BookList>
          : 
          <EmptyList/>         
          }
          
        </div>
        </Col>
      </Row>
    );
  }
}

export default Search;