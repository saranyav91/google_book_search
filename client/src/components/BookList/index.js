import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


export function BookList({children}) {
  return (
    <ol className="list-group">{children}</ol>
    );
}

  export class BookListItem extends React.Component{

    render(){
     
;    return (
      <li>
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
            <a
                target="_blank"
                href={this.props.link}
                
              >
            Book details</a>
              <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
              <p>
                {this.props.synopsis}
              </p>
              
                
             
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }