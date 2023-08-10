import axios from "axios";

const getIva = axios.create({
    baseURL: "http://localhost:8000/store/formulario/iva/",
});

export const getAllIva = () => getIva.get("/");
export const getSingleIva = (id) => getIva.get(`/${id}/`);
export const updateIva = (id, data) => getIva.put(`/${id}/`, data);
export const createIva = (data) => getIva.post("/", data);
export const deleteIva = (id) => getIva.delete(`${id}`);
