export  const signIn = user =>{
    return fetch("http://monkeydock-env.eba-vmgjpawb.us-west-2.elasticbeanstalk.com/v0/login/ ", {
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
    return fetch('http://monkeydock-env.eba-vmgjpawb.us-west-2.elasticbeanstalk.com/v0/users/', {
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