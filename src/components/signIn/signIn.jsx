import React from 'react';
import './signIn.css'
import { ExclamationCircleFill } from 'react-bootstrap-icons'
import { CheckCircleFill } from 'react-bootstrap-icons'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            errors: {
                email: false,
                password: true,
            },
            showPassword: false
         }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
    }

    showPassword=(e)=>{
        this.setState({
            showPassword: e.target.checked
        })
        console.log(e.target.checked)
    }
    render() { 
        return ( 
           <div className='form_wrapper'>
               <h4>SignIn</h4>
                <form onSubmit={e=>{this.handleSubmit(e)}}>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email"/>
                    <span>email will be unique and bla bla @ sybol</span>
                    {this.state.errors.email && <div className='notification_icon'><ExclamationCircleFill color='red'/></div>}
                    {!this.state.errors.email && <div className='notification_icon'><CheckCircleFill color='blue'/></div>}
                    
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type={this.state.showPassword ? "text" : 'password'} className="form-control" id="pwd"/>
                    <span>This is password rules</span>
                    {this.state.errors.password && <div className='notification_icon'><ExclamationCircleFill color='red'/></div>}
                    {!this.state.errors.password && <div className='notification_icon'><CheckCircleFill color='blue'/></div>}
                </div>
                <div className="form-group form-check">
                    <div className="form-check-label">
                    <input className="form-check-input ml-1" type="checkbox"/> Remember me
                    <input className="form-check-input ml-5" type="checkbox" onChange={ e=>this.showPassword(e) }/> Show password
                    </div>
                </div>
                <button className="btn btn-primary w-100">Submit</button>
                </form>
           </div>
         );
    }
}
 
export default SignIn;