import React from 'react';
import ModalList from '../modal/modal-container';
import { IoIosArrowDropupCircle } from 'react-icons/io'


class TripleIcons extends React.Component {
    render() { 
        return ( 
             <div className='modal_icons'>
                <IoIosArrowDropupCircle size='40px' color='blue' onClick={this.scrollToTop} className='cursor-pointer'/>
                <ModalList cart/>                    
                <ModalList wish/>       
            </div> 
         );
    }
}
 

export default TripleIcons;