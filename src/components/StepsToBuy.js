export const StepsToBuy = () => {
    return (
        <div id="steps-to-buy">
            <h3>
                How to buy a product:
            </h3>

            <ol className="ol-items">
                <li>
                    Look through the product list and find the product you need to buy.
                </li>
                <li>
                    Check product price and code.
                </li>
                <li>
                    Insert coins* as you enter the sum of coins followed by "EUR".
                </li>
                <li>
                    Enter the product code.
                </li>
                <li>
                    Press "Buy" button.
                </li>
                <li>
                    Take your product and change.
                </li>
            </ol>
            <h6>
                You can reset process without any purchase if you press "Reset" button.
            </h6>
            <p>*Acceptable denomination coins: 0.20 EUR ; 0.50 EUR ; 1 EUR ; 2 EUR </p>
        </div>
    );
};