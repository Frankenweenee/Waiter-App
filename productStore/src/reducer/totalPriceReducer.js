export const initialTotalPrice = 0

export const totalPriceOrder = (state, action) => {
    switch (action.type) {
        case "UPDATE_TOTAL_PRICE": {
            const data = action.payload;
            const statePrice = data.map((items) => items.quantity * items.price);
            const total =statePrice.reduce((accumulator, currentPrice) => {
                return accumulator + currentPrice;
            }, 0);
            return total
        }
        default:
            return state;
    }
};
