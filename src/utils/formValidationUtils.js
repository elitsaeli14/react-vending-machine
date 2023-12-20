const sumRegExp = /^\d+(.\d{1,2})?(\s*)(EUR)$/i;

export const formValidationUtils = (products, formValues) => {
    let sumMatch = formValues.sum.match(/^\d+(.\d{1,2})?/);

    const getChosenProduct = () => {
        const productCodeValue = Number(formValues.productCode);
        return products[productCodeValue - 1];
    }

    const chosenProduct = getChosenProduct(products, formValues);

    const validateSumOfCoins = () => {
        let errorSumOfCoins = "";
        let isValidSumOfCoins = true;

        if (formValues.sum.length === 0) {
            errorSumOfCoins = "Invalid data, sum of coins can not be empty";
            isValidSumOfCoins = false;
        } else if (!sumRegExp.test(formValues.sum)) {
            errorSumOfCoins = "Invalid data, incorrect format, look at step 3.";
            isValidSumOfCoins = false;
        } else if (chosenProduct && parseFloat(sumMatch) < chosenProduct.price) {
            errorSumOfCoins = "Sum of coins isn't enough to buy this product";
            isValidSumOfCoins = false;
        }

        return { isValidSumOfCoins, errorSumOfCoins };
    }

    const validateProductCode = () => {
        let errorProductCode = "";
        let isValidProductCode = true;

        if (formValues.productCode.length === 0) {
            errorProductCode = "Invalid data, product code can not be empty";
            isValidProductCode = false;
        } else if (!chosenProduct) {
            errorProductCode = "Invalid product code";
            isValidProductCode = false;
        }

        return { isValidProductCode, errorProductCode};
    }

    const calculateCharge = () => {
        return (parseFloat(sumMatch) - chosenProduct.price).toFixed(2);
    }

    return {
        validateSumOfCoins,
        validateProductCode,
        calculateCharge,
        getChosenProduct
    }
}