import React from 'react';
import BasketItem from "./BasketItem";
import {Button, ListGroup} from "react-bootstrap";

function Basket({basket, resetBasket, products, total}) {
    return (
        <div style={{backgroundColor: "#fff"}} className={"basket container px-3 py-4 text-center"}>
            <h3 className={"fw-bold"}>Cart Detail</h3>
            <ListGroup className={" w-75 mb-3 mx-auto"} as="ol" numbered>
                {basket.map(item => (
                    <BasketItem key={item.id} product={products.find(p => p.id === item.id)} item={item}/>
                ))}
            </ListGroup>
            <div className={"total-price fw-bold text-success fs-5"}>
                Total: ${total.toLocaleString('en-US')}
            </div>
            <Button className={"btn-danger mt-2"} onClick={resetBasket}>Clear Cart</Button>
        </div>
    );
}

export default Basket;