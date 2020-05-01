import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Footer from "../../core/Footer";
import {Link} from "react-router-dom";
import {signUp} from "../../auth";

class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            name:'',
            password: "",
            error: "",
            open: false
        }
    }

    handleChange = (name) => (event) =>{
        this.setState({error:""});
        this.setState({[name]: event.target.value})
    };



    clickSubmit = (event) => {
        event.preventDefault();
        const {name, email, password} = this.state;
        const user = {
            name,
            email,
            password,
            connection: "Username-Password-Authentication",
            user_type:"personal_user",
            client_id: 0,
            method:"create"
        };

        signUp(user)
            .then(data=>{
                if(data.error){
                    this.setState({error: data.error})
                }else {
                    this.setState({
                        error: "",
                        name:"",
                        email:"",
                        password:"",
                        open: true
                    })
                }
            })
    };

    signUpForm = (email, password, name)=>(
        <div className="container-fluid signin">
            <div className="signin__bg"></div>
            <div className="signin__container w-25">
                <div className="row">
                    <div className="col">
                        <Link to={"/"} className="text-white text-center"
                           style={{textDecoration: "none",
                               fontSize: "2rem",
                               display: "inline-block",
                               transform: 'translateX(40%)'}}>
                            Monkey Dock
                        </Link>
                        <button className="btn btn-primary text-white signin__container__social">Sign up using <span
                            className="font-weight-bold">Facebook</span></button>
                        <button className="btn btn-danger text-white signin__container__social">Sign up using <span
                            className="font-weight-bold">Google</span></button>
                        OR
                        <form>

                            <div className="form-group">
                                <label htmlFor="name">User name</label>
                                <input id={'name'} name={'name'}  className={'form-control'} onChange={this.handleChange('name')} value={name}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address
                                    <Link className="" to={'/signin'}
                                       style={{fontSize: 10, display: "inline-block", transform: 'translateX(80%)'}}>Already have an account?</Link></label>
                                <input id={'email'} name={'email'} type={'email'} className={'form-control'} onChange={this.handleChange('email')} value={email}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email
                                    with anyone else.</small>
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
                            <button type="submit" className="btn btn-primary" onClick={this.clickSubmit}>Sign Up</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );

    render(){
        const {email, password, error, open, name} = this.state;

        return (
            <>
                {/*validation*/}
                <div className={"alert alert-danger"} style={{display:error ? "":"none"}}>{error}</div>
                {/*end of validation*/}
                {open ? <div className={"jumbotron text-center"}><h2>You create an account successfully !!</h2></div> : ""}
                {this.signUpForm(email, password, name)}
                <Footer/>
            </>
        )
    }
}

export default SignUp;