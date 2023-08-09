import { useContext } from "react";
import { TotalPriceContext } from "../context/totalPriceContext";

export const useTotal = () => {
    const context = useContext(TotalPriceContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
};
