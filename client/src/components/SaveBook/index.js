import React from "react";
import Button from "../Button";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

class SaveBook extends React.Component{
 
    postToDB = (book) => {
        var dbBook = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          thumbnail: book.thumbnail,
          link: book.link
        }
    
        axios.post("/api/books", dbBook)
        .then( () => toast.success(`Saved ${book.title} to library`))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Button type="warning" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Save to Library
        </Button>
        </div>
        );
    }
  }

  export default SaveBook;