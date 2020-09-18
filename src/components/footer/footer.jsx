import React from 'react';
import './footer.css'
import Click from '../logos/click.png'
import Qiwi from '../logos/qiwi.png'
import WebM from '../logos/webmoney.png'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                {
                    title:'Sience',
                    catigories:['qwerty','qwerty','qwerty','qwerty','qwerty','qwerty', ]
                },
                {
                    title:'Professions',
                    catigories:['qwerty','qwerty','qwerty','qwerty','qwerty','qwerty', ]
                },
                {
                    title:'Earth',
                    catigories:['qwerty','qwerty','qwerty','qwerty','qwerty','qwerty', ]
                },
                {
                    title:'Healthy',
                    catigories:['qwerty','qwerty','qwerty','qwerty','qwerty','qwerty', ]
                }
            ]
         }
    }
    render() { 
        return ( 
            <div className='footer_wrapper'>
                {/* <div className='books_genre_wrapper'>
                    {this.state.data.map((item,index)=>(
                         <ul className='pt-3'>
                            <p className='title' key={index}>{item.title}</p>
                            {item.catigories.map((_,i)=>(
                                <li key={i+5}>{_}</li>
                            ))}
                        </ul>
                    ))}
                </div> */}
                <div className='payment_wrapper'>
                    <p>We accept all major Credit Card/Debit Card/Internet Banking</p>
                   <div className='payment_logos'>
                        <img src={Click} alt="Click" height='25px'/>
                        <img src={Qiwi} alt="Qiwi" height='25px'/>
                        <img src={WebM} alt="WebM" height='25px'/>
                   </div>
                </div>
                <div className='footer_end_wrapper'>
                    <p>© 2020 FocusDEV.org, All rights reserved</p>
                </div>
            </div>
         );
    }
}
 
export default Footer;