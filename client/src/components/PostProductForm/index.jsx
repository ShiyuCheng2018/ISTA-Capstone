import React, {Component} from 'react';
import {isAuthenticated} from "../../auth";

class PostProductForm extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            description:"",
            goal_price:0,
            qty:1,
            user: isAuthenticated().basic.user_id,
            condition: "",
            category:[]
        }
    }

    handleChange = (name) => (event) =>{
        this.setState({ [name]: event.target.value});
    };

    render() {
        const {name, description, goal_price, qty,condition, category} = this.state;
        return (
            <>
                <form className={"text-dark"}>
                    <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input className="form-control" id="name"
                               onChange={this.handleChange('name')}
                               placeholder="What you want to sell?" value={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="condition">Condition</label>
                        <select className="form-control"
                                onChange={this.handleChange('condition')}
                                id="condition" value={condition}>
                            <option>Almost New</option>
                            <option>Great</option>
                            <option>Good</option>
                            <option>Noticeable</option>
                            <option>Need to fix</option>
                        </select>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="Category">Category</label>*/}
                    {/*    <select className="form-control"*/}
                    {/*            onChange={this.handleChange('category')}*/}
                    {/*            id="Category" value={category}>*/}
                    {/*        <option>Desktop</option>*/}
                    {/*        <option>Vehicle</option>*/}
                    {/*        <option>Mobile</option>*/}
                    {/*        <option>Laptop</option>*/}
                    {/*        <option>Bike</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <div className="form-group">
                        <label htmlFor="price">Goal Price</label>
                        <input type="number" id="price"
                               onChange={this.handleChange('goal_price')}
                               className="ml-3" value={goal_price}/> $
                    </div>
                    <div className="form-group">
                        <label htmlFor="qty">Quantity</label>
                        onChange={this.handleChange('qty')}
                        <input type="number" id="qty" className="ml-3" value={qty}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                  onChange={this.handleChange('description')}
                                  value={description}
                                  placeholder={"Please describe your product..."}
                        />
                    </div>
                </form>
            </>
        );
    }
}


export default PostProductForm;
