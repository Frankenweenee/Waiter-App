import { useCart } from "../hooks/useCart";
import { useTotal } from "../hooks/useTotal";
import { Header } from "../components/menuOrder/header";

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import style from "../styles/allListStyles.module.css";

export function ClientOrder() {
    const mediaQuery = window.matchMedia("(max-width:768px)");

    function ClientOrderMenu() {
        const { cart, addToCart, clearCart, deleteItemFromCart } = useCart();

        const { totalPriceState, updateTotalPrice } = useTotal();
        const handleButtonClear = () => {
            clearCart();
        };
        updateTotalPrice(cart);

        return (
            <>
                <div className={style.tableContainer}>
                    <Header />
                    <div className={style.closeAndEraseContainer}>
                        <a className={style.listButton} href={"/carta"}>
                            <CiCircleRemove className={style.closeButton} />
                        </a>
                        <button
                            className={style.eraseOrderButton}
                            onClick={handleButtonClear}>
                            Borrar pedido
                        </button>
                    </div>
                    <div className={style.titleContainer}>
                        <h2 className={style.title}>TU PEDIDO</h2>
                    </div>
                    <table>
                        {cart.map((data) => (
                            <tbody
                                className={style.menuContainer}
                                key={data.id}>
                                <tr className={style.row2Columns}>
                                    <td> {data.product}</td>
                                    <td className={style.tableLastColumn}>
                                        {data.price * data.quantity}€
                                    </td>
                                </tr>
                                <tr>
                                    <td className={style.buttonsContainer}>
                                        <div
                                            className={style.buttonsContainer2}>
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
                </div>
                <div className={style.orderButtonContainer}>
                    <div className={style.totalPriceContainer}>
                        <h3 className={style.total}>
                            Total: {totalPriceState}
                        </h3>
                    </div>
                    <button className={style.bigButton}>PAGAR PEDIDO</button>
                </div>
            </>
        );
    }
    return (
        <>
            {mediaQuery.matches ? (
                <ClientOrderMenu />
            ) : (
                <div className={style.canvasFrameContainer}>
                    <ClientOrderMenu />
                </div>
            )}
        </>
    );
}
