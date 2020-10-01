import React from 'react';
import './signIn.css'
import { NavLink, Redirect } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi'
import { RiErrorWarningLine } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import validator from 'validator'

const data = [
    {
        email: 'luckerfocus@mail.ru',
        password: '12345678',
        id: '29af22lk',
    },
    {
        email: '123@mail.ru',
        password: '199729aaa',
        id: '28atj24dl',
    }
]

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: null,
            password: null,
            errors: {
                email: null,
                password: null,
            },
            showPassword: false,
            loggedIn: null,
            rememberUser: false
         }
    }

    componentDidMount() {
        const newState = {...this.state}
        newState.email = localStorage.getItem('email')
        newState.password = localStorage.getItem('password')
        this.setState(newState)
    }
      
    handleSetValue=(e)=>{
        const { name, value} = e.target
        this.setState({
            ...this.state,
            [name]: value
        },this.checkValues(name, value))
    }

    checkValues=(name, value)=>{
        const newState = { ...this.state }
        if(name === 'email'){
            if(validator.isEmpty(value)===false && validator.isEmail(value)===true){
                newState.errors.email = false
            }else{
                newState.errors.email = true
            }
            this.setState(newState)
        }
        else if(name === 'password'){
            if(validator.isByteLength(value,{min: 7, max: 20})===true){
                newState.errors.password = false
            }else{
                newState.errors.password = true
            }
            this.setState({newState})
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const user = data.find((item)=>{
            return item.email === this.state.email
        })
       if( !!user && !!this.state.password && user.password === this.state.password){
            // this.setState({...this.state, loggedIn: true})
            this.props.signIn({email: user.email, password: user.password, signedIn: true})
            if(this.state.rememberUser){
                localStorage.setItem('email', user.email)
                localStorage.setItem('password', user.password)
            }
            console.log('is Valid')
        }else{
            this.props.signIn({email: '', password: '', signedIn: false}) 
            console.log('invalid')
        }    
    }

    showPassword=(e)=>{
        const newState = { ...this.state}
        newState.showPassword = e.target.checked
        this.setState(newState,()=>{
            console.log(this.state.showPassword)
        })
    }
    remenberUser=(e)=>{
        const newState = { ...this.state}
        newState.rememberUser = e.target.checked
        this.setState(newState,()=>{
            console.log(this.state.rememberUser)
        })
    }

    googleAuth=()=>{
        alert('Google')
    }

    render() { 
        if (this.props.signedIn) {
            return <Redirect to="/" />;
          }
        
        return ( 
           <div className='form_wrapper'>
               <h4>SignIn</h4>
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
                <div className="form-group form-check">
                    <div className="form-check-label d-flex justify-content-between">
                        <div className='remember_box d-flex'>
                            <input className="form-check-input" type="checkbox" onChange={e=>this.remenberUser(e)}/>
                            <p>Remember me</p>
                        </div>
                         <div className='showPass_box d-flex'>
                            <input className="form-check-input" type="checkbox" onChange={ e=>this.showPassword(e) }/>
                            <p>show password</p>
                        </div>
                    </div>
                </div>
               <div className='links'>
                   <NavLink to='/forgotpassword'>Frogot Password?</NavLink>
                   <NavLink to='/SignUP'>Registration</NavLink>
               </div>

                <button className="btn btn-primary w-100">Submit</button>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='btn w-100 mt-2 mb-4 bg-dark' onClick={this.googleAuth}><FcGoogle size='20px'/><b className='ml-1 text-white'>Login with Google</b></div>
                </div>
               
                </form>
           </div>
         );
    }
}
 
export default SignIn;