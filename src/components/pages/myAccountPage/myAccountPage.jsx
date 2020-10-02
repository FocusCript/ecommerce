import React from 'react';
import './myAccountPage.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FaUserTie } from 'react-icons/fa'

class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    logOut= ()=>{
        console.log('2')
        const answer = window.confirm('You wish LOGOUT?')
        if(answer){
           setTimeout(() => {
            this.props.logOut()
          }, 1000);
           window.location.href = '/'
        }
    }

    render() { 
        return ( 
          <div>
               <div className='account_wrapper'>
                    <div className='account_card mt-5 text-center'>
                        <div className='account_icon'>
                            <FaUserTie size='170px'/>
                        </div>
                        <h4 className='text-center'>Hi User!</h4>
                       <div><button className='btn btn-outline-danger w-50 mt-2' onClick={this.logOut}>Logout</button></div>
                    </div>
                    <div className='account_card mt-5'>
                        <h5><b>First name: </b> <i>Empty</i></h5>
                        <h5><b>Last name: </b> <i>Empty</i></h5>
                        <h5><b>Email: </b> <i>Empty</i></h5>
                        <h5><b>Country: </b> <i>Empty</i></h5>
                        <h5><b>Adress: </b> <i>Empty</i></h5>
                        <h5><b>Phone: </b> <i>Empty</i></h5>
                        <div><span className='mt-4 cursor-pointer p-1'>Change Password</span></div>
                    </div>
                </div>
               <div className='form_updater_account'>
                  <Form>
                    <FormGroup row>
                        <Label for="Firstname" sm={2}>First name:</Label>
                        <Col sm={10}>
                        <Input type="text" name="Firstname" id="Firstname" placeholder="First name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Lastname" sm={2}>Last name:</Label>
                        <Col sm={10}>
                        <Input type="text" name="Lastname" id="Lastname" placeholder="Last name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Email" sm={2}>Email:</Label>
                        <Col sm={10}>
                        <Input type="Email" name="Email" id="Email" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Country</Label>
                        <Col sm={10}>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>USA</option>
                            <option>RUSSIA</option>
                            <option>UZBEKISTAN</option>
                            <option>KOREA</option>
                            <option>ANY</option>
                        </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Adress" sm={2}>Adress:</Label>
                        <Col sm={10}>
                        <Input type="text" name="Adress" id="Adress" placeholder="Adress" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Phone" sm={2}>Phone:</Label>
                        <Col sm={10}>
                        <Input type="number" name="Phone" id="Phone" placeholder="Phone" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>File</Label>
                        <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            You can download photo for avatar
                        </FormText>
                        </Col>
                    </FormGroup>
                    <div className='d-flex justify-content-end'><Button>update</Button></div>
                    </Form>
               </div>
          </div>
         );
    }
}
 
export default MyAccount;