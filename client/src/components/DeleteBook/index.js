import React from "react";
import Button from "../Button";


function DeleteBook(props) {
    return (
      <Button type="warning" className="delete-btn" {...props} role="button" tabIndex="0">
        Remove from Library
      </Button>
    );
  }



  export default DeleteBook;