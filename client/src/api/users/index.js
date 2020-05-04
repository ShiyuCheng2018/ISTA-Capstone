export const fetchUser = (token, user_id) =>{
    return fetch(process.env.REACT_APP_API_STRAPI+`/users/${user_id}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            'Content-Type': ';application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(res=>{
            console.log(res);
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
};