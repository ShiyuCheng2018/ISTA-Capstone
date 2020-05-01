export const signIn = user =>{
    return fetch(process.env.REACT_APP_API_URL+"/login/", {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res=>{
            console.log(res);
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
};

export const signUp = user =>{
    console.log(user);
    return fetch(process.env.REACT_APP_API_URL+'/users/', {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res=>{
            console.log(res);
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
};

export const signOut = () =>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt");
        return {message: "Sign out success!"}
    }
};

export const authenticate = (jwt, next) =>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(jwt));
        next()
    }
};

export const isAuthenticated = ()=>{
    if(typeof window == "undefined"){
        return false
    }

    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }else {
        return false
    }
};
