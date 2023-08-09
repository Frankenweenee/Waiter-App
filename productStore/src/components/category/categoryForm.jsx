import { useForm } from "react-hook-form";
import {getCat, createCat, updateCat} from '../../apis/category.api'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import style from "../../styles/form.module.css";

export function CatForm() {
  //fuciones de librerias
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  //to handle 'crear' y 'editar'

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateCat(params.id, data).then(() => navigate("/categoria"));
      window.location.reload(false);
    } else {
      await createCat(data).then(() => navigate("/categoria"));
      window.location.reload(false);
    }
  });

  //to charge data to edit

  useEffect(() => {
    async function loadCat() {
      if (params.id) {
        const res = await getCat(params.id);
        setValue("categoria", res.data.category);
     
      }
    }
    loadCat();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
      <div className={style.titleContainer}>{params.id == null ? <h5 className={style.title}>AÑADIR CATEGORIA</h5>: <h5 className={style.title}>EDITAR CATEGORIA</h5>}</div>
        <input
          placeholder="Categoria"
          type="text"
          {...register("category", { required: true })}
        />
        <div className={style.formButtonContainer}>
        {params.id == null ? <button className={style.formButton}>CREAR</button> : <button className={style.formButton}>EDITAR</button>}
        </div>
      </form>
    </>
  );
}
