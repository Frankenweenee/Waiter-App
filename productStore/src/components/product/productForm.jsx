import { useForm } from "react-hook-form";
import { createProduct, updateProduct, getProduct, deleteProduct } from "../../apis/product.api";
import { getAllCat } from "../../apis/category.api";
import { getAllIva } from "../../apis/iva.api";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../../styles/form.module.css"


export function ProductForm() {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  //to call the category 

  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function loadCategory() {
      const res = await getAllCat();
      setCategory(res.data);
    }
    loadCategory();
  }, []);

  //to call Iva

  const [iva, setIva] = useState([]);

  useEffect(() => {
    async function loadIva() {
      const res = await getAllIva();
      setIva(res.data);
    }
    loadIva();
  }, []);

  //to handle the buttons 'crear' - 'editar'

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProduct(params.id, data).then(() => navigate("/carta"));
    } else {
      await createProduct(data).then(() => navigate("/carta"));
    }
  });

  //to charge the data to edit

  useEffect(() => {
    async function loadItem() {
      if (params.id) {
        const res = await getProduct(params.id);
        setValue("product", res.data.product);
        setValue("price", res.data.price);
        setValue("category", res.data.category);
        setValue("iva", res.data.iva);
      }
    }
    loadItem();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={style.titleContainer}>
          {params.id == null ? (
            <h3 className={style.title}>AÑADIR ARTÍCULO</h3>
          ) : (
            <h3 className={style.title}>EDITAR ARTÍCULO</h3>
          )}
        </div>
        <input
          placeholder="Articulo"
          type="text"
          {...register("product", { required: true })}
        />
        <input
          placeholder="Precio"
          type="number"
          {...register("price", { required: true })}
        />
        <select {...register("category", { required: true })}>
          {params.id == null ? (
            <option>Categoria</option>
          ) : (
            <option id="category" />
          )}
          {category.map((item) => (
            <option key={item.id}>{item.category}</option>
          ))}
        </select>
        <select {...register("iva", { required: true })}>
          {params.id == null ? <option>Iva</option> : <option id="iva" />}
          {iva.map((item) => (
            <option key={item.id}>{item.tipo}</option>
          ))}
        </select>
        <div className={style.formButtonContainer}>
          {params.id == null ? (
            <button className={style.formButton}>CREAR</button>
          ) : (
            <button className={style.formButton}>EDITAR</button>
          )}
          <button
className={style.formButton}
onClick={async () => {
  const confirm = window.confirm("¿Eliminar?");
  if (confirm) {
    await deleteProduct(products.id);
  }
  window.location.reload(false);
}}
>
BORRAR
</button>
        </div>
      </form>
    </div>
  );
}


