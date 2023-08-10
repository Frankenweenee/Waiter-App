import { useForm } from "react-hook-form";
import { getSingleIva, createIva, updateIva } from "../../apis/iva.api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import style from "../../styles/form.module.css";

export function IvaForm() {
    const { register, handleSubmit, setValue } = useForm();

    const navigate = useNavigate();

    const params = useParams();

    //to handle 'crear' - 'editar'
    const onSubmit = handleSubmit(async (data) => {
        if (params.id)
            try {
                await updateIva(params.id, data).then(() =>
                    navigate("/panel_de_control/iva")
                );
                window.location.reload(false);
            } catch (error) {
                console.error("gggrrrr.... this error:", error);
            }
        else {
            try {
                await createIva(data).then(() =>
                    navigate("/panel_de_control/iva")
                );
                window.location.reload(false);
            } catch (error) {
                console.error("gggrrrr.... this error:", error);
            }
        }
    });
    //to charge the data on the inputs

    useEffect(() => {
        async function loadIva() {
            if (params.id) {
                const res = await getSingleIva(params.id);
                setValue("tipo", res.data.tipo);
                setValue("porcentual", res.data.porcentual);
            }
        }
        loadIva();
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <div className={style.titleContainer}>
                {params.id == null ? (
                    <h5 className={style.title}>AÑADIR IVA</h5>
                ) : (
                    <h5>EDITAR IVA</h5>
                )}
            </div>
            <input
                placeholder="Tipo"
                type="text"
                {...register("tipo", { required: true })}
            />
            <input
                placeholder="Porcentual"
                type="number"
                {...register("percent", { required: true })}
            />
            <div className={style.formButtonContainer}>
                {params.id == null ? (
                    <button className={style.formButton}>CREAR</button>
                ) : (
                    <button className={style.formButton}>EDITAR</button>
                )}
            </div>
        </form>
    );
}
