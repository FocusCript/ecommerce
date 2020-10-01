import React from 'react';
import './signup.css'
import { NavLink, Redirect } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi'
import { RiErrorWarningLine } from 'react-icons/ri'
import validator from 'validator'

const data = [
    {
        email: 'luckerfocus@mail.ru',
        password: '199729aaa',
        id: '29af22lk',
    },
    {
        email: '123@mail.ru',
        password: '199729aaa',
        id: '28atj24dl',
    }
]

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: null,
            password: null,
            cpassword: null,
            errors: {
                email: null,
                password: null,
                cpassword: null
            },
            showPassword: true,
            loggedIn: null,
            rememberUser: true
         }
    }

    componentDidMount() {
        
    }
      
    handleSetValue=(e)=>{
        const { name, value} = e.target
        this.setState({
            ...this.state,
            [name]: value
        },()=>{this.checkValues(name, value)})
    }

    checkValues=(name, value)=>{
        const newState = { ...this.state }
        if(name === 'email'){
            if(validator.isEmpty(value)===false && validator.isEmail(value)===true){
                newState.errors.email = false
            }else{
                newState.errors.email = true
            } 
        }
        else if(name === 'password'){
            if(validator.isByteLength(value,{min: 8, max: 20})===true){
                newState.errors.password = false
            }else{
                newState.errors.password = true
            } 
        }
        else if(name === 'cpassword'){
            if( this.state.password === this.state.cpassword){
                newState.errors.cpassword = false
            }else{
                newState.errors.cpassword = true
            }
        }
        this.setState({newState})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const user = data.find((item)=>{
            return item.email === this.state.email
        })
       if( !user && !!this.state.password){
            this.setState({...this.state, loggedIn: true})
            if(this.state.rememberUser){
                localStorage.setItem('email', this.state.email)
                localStorage.setItem('password', this.state.password)
            }
            console.log('Registrated successful')
        }else{
            const newState = {...this.state}
            newState.errors.email = true
            this.setState(newState)
            alert('this email has registrated')
        }    
    }

    showPassword=(e)=>{
        const newState = { ...this.state}
        newState.showPassword = e.target.checked
        this.setState(newState)
    }
    remenberUser=(e)=>{
        const newState = { ...this.state}
        newState.rememberUser = e.target.checked
        this.setState(newState)
    }

    render() { 
        if (this.state.loggedIn) {
            return <Redirect to="/signIn" />;
          }
        
        return ( 
           <div className='signup_form_wrapper form_wrapper'>
               <h4>SignUP</h4>
                <form onSubmit={e=>{this.handleSubmit(e)}}>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                        name='email' 
                        type="email" 
                        className="form-control" 
                        id="email"
                        value={this.state.email} 
                        onChange={e=>this.handleSetValue(e)}
                    />
                    <span>(You can use letters,numbers & periods)</span>
                    { this.state.email !== null && this.state.errors.email===true && <div className='notification_icon'><RiErrorWarningLine color='red'/></div>}
                    { this.state.email !== null && this.state.errors.email===false && <div className='notification_icon'><HiCheck color='blue'/></div>}
                    
                    
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input
                        name='password' 
                        type={this.state.showPassword ? "text" : 'password'} 
                        value={this.state.password}
                        className="form-control" 
                        id="pwd"
                        onChange={e=>this.handleSetValue(e)}
                    />
                    <span>(password must be at least 8 characters)</span>
                    { this.state.password !== null && this.state.errors.password===true && <div className='notification_icon'><RiErrorWarningLine color='red'/></div>}
                    { this.state.password !== null && this.state.errors.password===false && <div className='notification_icon'><HiCheck color='blue'/></div>}
                
                </div>

                <div className="form-group">
                    <label for="c-pwd">Confirm Password:</label>
                    <input
                        name='cpassword' 
                        type={this.state.showPassword ? "text" : 'password'} 
                        value={this.state.cpassword}
                        className="form-control" 
                        id="c-pwd"
                        onChange={e=>this.handleSetValue(e)}
                    />
                    <span>(password must be at least 8 characters & copy of original password)</span>
                    { this.state.errors.cpassword===true && <div className='notification_icon'><RiErrorWarningLine color='red'/></div>}
                    { this.state.errors.cpassword===false && <div className='notification_icon'><HiCheck color='blue'/></div>}
                
                </div>
                <div className="form-group form-check">
                    <div className="form-check-label d-flex justify-content-between">
                        <div className='remember_box d-flex'>
                            <input className="form-check-input" type="checkbox" onChange={e=>this.remenberUser(e)}/>
                            <p>Remember me</p>
                        </div>
                         <div className='showPass_box d-flex'>
                            <input className="form-check-input" type="checkbox" checked={this.state.showPassword} onChange={ e=>this.showPassword(e) }/>
                            <p>show password</p>
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary w-100 mb-2">Submit</button>
               
                <div className='clickHere_box' >You have already any account? <NavLink to='/signIn' >Click here</NavLink></div>
                </form>
           </div>
         );
    }
}
 
export default SignUp;