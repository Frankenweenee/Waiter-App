import axios from "axios";

const getApi = axios.create({
    baseURL: "http://localhost:8000/store/formulario/lista/",
});

export const getAllProduct = () => getApi.get("/");
export const getProduct = (id) => getApi.get(`/${id}/`);
export const updateProduct = (id, product) => getApi.put(`/${id}/`, product);
export const createProduct = (product) => getApi.post("/", product);
export const deleteProduct = (id) => getApi.delete(`${id}`);

