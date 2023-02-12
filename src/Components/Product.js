import Button from 'react-bootstrap/Button';
import React , {Component} from "react";
import ReactDOM from 'react-dom/client';
import Card from 'react-bootstrap/Card';
import placeholder from '../assets/images/placeholder.jpg';
import products from '../assets/products';
import Products from './Products.css'







export default function Product(props){
  return(
    <Card style={{ width: '18rem' }}>
      <div className='card'>
      <Card.Img variant="top" src={require("../assets/images/"+props.img)} />
      <Card.Body>
        <Card.Title className='title'>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
          {props.price}
        </Card.Text>
      </Card.Body>
      </div>
    </Card>
  )
};
