import './App.css';
import {useEffect, useState} from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Basket from "./components/Basket";
import products from './products.json';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    const [money, setMoney] = useState(99999999999);
    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)

    const resetBasket = () => {
        setBasket([])
    }


    useEffect(() => {
        setTotal(
            basket.reduce((acc, item) => {
                return acc + (item.amount * (products.find(product => product.id === item.id).price));
            }, 0)
        )
    }, [basket])

    return (
        <>
            <Header total={total} money={money}/>
            <Products total={total} money={money} basket={basket} setBasket={setBasket}/>
            {total > 0 && (
                <Basket products={products} basket={basket} resetBasket={resetBasket} total={total}/>
            )}
        </>
    );
}

export default App;