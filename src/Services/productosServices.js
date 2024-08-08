import instance from "../config/axios"


export const getProductos = async ()=>{
   const {data} = await instance.get("/sites/MLA/search?q=clothes");
   console.log(data);
   return data.results
};


export const getProductosById = async (id)=>{
    const {data} = await instance.get(`/items/${id}`);
    console.log(data);
    return data;
 };

export const getDescriptionById = async  (id) =>{
    const {data} = await instance.get(`/items/${id}/description`)
console.log(data);
return data;

}




export const create = async (data) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
    };

    // github.com/axios/axios

/*
create(data)  "https://api.mercadolibre.com/sites/MLA/search?q=clothes"*/