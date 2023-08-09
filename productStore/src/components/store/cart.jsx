import Modal from "react-modal";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import style from "../../styles/allListStyles.module.css";

// Modal.setAppElement("#root");

export function ShopCart() {
    const { cart, addToCart, clearCart, deleteItemFromCart } = useCart();
    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = () => {
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
    };

    const handleButtonClear = () => {
        clearCart();
        cerrarModal();
    };

    const statePrice = cart.map((item) => item.price * item.quantity);
    const totalPrice = statePrice.reduce((accumulator, currentPrice) => {
        return accumulator + currentPrice;
    }, 0);

    return (
        <>
            <div className={style.fixedDiv}>
                <div className={style.orderButtonContainer}>
                    {cart.length === 0 ? (
                        <h4>Carro vacío</h4>
                    ) : (
                        <button
                            className={style.bigButtons}
                            onClick={abrirModal}>
                            VER PEDIDO -
                            <strong>{`Total:${totalPrice}€`}-</strong>
                        </button>
                    )}
                </div>
            </div>
            <Modal
                className={style.modalStyle}
                appElement={document.getElementById("root")}
                isOpen={modalAbierto}>
                <button className={style.listButton} onClick={cerrarModal}>
                    <CiCircleRemove className={style.closeButton} />
                </button>
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
                        <h3 className={style.total}>Total: {totalPrice}</h3>
                    </div>
                    <button className={style.bigButtons}>PAGAR PEDIDO</button>
                </div>
            </Modal>
        </>
    );
}
