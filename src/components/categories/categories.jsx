import React from 'react';
import './main.css'
import { VscMenu } from 'react-icons/vsc'
import Flip from 'react-reveal/Flip'

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories:[ 'Computers', 'Cooking', 'Education', 'Fiction', 'Health', 'Mathematics','Medical','Reference','Sience'],
            unHide: true
         }
    }

    viewList=()=>{
        const newState = {...this.state}
        newState.unHide = !this.state.unHide
        this.setState(newState)
    }
    render() { 
        return ( 
            <div className='catigories_wrapper'>
                {this.state.unHide === true && 
                <Flip cascade>
                    <ul>
                        {this.state.categories.map((item,index)=>{
                            return(
                                <li key={index} onClick={()=>this.props.selectTopCategory(item)}>{item}</li>
                            )
                        })}
                    </ul>
                </Flip>
              }
               <span className='burger_icon'><VscMenu onClick={this.viewList}/></span>
            </div>
         );
    }
}
 
export default Categories;