import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Footer from "../../core/Footer";
import {Link} from "react-router-dom";
import {authenticate, signIn} from "../../auth";

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            name:"",
            error: "",
            redirectToReferer: false,
            loading: false
        }
    }

    handleChange = (name) => (event) =>{
        this.setState({error:""});
        this.setState({[name]: event.target.value})
    };

    componentDidMount() {
        document.title = "MonkeyDock | Signin"
    }


    clickSubmit = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const {email, password, name} = this.state;
        const user = {
            email,
            password,
            username: name,
            "grant_type":"password",
            "audience":"Test API",
            "client_id":"iphone123",
            "client_secret":"1234"
        };

        signIn(user)
            .then(data=>{
                console.log(data);
                if(data.error){
                    this.setState({error: data.error, loading: false})
                }else {
                    authenticate({email, username: name}, ()=>{
                        this.setState({redirectToReferer: true})
                    })
                }
            })
    };

    signInForm = (email, password, name)=>(
        <div className="container-fluid signin">
            <div className="signin__bg"></div>
            <div className="signin__container w-25">
                <div className="row">
                    <div className="col">
                        <Link to={"/home"} className="text-white text-center"
                              style={{textDecoration: "none",
                                  fontSize: "2rem",
                                  display: "inline-block",
                                  transform: 'translateX(40%)'}}>
                            Monkey Dock
                        </Link>
                        <button className="btn btn-primary text-white signin__container__social">Sign in using <span
                            className="font-weight-bold">Facebook</span></button>
                        <button className="btn btn-danger text-white signin__container__social">Sign in using <span
                            className="font-weight-bold">Google</span></button>
                        OR
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">User name</label>
                                <input id={'name'} name={'name'}  className={'form-control'} onChange={this.handleChange('name')} value={name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address
                                    <Link className="" to={'/signup'}
                                          style={{fontSize: 10, display: "inline-block", transform: 'translateX(99%)'}}>Don't
                                        have an account?</Link></label>
                                <input id={'email'} name={'email'} type={'email'} className={'form-control'} onChange={this.handleChange('email')}  aria-describedby="emailHelp" value={email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id={'password'} name={'password'} type={'password'} className={'form-control'} onChange={this.handleChange('password')} value={password}/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label text-muted" htmlFor="exampleCheck1">Save me for
                                    30 days</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.clickSubmit}>Sign In</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );

    render(){
        const {email, password,name, error, redirectToReferer, loading} = this.state;
        if (redirectToReferer){
            return <Redirect to={'/home'}/>
        }
        return (
            <>
                {/*validation*/}
                <div className={"alert alert-danger"} style={{display:error ? "":"none"}}>{error}</div>
                {/*end of validation*/}
                {loading ? <div className={"jumbotron text-center m-0"}><h2>loading....</h2></div> : ""}
                {this.signInForm(email, password, name)}
                <Footer/>
            </>
        )
    }
}

export default SignIn;