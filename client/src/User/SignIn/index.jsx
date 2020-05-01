import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Footer from "../../core/Footer";
import {Link} from "react-router-dom";
import {signIn} from "../../auth";

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToReferer: false,
            loading: false
        }
    }

    handleChange = (name) => (event) =>{
        this.setState({error:""});
        this.setState({[name]: event.target.value})
    };


    clickSubmit = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const {email, password} = this.state;
        const user = {
            email,
            password
        };

        signIn(user)
            .then(data=>{
                if(data.error){
                    this.setState({error: data.error, loading: false})
                }else {
                    this.setState({redirectToReferer: true})
                }
            })
    };

    signInForm = (email, password)=>(
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
                        <button className="btn btn-primary text-white signin__container__social">Sign in using <span
                            className="font-weight-bold">Facebook</span></button>
                        <button className="btn btn-danger text-white signin__container__social">Sign in using <span
                            className="font-weight-bold">Google</span></button>
                        OR
                        <form>
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
        const {email, password, error, redirectToReferer, loading} = this.state;
        if (redirectToReferer){
            return <Redirect to={'/'}/>
        }
        return (
            <>
                {/*validation*/}
                <div className={"alert alert-danger"} style={{display:error ? "":"none"}}>{error}</div>
                {/*end of validation*/}
                {loading ? <div className={"jumbotron text-center"}><h2>loading....</h2></div> : ""}
                {this.signInForm(email, password)}
                <Footer/>
            </>
        )
    }
}

export default SignIn;