import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TiShoppingCart } from 'react-icons/ti'
import { ImStarFull } from 'react-icons/im'
import { ImFileEmpty } from 'react-icons/im'
import { MdDeleteForever } from 'react-icons/md'
import { AiFillPlusCircle } from 'react-icons/ai'
import { MdRemoveCircle } from 'react-icons/md'
import { FaCartPlus } from 'react-icons/fa'
import { Badge, Table } from 'reactstrap'
import Wobble  from 'react-reveal/Wobble'
import Jump  from 'react-reveal/Jump'
import './modal.css'

class ModalList extends React.Component {
    constructor(props) {
        super(props);
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

    addToCartAndRemoveFromWish= async(item)=>{
      await this.props.addToCart(item)
      await this.props.countCart()
      await this.props.getCartPrice()
      // await this.deleteFromWishList(item)
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
                    <Wobble  spy={totalCountCart}>
                      <TiShoppingCart size='40px' color="black">cart</TiShoppingCart>
                    </Wobble>
                    <Badge href="#" color="light" className='badge_counter'>{totalCountCart}</Badge>
                </div>
                <Modal isOpen={openCart} toggle={openCartModal} size='lg'>
                    <ModalHeader>
                      <h1>Cart</h1>
                      <h3 className='total_cart_price'>Total: {'$'+this.props.totalPriceCart}</h3>
                    </ModalHeader >
                    { this.props.cartList.length > 0 && <ModalBody>
                        <Table borderless hover>
                        <thead>
                              <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Count</th>
                                <th>Price</th>
                                <th className='mobil_view_none'>Language</th>
                                <th></th>
                              </tr>
                          </thead>
                         { cartList.map((_, i)=>(
                            <tbody>
                              <tr key={_.id}>
                                <th scope="row">{i+1}</th>
                                <td>{_.title}</td>
                                <td><img src={_.image} alt="netu" width='40px'/></td>
                                <td>
                                  <div className='d-flex justify-content-around'>            
                                    <MdRemoveCircle  onClick={()=>this.decrementCartProducts(_)} className='cursor-pointer inc_dec_icon' size='25px'/>
                                    <h6 className='ml-2 mr-2'>{_.cartCounter}</h6>
                                    <AiFillPlusCircle onClick={()=>this.incrementCartProducts(_)} className='cursor-pointer inc_dec_icon' size='25px' />                                  
                                  </div>
                                </td>
                                <td>{this.stringToInt(_.product_details.price).toFixed(2)*_.cartCounter} $</td>
                                <td className='mobil_view_none'>{_.product_details.language}</td>        
                                <td><MdDeleteForever size='30px' className='cursor-pointer' onClick={()=>this.deleteFromCart(_)}>delete</MdDeleteForever></td>        
                              </tr>
                            </tbody>
                         ))}
                        </Table>
                    </ModalBody>}
                    {this.props.cartList.length === 0 && <span className='no_items_wrapper'>
                      <ImFileEmpty size='40px' color='black'/>
                      <p>no items</p>
                    </span>}
                    <ModalFooter>
                        <Button color="primary" onClick={openCartModal}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={openCartModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
              </div>}
               { this.props.wish && <div>
              <div className='icon_box' onClick={openWishListModal}>
                  <Jump  spy={totalCountWishList}>
                    <ImStarFull size='40px' color="red">cart</ImStarFull>
                  </Jump>
                  <Badge href="#" color="light" className='badge_counter'>{totalCountWishList}</Badge>
                </div>
              <Modal isOpen={openWishList} toggle={openWishListModal} size='lg'>
                <ModalHeader><h2>My WishList</h2></ModalHeader>
                { this.props.wishList.length > 0 && <ModalBody>
                        <Table striped>
                        <thead>
                              <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th className='mobil_view_none'>Language</th>
                                <th>AddToCart</th>
                                <th></th>
                              </tr>
                          </thead>
                         { wishList.map((_, i)=>(
                             <tbody>
                             <tr key={_.id}>
                               <th scope="row">{i+1}</th>
                               <td>{_.title}</td>
                               <td>{_.author}</td>
                               <td><img src={_.image} alt="netu" width='40px'/></td>                           
                               <td>{this.stringToInt(_.product_details.price).toFixed(2)*_.wishCounter} $</td>
                               <td className='mobil_view_none'>{_.product_details.language}</td>  
                               <td>
                                  {cartList.findIndex(item=> item.id === _.id) > -1 ? 'alredy added' :  <FaCartPlus onClick={()=>this.addToCartAndRemoveFromWish(_)} className='cursor-pointer' size='30px'/>}
                                </td>  
                               <td><MdDeleteForever size='30px' className='cursor-pointer' onClick={()=>this.deleteFromWishList(_)}>delete</MdDeleteForever></td>        
                             </tr>
                           </tbody>
                         ))}
                        </Table>
                    </ModalBody>}
                   {this.props.wishList.length === 0 && <span className='no_items_wrapper'>
                      <ImFileEmpty size='40px' color='black'/>
                      <p>no items</p>
                    </span>}
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