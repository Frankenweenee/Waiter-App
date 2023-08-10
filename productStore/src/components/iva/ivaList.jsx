import { getAllIva, deleteIva } from "../../apis/iva.api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { CiEraser } from "react-icons/ci";
import style from "../../styles/allListStyles.module.css";

export function IvaList() {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function readList() {
            const res = await getAllIva();
            setItems(res.data);
        }
        readList();
    }, []);

    return (
        <>
            <div className={style.titleContainer}>
                <h2 className={style.title}>IVA</h2>
            </div>
            <table>
              <tbody>
                <tr className={style.row3Columns}>
                    <td>
                        <strong>TIPO</strong>
                    </td>
                    <td>
                        <strong>PORCENTUAL</strong>
                    </td>
                </tr>
                {items.map((items) => (
                    <tr className={style.row3Columns} key={items.id}>
                        <td>{items.tipo}</td>
                        <td>{`${items.percent}%`}</td>
                        <td  className={style.tableLastColumn}>
                            <button
                                className={style.listButton}
                                onClick={() => {
                                    navigate(`/panel_de_control/iva/${items.id}`);
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
                                        await deleteIva(items.id);
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
        </>
    );
}
