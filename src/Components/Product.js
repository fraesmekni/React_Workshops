import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeholder from '../assets/images/placeholder.jpg';

function Aard(props) {
  return (
    <>
    {props.name}
    {props.price}
    {props.like}
    {props.quantity}
    {props.img}
    {props.description}
    </>
    );
}
function Cardd(props){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={placeholder} />
      <Card.Body>
        <Card.Title>Lenovo</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit alias pariatur unde! Quia aliquid tempora blanditiis saepe facere tempore itaque dolorum eum! Doloremque, nulla recusandae. Ducimus itaque harum possimus corporis.
          </Card.Text>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
