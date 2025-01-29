import Card from 'react-bootstrap/Card';
import './Card.css'

// eslint-disable-next-line react/prop-types
function CardBasic({title, text, img}) {
    return (
        <Card className="card">
            <Card.Img className="card__img" variant="top" src={img}/>
            <Card.Body>
                <Card.Title className="card__title-center">{title}</Card.Title>
                <Card.Text className="card__text-justify">
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardBasic;