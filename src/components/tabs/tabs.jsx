import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Books from '../books/books-container'
import './tabs.css'
import {data}  from '../../data/books'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentProps: this.props,
      datas: [],
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

   scrollTo = (ref) => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  componentDidUpdate(){
    if(this.state.currentProps.selectedData !== this.props.selectedData){
      this.setState({...this.state, currentProps: this.props},()=>{
        this.toggle('7')
      })
    }
    if(this.props.searchedBook.length > 0 && this.state.currentProps.searchedBook !== this.props.searchedBook){
      this.setState({...this.state, currentProps: this.props},()=>{
        this.toggle('6')
      })
    }
  }

  componentDidMount(){
    this.setState({...this.state, currentProps: this.props})
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

  choosenCategory=()=>{
    return (
      <TabPane tabId="7">
      <Row>
        <Col sm="12">
        { this.state.activeTab==='7' && <Books perPage='5'  data={this.props.selectedData}/>}
        </Col>
      </Row>
      </TabPane>
    )
  }

  searchResult=()=>{
    return (
      <TabPane tabId="6">
      <Row>
        <Col sm="12">
        { this.state.activeTab==='6' && <Books perPage='16' data={this.props.searchedBook}/>}
        </Col>
      </Row>
      </TabPane>
    )
  }

  render() { 
    const { activeTab } = this.state
    return (
      <div className='tabs_wrapper' ref={this.state.currentProps.selectedData !== this.props.selectedData ? this.scrollTo : ''}>
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
          <NavItem className='cursor-pointer'>
            <NavLink
              className={classnames({ active: activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              {this.props.searchedBook && 'Founded'}
            </NavLink>
          </NavItem>
          <NavItem className='cursor-pointer top_category_item_wapper'>
            <NavLink
              className={classnames({ active: activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
              {this.props.selectedTitle}
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
         {this.choosenCategory()}
         {this.searchResult()}
        </TabContent>
      </div>
    );
  }
}
 
export default Tabs;