import { getAllProduct } from "../apis/product.api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import style from "../styles/allListStyles.module.css";
import JSONdata from "../json/data.json";
import { getProducsOrderByCategory } from '../components/product/tableListFunction'
export function ProductList() {
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function readList() {
            try {
                const res = await getAllProduct();
                setProduct(res.data);
            } catch (error) {
                console.error("gggrrrr.... this error:", error);
            }
        }
        readList();
    }, []);

    const productsOrderByCategory = getProducsOrderByCategory(JSONdata);
    return (
        <div className={style.mainContainer}>
            <h2 className={style.title}>LISTA DE PRODUCTOS</h2>
            <table>
                <thead>
                    <tr className={style.row4Columns}>
                        <td>
                            <strong>ARTICULO</strong>
                        </td>
                        <td>
                            <strong>Pr.</strong>
                        </td>
                        <td>
                            <strong>IVA</strong>
                        </td>
                        <td>
                            <strong>Ed.</strong>
                        </td>
                    </tr>
                </thead>
                {productsOrderByCategory.map((lista, index) => (
                    <tbody key={index}>
                        <tr className={style.row4Columns}>
                            <td className={style.categoryTableTitle}>
                                {lista.category}
                            </td>
                        </tr>
                        {lista.product.map((products) => (
                            <tr className={style.row4Columns} key={products.id}>
                                <td>{products.product}</td>
                                <td>{products.price}</td>
                                <td>{products.iva}</td>
                                <td className={style.tableLastColumn}>
                                    <button
                                        className={style.listButton}
                                        onClick={() => {
                                            navigate(
                                                `/formulario/${products.id}`
                                            );
                                        }}>
                                        <CiEdit className={style.buttonIcon} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                ))}
            </table>
        </div>
    );
}
