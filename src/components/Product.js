import React from 'react'
import {Button, Card, InputGroup, FormControl} from "react-bootstrap";

export default function Product({total, money, product, basket, setBasket}) {

    const basketItem = basket.find(item => item.id === product.id);

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);
        // ürün daha önce eklenmiş
        if (checkBasket) {
            setBasket(basket.map(item => (item.id === product.id ? { ...item, amount: item.amount += 1 } : item)))
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id);
        if (currentBasket.amount === 1) {
            setBasket([...basket.filter(item => item.id !== product.id)])
        } else {
            setBasket(basket.map(item => (item.id === product.id ? { ...item, amount: item.amount -= 1 } : item)))
        }
    }

    return (
        <>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                <Card className={"mb-5 product-card"}>
                    <Card.Img className="my-3 mx-auto" style={{height: "150px", width: "auto", maxWidth: "90%"}} variant="top" src={product.thumbnail}/>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>${product.price.toLocaleString("en-US")}</Card.Text>
                        <InputGroup className="mb-1 w-50" size="sm">
                            <Button disabled={!basketItem} onClick={removeBasket} variant="outline-danger">
                                Sell
                            </Button>
                            <FormControl disabled
                                className="text-center disabled"
                                value={(basketItem && basketItem.amount) || 0}
                                style={{backgroundColor:"#fff", maxWidth:"40px"}}
                            />
                            <Button disabled={total + product.price > money} onClick={addBasket} variant="outline-success">
                                Buy
                            </Button>
                        </InputGroup>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
