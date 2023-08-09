import axios from "axios";

const getCategory = axios.create({
    baseURL: "http://localhost:8000/store/formulario/categoria/",})
  
export const getAllCat = () => getCategory.get("/");
export const getCat = (id) => getCategory.get(`/${id}/`);
export const updateCat = (id, data) => getCategory.put(`/${id}/`, data);
export const createCat = (data) => getCategory.post("/", data);
export const deleteCat = (id) => getCategory.delete(`${id}`);
