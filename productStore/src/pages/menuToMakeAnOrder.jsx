import { getAllProduct } from "../apis/product.api";
import { useState, useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { useTotal } from "../hooks/useTotal";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import style from "../styles/allListStyles.module.css";
import { getProducsOrderByCategory } from "../components/product/tableListFunction";
import JSONdata from "../json/data.json";

export function MenuToMakeAnOrder() {
    const { cart, deleteItemFromCart, addToCart } = useCart();

    const { totalPriceState, updateTotalPrice } = useTotal();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const res = await getAllProduct();
            setProduct(res.data);
        }
        getProducts();
    }, []);

    const productsOrderByCategory = getProducsOrderByCategory(JSONdata);

    updateTotalPrice(cart);

    return (
        <div className={style.mainContainerOrderMenu}>
            <div className={style.titleContainer}>
                <h2 className={style.title}>NUESTRA CARTA</h2>
            </div>
            {productsOrderByCategory.map((lista, index) => (
                <table key={index}>
                    <tbody>
                        <tr className={style.row2Columns}>
                            <td className={style.categoryTableTitle}>
                                {lista.category}
                            </td>
                        </tr>
                    </tbody>
                    {lista.product.map((data) => (
                        <tbody key={data.id}>
                            <tr className={style.row2Columns}>
                                <td>{data.product}</td>
                                <td className={style.tableLastColumn}>
                                    {data.price}€
                                </td>
                            </tr>
                            <tr>
                                <td className={style.buttonsContainer}>
                                    {cart.map((item) => {
                                        if (item.id === data.id) {
                                            return (
                                                <div
                                                    className={
                                                        style.buttonsContainer2
                                                    }
                                                    key={item.id}>
                                                    <button
                                                        className={
                                                            style.listButton
                                                        }
                                                        onClick={() => {
                                                            deleteItemFromCart(
                                                                item
                                                            );
                                                        }}>
                                                        <AiFillMinusCircle
                                                            className={
                                                                style.buttonIcon
                                                            }
                                                        />
                                                    </button>
                                                    <p>{item.quantity}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}

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
            ))}
            <div className={style.fixedDiv}>
                <div className={style.orderButtonContainer}>
                    {cart.length === 0 ? (
                        <h4>Carro vacío</h4>
                    ) : (
                        <a className={style.bigButtons} href={"/Tu_Pedido"}>
                            VER PEDIDO -
                            <strong>{`Total:${totalPriceState}€`}-</strong>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
