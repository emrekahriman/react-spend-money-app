import React from 'react'
import products from "../products.json";
import Product from "./Product";
import {Navbar, Container} from "react-bootstrap";

export default function Products({total, money, basket, setBasket}) {

    return (
        <>
            <Container>
                <Navbar sticky={"top"} className="navbar money-bar">
                    <span>${(money - total).toLocaleString("en-US")}</span>
                </Navbar>
                <div className="row">
                    {products.map(product =>
                        <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
                    )}
                </div>
            </Container>

        </>
    )
}
