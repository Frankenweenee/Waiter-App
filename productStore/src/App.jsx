// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import { ClientOrder } from "./pages/clientOrder";
import { MenuToMakeAnOrder } from "./pages/menuToMakeAnOrder";
import { ControlPanel } from "./pages/controlPanel";
//providers
import { CartProvider } from "../../productStore/src/context/actions";
import { TotalPriceProvider } from "../../productStore/src/context/totalPriceContext";
import { RoomDraw } from "./components/roomDraw/roomDraw";
import { ElementsProvider } from "./components/roomDraw/modalSizePieces/contextInit";

function App() {
    return (
        <CartProvider>
            <TotalPriceProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/panel_de_contol/formulario/:id"
                            element={<ControlPanel />}></Route>
                        <Route path="/*" element={<ControlPanel />}></Route>
                        <Route
                            path="/carta"
                            element={<MenuToMakeAnOrder />}></Route>
                        <Route
                            path="/tu_pedido"
                            element={<ClientOrder />}></Route>
                        <Route path="/salon" element={<RoomDraw />}></Route>
                    </Routes>
                </BrowserRouter>
            </TotalPriceProvider>
        </CartProvider>
    );
}

export default App;
