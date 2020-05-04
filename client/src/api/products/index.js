export const fetchProducts = () =>{
    return fetch(process.env.REACT_APP_API_STRAPI+"/products/", {
        method: 'GET',
    })
        .then(res=>{
            console.log(res);
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
};