export const inicialStateCart = JSON.parse(window.localStorage.getItem("cart")) || [];

export const TYPE = {
    ADD_TO_CART: "ADD_TO_CART",
    CLEAR_CART: "CLEAR_CART",
    DELETE_ITEM_FROM_CART: "DELETE_ITEM_FROM_CART",
    UPDATE_TOTAL_PRICE: "UPDATE_TOTAL_PRICE"
};

export const updateLocalStorage = (state) => {
    window.localStorage.setItem("cart", JSON.stringify(state));
};


export const shopReducer = (state, action) => {
    switch (action.type) {
        case TYPE.ADD_TO_CART: {
            const { id } = action.payload;
            const newProductIndex = state.findIndex((item) => item.id === id);
            if (newProductIndex >= 0) {
                const newState = [...state];
                newState[newProductIndex].quantity += 1;
                updateLocalStorage(newState);
                return newState;
            } else {
                const newState = [...state, { ...action.payload, quantity: 1 }];
                updateLocalStorage(newState);
                return newState;
            }
        }

        case TYPE.CLEAR_CART: {
            updateLocalStorage([]);
            return [];
        }

        case TYPE.DELETE_ITEM_FROM_CART: {
            const { id, quantity } = action.payload;
            const newProductIndex = state.findIndex((item) => item.id === id);
            if (newProductIndex >= 0) {
                if (quantity > 1) {
                    const newState = [...state];
                    newState[newProductIndex].quantity -= 1;
                    updateLocalStorage(newState);
                    return newState;
                } else {
                    const newState = state.filter((item) => item.id !== id);
                    updateLocalStorage(newState);
                    return newState;
                }
            }
        }

        default:
            return state;
    }
};

