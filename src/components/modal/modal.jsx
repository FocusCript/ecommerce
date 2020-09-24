import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TiShoppingCart } from 'react-icons/ti'
import { ImStarFull } from 'react-icons/im'
import { Badge, Table } from 'reactstrap'
import './modal.css'

class ModalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          totalCartCount: 0
        }
    }

    reduceCartCounts(){
      let totalCartCount = 0;
      const { cartList } = this.props
      for (let i = 0; i < cartList.length; i++) {
          totalCartCount +=  cartList[i].cartCounter
      }
      return this.setState({totalCartCount})
    }

    reduceWishCounts(){
      let totalwishCount = 0;
      const { wishList } = this.props
      for (let i = 0; i < wishList.length; i++) {
          totalwishCount +=  wishList[i].totalwishCount
      }
      return this.setState({totalwishCount})
    }
    
    incrementCartProducts = async (item)=>{
        await this.props.incrementCartProducts(item)
        await this.reduceCartCounts()
    }
    
    incrementCartProducts = async (item)=>{
        await this.props.incrementCartProducts(item)
        await this.reduceCartCounts()
    }

     deleteFromCart = async (item)=>{
        await this.props.deleteFromCart(item)
        await this.reduceCartCounts()
    }
     deleteFromWishList = async (item)=>{
        await this.props.deleteFromWishList(item)
        await this.reduceCartCounts()
    }

    
    render() { 
        const { openCart, openWishList, openCartModal, openWishListModal, cartList, deleteFromCart, incrementCartProducts, wishList } = this.props
        return (
           <div>
               { this.props.cart && <div>
                <div className='icon_box' onClick={openCartModal}>
                    <TiShoppingCart size='40px' color="black">cart</TiShoppingCart>
                    <Badge href="#" color="light" className='badge_counter'>{this.state.totalCartCount}</Badge>
                </div>
                <Modal isOpen={openCart} toggle={openCartModal} size='lg'>
                    <ModalHeader>
                      <div className='d-flex align-items-center'>
                          <h1>qwer</h1>
                          <h1>qwer</h1>
                          <h1>qwer</h1>
                          <h1>Total: </h1>
                      </div>
                    </ModalHeader>
                    <ModalBody>
                        <Table striped>
                        <thead>
                              <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Count</th>
                                <th>Price</th>
                                <th>Language</th>
                                <th>Pages</th>
                                <th>delete</th>
                              </tr>
                          </thead>
                         { cartList.map((_, i)=>(
                            <tbody>
                              <tr key={_.id}>
                                <th scope="row">{i+1}</th>
                                <td>{_.title}</td>
                                <td>{_.author}</td>
                                <td>default : 1</td>
                                <td>{_.product_details.price}</td>
                                <td>{_.product_details.language}</td>
                                <td>{_.product_details.pages}</td>
                                <td><button onClick={()=>this.deleteFromCart(_)}>delete</button></td>
                                <td><button onClick={()=>this.incrementCartProducts(_)}>plus</button></td>
                              </tr>
                            </tbody>
                         ))}
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={openCartModal}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={openCartModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>}
               { this.props.wish && <div>
              <div className='icon_box' onClick={openWishListModal}>
                  <ImStarFull size='40px' color="red">cart</ImStarFull>
                  <Badge href="#" color="light" className='badge_counter'>4</Badge>
                </div>
              <Modal isOpen={openWishList} toggle={openWishListModal} size='lg'>
                <ModalHeader>content_title</ModalHeader>
                <ModalBody>
                        <Table striped>
                        <thead>
                              <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Count</th>
                                <th>Price</th>
                                <th>Language</th>
                                <th>Pages</th>
                                <th>delete</th>
                              </tr>
                          </thead>
                         { wishList.map((_, i)=>(
                            <tbody>
                              <tr key={_.id}>
                                <th scope="row">{i+1}</th>
                                <td>{_.title}</td>
                                <td>{_.author}</td>
                                <td>default : 1</td>
                                <td>{_.product_details.price}</td>
                                <td>{_.product_details.language}</td>
                                <td>{_.product_details.pages}</td>
                                <td><button onClick={()=>this.deleteFromWishList(_)}>delete</button></td>
                                <td><button onClick={()=>this.incrementProducts(_)}>plus</button></td>
                              </tr>
                            </tbody>
                         ))}
                        </Table>
                    </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={openWishListModal}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={openWishListModal}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>}
           </div>
          );
    }
}
 
export default ModalList;