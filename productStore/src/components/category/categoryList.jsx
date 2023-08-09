import { getAllCat, deleteCat } from "../../apis/category.api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit, CiEraser } from "react-icons/ci";
import style from "../../styles/allListStyles.module.css";

export function CatList() {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function readList() {
            const res = await getAllCat();
            setItems(res.data);
        }
        readList();
    }, []);

    return (
        <div className={style.mainContainer}>
            <div className={style.titleContainer}>
                <h2 className={style.title}>CATEGORIA</h2>
            </div>
            <table>
                <tbody>
                    {items.map((items) => (
                        <tr className={style.row2Columns} key={items.id}>
                            <td>{items.category}</td>
                            <td className={style.tableLastColumn}>
                                <button
                                    className={style.listButton}
                                    onClick={() => {
                                        navigate(`/categoria/${items.id}`);
                                        window.location.reload(false);
                                    }}>
                                    <CiEdit className={style.buttonIcon} />
                                </button>
                                <button
                                    className={style.listButton}
                                    onClick={async () => {
                                        const confirm =
                                            window.confirm("¿Eliminar?");
                                        if (confirm) {
                                            await deleteCat(items.id);
                                        }
                                        window.location.reload(false);
                                    }}>
                                    <CiEraser className={style.buttonIcon} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
