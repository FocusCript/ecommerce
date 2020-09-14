import React from 'react';
import './index.css';
import Tab from './tab'
import TabNav from './tab-nav'


class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Home'
    }
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  }
  render() {
    return (
      <div>
        <TabNav tabs={['Home', 'Settings', 'Profile']} selected={ this.state.selected } setSelected={ this.setSelected }>
          <Tab isSelected={ this.state.selected === 'Home' }>
            <p>Some test text</p>
          </Tab>
          <Tab isSelected={ this.state.selected === 'Settings' }>
            <h1>More test text</h1>
          </Tab>
          <Tab isSelected={ this.state.selected === 'Profile' }>
            <h3>TABS</h3>
          </Tab>
        </TabNav>
      </div>
    );
  }
}
export default Tabs;