import React from 'react';

class TabNav extends React.Component {
  render() {
    return (
      <div> 
        <ul className="nav nav-tabs">
        { 
            this.props.tabs.map(tab => {
                const active = (tab === this.props.selected ? 'active ' : '' );
                return (
                    <li className="nav-item" key={ tab }>
                        <a className={"nav-link " + active} onClick={ () => this.props.setSelected(tab) }>
                        { tab }
                        </a>
                    </li>
                );
            })
        }    
        </ul>
       <div className='tab-content'>
            { this.props.children }
       </div>
      </div>
    );
  }
}
export default TabNav;