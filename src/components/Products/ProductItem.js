import Card from 'react-bootstrap/Card';

export const ProductItem = ({
    productCode,
    name,
    price,
    amount,
    imageLink
}) => {

    return (
        <>
            <Card className="list-item">
                <Card.Img variant="top" src={imageLink} />
                <Card.Body id="list-item-body">
                    <Card.Title id="list-item-title">{name}</Card.Title>
                    <Card.Text id="list-item-text">Price: {price.toFixed(2)} EUR</Card.Text>
                    <Card.Text id="list-item-text">Amount: {amount}</Card.Text>
                    <Card.Text id="list-item-text-product-code" >Product code: {productCode}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};