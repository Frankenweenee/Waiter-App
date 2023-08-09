import { useReducer, createContext } from "react";
import { totalPriceOrder, initialTotalPrice } from "../reducer/totalPriceReducer";

export const TotalPriceContext = createContext();

export function useTotalProvider() {
    const [state, dispatch] = useReducer(totalPriceOrder, initialTotalPrice);
    const updateTotalPrice = (data) => {
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: data });
    };


    return { state, updateTotalPrice };
}

export function TotalPriceProvider({ children }) {
    const { state, updateTotalPrice } = useTotalProvider();

    return (
        <TotalPriceContext.Provider
            value={{
                totalPriceState: state,
                updateTotalPrice: updateTotalPrice
            }}
        >
            {children}
        </TotalPriceContext.Provider>
    );
}
