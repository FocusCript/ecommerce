import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Books from '../books/books-container'
import './tabs.css'
import {data}  from '../../data/books'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab : '5',
      object: {
        classic: [],
        fantastic: [],
        war: [],
        women: [],
        all: []
      }
    }
  }

  componentDidMount(){
    const { classic, fantastic, war, women} = this.state.object
    data.map((subarray)=>{
      return subarray.product_details.BISAC_Categories.map(item=>{
        switch(item){
          case 'classic': return classic.push(subarray);
          case 'fantastic': return fantastic.push(subarray);
          case 'war': return war.push(subarray);
          case 'women': return women.push(subarray);
          default:  return 0;
        }
      })
    })
  }

   toggle = tab => {
    if(this.state.activeTab !== tab) this.setState({ ...this.state, activeTab: tab});
  }


  render() { 
    const { activeTab } = this.state
    return (
      <div className='tabs_wrapper'>
        <Nav tabs>
          <NavItem className='cursor-pointer'>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Classic
            </NavLink>
          </NavItem>
          <NavItem className='cursor-pointer'>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Fantastic
            </NavLink>
          </NavItem>
          <NavItem className='cursor-pointer'>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              War
            </NavLink>
          </NavItem>
          <NavItem className='cursor-pointer'>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Women
            </NavLink>
          </NavItem>
          <NavItem className='cursor-pointer'>
            <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              All
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                { activeTab==='1' && <Books perPage='16' data={this.state.object.classic}/> }
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                { activeTab==='2' && <Books perPage='10' data={this.state.object.fantastic}/>}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                { activeTab==='3' && <Books perPage='10' data={this.state.object.war}/>}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                { activeTab==='4' && <Books perPage='4' data={this.state.object.women}/>}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
              { activeTab==='5' && <Books perPage='5'  data={data}/>}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
 
export default Tabs;