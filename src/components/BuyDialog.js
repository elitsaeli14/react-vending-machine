import { useContext, useState } from 'react';

import { formValidationUtils } from '../utils/formValidationUtils';

import { ProductContext } from '../contexts/ProductContext';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRotateRight } from '@fortawesome/free-solid-svg-icons';


const initialFormState = {
    sum: "",
    productCode: "",
};

const initialFormErrorsState = {
    sum: "",
    productCode: ""
}

export const BuyDialog = () => {
    const [formValues, setFormValues] = useState(initialFormState);
    const [formErrors, setFormErrorsValues] = useState(initialFormErrorsState);
    const { products, onDeleteProduct } = useContext(ProductContext);

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onBuy = () => {
        const formValidation = formValidationUtils (products, formValues);

        const {isValidSumOfCoins, errorSumOfCoins} = formValidation.validateSumOfCoins();
        const {isValidProductCode, errorProductCode} = formValidation.validateProductCode();

        setFormErrorsValues(state => ({ ...state, sum: errorSumOfCoins }));
        setFormErrorsValues(state => ({ ...state, productCode: errorProductCode }));

        if (isValidSumOfCoins && isValidProductCode) {
            let chargeValue = formValidation.calculateCharge();
            let chosenProduct = formValidation.getChosenProduct();

            alert(`Congratulations, you bought ${chosenProduct.name} !
            Your charge is ${chargeValue} EUR.`);

            onDeleteProduct(formValues.productCode);
            setFormValues(initialFormState);
        }
    };

    const onReset = (e) => {
        setFormValues(initialFormState);
        setFormErrorsValues(initialFormErrorsState);
    }

    return (
        <div id="buy-content">
            <div className="modal show" id="form-modal">
                <Modal.Dialog>
                    <Modal.Body>
                        <form>
                            <div>
                                <label id="form-label" htmlFor="sum">Enter the sum of coins:</label>
                                &nbsp;
                                <input
                                    type="text"
                                    name="sum"
                                    id="sum"
                                    value={formValues.sum}
                                    onChange={onChangeHandler}
                                />
                                {formErrors.sum && <p id="error-message">{formErrors.sum}</p>}
                                <label id="form-label" htmlFor="productCode">Enter the product code:</label>
                                &nbsp;
                                <input
                                    type="text"
                                    name="productCode"
                                    id="productCode"
                                    value={formValues.productCode}
                                    onChange={onChangeHandler}
                                />
                                {formErrors.productCode && <p id="error-message">{formErrors.productCode}</p>}
                            </div>
                        </form>
                        &nbsp;
                        <Button variant="secondary" onClick={onReset}>
                            <FontAwesomeIcon icon={faRotateRight} />
                            &nbsp;
                            Reset
                        </Button>
                        <Button variant="primary" style={{ float: "right" }} onClick={onBuy}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            &nbsp;
                            Buy
                        </Button>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        </div>
    );
};