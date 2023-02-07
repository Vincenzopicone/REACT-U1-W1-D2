import Card from 'react-bootstrap/Card';
import Fantasy from '../books/fantasy.json';

function CardEpibook() {
  return (
    <section className='row d-flex justify-content-center'>
        <h2 className='text-center'> FANTASY </h2>
        {Fantasy.map((book)=> {
            return (
                <Card className='col-2 m-2 rounded '>
                <Card.Img variant="fluid" src={book.img}/>
                <Card.Body >
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                </Card.Body>
              </Card>
            )
        })}

    </section>
  )}

export default CardEpibook;