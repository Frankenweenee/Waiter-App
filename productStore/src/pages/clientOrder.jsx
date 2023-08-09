import { useEffect } from "react";
 import{ useCart } from "../hooks/useCart";
import { useTotal } from "../hooks/useTotal";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import style from "../styles/allListStyles.module.css";

export function ClientOrder() {
    const { cart, addToCart, clearCart, deleteItemFromCart } = useCart();
    const { totalPriceState, updateTotalPrice } = useTotal();
    const handleButtonClear = () => {
        clearCart();
    };
    const price = totalPriceState
  return (
    <div
    className={style.modalStyle}>
    <a className={style.listButton} href={'/carta'}>
        <CiCircleRemove className={style.closeButton} />
    </a>
    <div className={style.titleContainer}>
        <h2 className={style.title}>TU PEDIDO</h2>
    </div>
    <table>
        {cart.map((data) => (
            <tbody className={style.menuContainer} key={data.id}>
                <tr className={style.row2Columns}>
                    <td> {data.product}</td>
                    <td className={style.tableLastColumn}>
                        {data.price * data.quantity}€
                    </td>
                </tr>
                <tr>
                    <td className={style.buttonsContainer}>
                        <div className={style.buttonsContainer2}>
                            <button
                                className={style.listButton}
                                onClick={() => {
                                    deleteItemFromCart(data);
                                    updateTotalPrice(cart);
                                }}>
                                <AiFillMinusCircle
                                    className={style.buttonIcon}
                                />
                            </button>
                            <p>{data.quantity}</p>
                        </div>
                        <button
                            className={style.listButton}
                            onClick={() => {
                                addToCart(data);
                                updateTotalPrice(cart);
                            }}>
                            <AiFillPlusCircle
                                className={style.buttonIcon}
                            />
                        </button>
                    </td>
                </tr>
            </tbody>
        ))}
    </table>
    <div className={style.orderButtonContainer}>
        <div className={style.clearAndTotalPriceContainer}>
            <button
                className={style.eraseOrderButton}
                onClick={handleButtonClear}>
                BORRAR PEDIDO
            </button>
            <h3 className={style.total}>Total: {price}</h3>
        </div>
        <button className={style.bigButtons}>PAGAR PEDIDO</button>
    </div>
</div>
  )
}

