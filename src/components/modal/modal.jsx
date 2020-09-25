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
          totalCartPrice: 0,
          totalWishListPrice: 0
        }
    }


    stringToInt(price){
      let clear = ''
      for (let i = 0; i < price.length; i++) {
        if(price[i] !== '$'){
          clear = clear + price[i]
        }
      }
      return parseFloat(clear)
    }
    
    /* CartList */ 
    incrementCartProducts = async (item)=>{
      await this.props.incrementCartProducts(item)
      await this.props.countCart()
      await this.props.getCartPrice()
    }
    
    decrementCartProducts = async (item)=>{
      await this.props.decrementCartProducts(item)
      await this.props.countCart()
      await this.props.getCartPrice()
    }

    deleteFromCart = async (item)=>{
      await this.props.deleteFromCart(item)
      await this.props.countCart()
      await this.props.getCartPrice()
    } 

    /* Wishlist */
    incrementWishListProducts = async (item)=>{
      await this.props.incrementWishListProducts(item) 
      await this.props.countWishList()
    }
    
    decrementWishListProducts = async (item)=>{
      await this.props.decrementWishListProducts(item)   
      await this.props.countWishList() 
    }

    deleteFromWishList = async (item)=>{
      await this.props.deleteFromWishList(item)
      await this.props.countWishList() 
    }

    
    render() { 
        const { openCart, 
          openWishList, 
          openCartModal, 
          openWishListModal, 
          cartList, 
          wishList,
          totalCountWishList,
          totalCountCart
         } = this.props

        return (
           <div>
               { this.props.cart && <div>
                <div className='icon_box' onClick={openCartModal}>
                    <TiShoppingCart size='40px' color="black">cart</TiShoppingCart>
                    <Badge href="#" color="light" className='badge_counter'>{totalCountCart}</Badge>
                </div>
                <Modal isOpen={openCart} toggle={openCartModal} size='lg'>
                    <ModalHeader>
                      <div className='d-flex align-items-center'>
                      <h1>Total: {this.props.totalPriceCart}</h1>
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
                                <th className='mobil_view_none'>Language</th>
                                <th className='mobil_view_none'>Pages</th>
                                <th>delete</th>
                              </tr>
                          </thead>
                         { cartList.map((_, i)=>(
                            <tbody>
                              <tr key={_.id}>
                                <th scope="row">{i+1}</th>
                                <td>{_.title}</td>
                                <td>{_.author}</td>
                                <td>
                                  <div className='d-flex justify-content-around'>
                                    <button onClick={()=>this.incrementCartProducts(_)}>plus</button>
                                    <span className='ml-2 mr-2'>{_.cartCounter}</span>
                                    <button onClick={()=>this.decrementCartProducts(_)}>minus</button>
                                  </div>
                                </td>
                                <td>{this.stringToInt(_.product_details.price)*_.cartCounter} $</td>
                                <td className='mobil_view_none'>{_.product_details.language}</td>
                                <td className='mobil_view_none'>{_.product_details.pages}</td>
                                <td><button onClick={()=>this.deleteFromCart(_)}>delete</button></td>        
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
                  <Badge href="#" color="light" className='badge_counter'>{totalCountWishList}</Badge>
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
                                <th className='mobil_view_none'>Language</th>
                                <th className='mobil_view_none'>Pages</th>
                                <th>delete</th>
                              </tr>
                          </thead>
                         { wishList.map((_, i)=>(
                            <tbody>
                              <tr key={_.id}>
                                <th scope="row">{i+1}</th>
                                <td>{_.title}</td>
                                <td>{_.author}</td>
                                <td>
                                  <div className='d-flex justify-content-around'>
                                    <span className='ml-2 mr-2'>{_.wishCounter}</span>
                                  </div>
                                </td>
                                <td>{_.product_details.price}</td>
                                <td className='mobil_view_none'>{_.product_details.language}</td>
                                <td className='mobil_view_none'>{_.product_details.pages}</td>
                                <td><button onClick={()=>this.deleteFromWishList(_)}>delete</button></td>
                                <td><button onClick={()=>this.incrementWishListProducts(_)}>plus</button></td>
                                <td><button onClick={()=>this.decrementWishListProducts(_)}>minus</button></td>
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