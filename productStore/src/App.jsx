import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./pages/productList";
import { CreateForm } from "./pages/createForm";
import { Iva } from "./pages/iva";
import { Cat } from "./pages/category";
import { StoreCart } from "./pages/storeCart";
import {CartProvider} from '../../productStore/src/context/actions'
import { Init } from './pages/init'
import { ClientOrder } from "./pages/clientOrder";
import { TotalPriceProvider } from "./context/totalPriceContext";


function App() {
  return (
    <CartProvider>
      <TotalPriceProvider>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Init />}></Route>
        <Route path="/carta" element={<StoreCart />}></Route>
        <Route path="/categoria" element={<Cat />}></Route>
        <Route path="/categoria/:id" element={<Cat />}></Route>
        <Route path="/iva" element={<Iva />}></Route>
        <Route path="/iva/:id" element={<Iva />}></Route>
        <Route path="/formulario/:id" element={<CreateForm />}></Route>
        <Route path="/formulario" element={<CreateForm />}></Route>
        <Route path="/productos" element={<ProductList />}></Route>
        <Route path="Tu_Pedido" element={<ClientOrder/>}></Route>
       </Routes>
     </BrowserRouter>
     </TotalPriceProvider>
   </CartProvider>
  );
}

export default App;
