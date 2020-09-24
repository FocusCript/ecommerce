import React from 'react';
import './footer.css'
import Click from '../logos/click.png'
import Qiwi from '../logos/qiwi.png'
import WebM from '../logos/webmoney.png'
import { BsChevronDoubleUp, BsChevronDoubleDown } from 'react-icons/bs'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            openCreditBox: false
         }
    }

    handleSwitchView=()=>{
        const newState = { ...this.state }
        newState.openCreditBox = !this.state.openCreditBox
        this.setState(newState)
    }

    render() { 
        return ( 
            <div className='footer_wrapper'>
                <div className={this.state.openCreditBox ? 'payment_wrapper' : 'payment_wrapper d-none'}>
                    <p>We accept all major Credit Card/Debit Card/Internet Banking</p>
                   <div className='payment_logos'>
                        <img src={Click} alt="Click" height='25px'/>
                        <img src={Qiwi} alt="Qiwi" height='25px'/>
                        <img src={WebM} alt="WebM" height='25px'/>
                   </div>
                </div>
                <div className='footer_end_wrapper'>
                    <div className='payment_switcher_box'>
                        { !this.state.openCreditBox && <BsChevronDoubleUp size='18px' onClick={this.handleSwitchView}/>}
                        { this.state.openCreditBox && <BsChevronDoubleDown size='18px' onClick={this.handleSwitchView}/>}
                    </div>
                    <p>© 2020 FocusDEV.org, All rights reserved</p>
                </div>
            </div>
         );
    }
}
 
export default Footer;