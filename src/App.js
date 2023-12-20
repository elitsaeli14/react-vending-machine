import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { ProductContext } from "./contexts/ProductContext";
import { ProductList } from "./components/Products/ProductList";
import { StepsToBuy } from "./components/StepsToBuy";
import { BuyDialog } from "./components/BuyDialog";

function App() {
    const [products, setProducts] = useState([]);

    const getData = () => {
        fetch("http://localhost:3000/products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        getData();
    }, [])

    const onDeleteProduct = (id) => {
        setProducts(state => state.map(x =>
            (x.productCode === Number(id) && x.amount > 0) ? ({...x , amount: (--x.amount) }) : x ));
    }

    return (
        <div id="main">
            <h1 className="header">
                Vending machine
            </h1>
                <StepsToBuy />

                <ProductContext.Provider value={{products, onDeleteProduct}}>
                    <ProductList />
                    <BuyDialog />
                </ProductContext.Provider>
        </div >
    );
}

export default App;
