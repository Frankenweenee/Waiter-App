// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import { ProductList } from "./pages/productList";
import { CreateForm } from "./pages/createForm";
import { Iva } from "./pages/iva";
import { Cat } from "./pages/category";
import { ClientOrder } from "./pages/clientOrder";
import { MenuToMakeAnOrder } from "./pages/menuToMakeAnOrder";
//providers
import {CartProvider} from '../../productStore/src/context/actions'
import {TotalPriceProvider} from '../../productStore/src/context/totalPriceContext'



function App() {
  return (
    <CartProvider>
      <TotalPriceProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/carta" element={<MenuToMakeAnOrder />}></Route>
        <Route path="Tu_Pedido" element={<ClientOrder/>}></Route>
        <Route path="/categoria" element={<Cat />}></Route>
        <Route path="/categoria/:id" element={<Cat />}></Route>
        <Route path="/iva" element={<Iva />}></Route>
        <Route path="/iva/:id" element={<Iva />}></Route>
        <Route path="/formulario/:id" element={<CreateForm />}></Route>
        <Route path="/formulario" element={<CreateForm />}></Route>
        <Route path="/productos" element={<ProductList />}></Route>
       </Routes>
     </BrowserRouter>
     </TotalPriceProvider>
   </CartProvider>
  );
}

export default App;
