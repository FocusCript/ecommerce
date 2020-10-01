import React from 'react';
import { Table } from 'reactstrap';
import './orderStatusPage.css'
import { ImCancelCircle } from 'react-icons/im'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='orders_table_wrapper'>
                 <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Notes</th>
                            <th>Status</th>
                            <th>Paid</th>
                            <th>Location</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><ImCancelCircle color='red'/></td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td><FaRegCheckCircle color='green'/></td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td><FiClock color='blue'/></td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
            </div>
         );
    }
}
 
export default Order;