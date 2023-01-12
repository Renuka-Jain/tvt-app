import axios from 'axios'
import Serie from '../models/Serie'

//const API = 'http://api1.tvtracker.tk/api/series/'
const API = 'http://localhost:5432/api/series/'

// const RegisterSerie = async (serie:Serie) => {
//     return await axios.post(`${API}/`,serie)
// }

const getAllSeries = async (pagenum: any) => {
    console.log("consulta");
    // var res = await axios.get(`${API}`, pagenum);
    // return res.series;

    fetch("http://localhost:5432/api/series/", {method : "GET"})
        .then(res => res.json())
        .then(res =>{
            console.log("api res", res);
            return res;
        }).catch((error=>{console.log("error during fetch", error)
    }));

    
}

// const delSerie = async (id: string) => {
//     return await axios.delete(`${API}/${id}`);
// }

// const updateSerie = async (serie:Serie) => {
//     return await axios.put(`${API}/${serie._id}`, serie);
// }

export const getSerie = async (id: string) => {
    return await axios.get(`${API}/${id}`);
}

export { getAllSeries}