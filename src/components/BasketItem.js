import React from 'react';
import {Badge, ListGroup} from "react-bootstrap";

function BasketItem({item, product}) {
    return (
        <div>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div>{product.title}</div>
                </div>
                <Badge bg="success" pill style={{fontSize:"13px"}}>
                    {item.amount}
                </Badge>
            </ListGroup.Item>
        </div>
    );
}

export default BasketItem;