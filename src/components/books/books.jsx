import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import "./books.css";
import { CgMoveLeft, CgMoveRight  } from 'react-icons/cg'
import { FiChevronsLeft, FiChevronsRight  } from 'react-icons/fi'
import { data }  from '../../data/books'
import Ribbon from '../ribbon/ribbon';
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'
import { MdRemoveCircle } from 'react-icons/md'
import Zoom from 'react-reveal/Zoom';

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: null,
            perPage: 18,
            currentPage: 0,
            pagesHiden: false,
        };
    }

    componentDidMount() {
        this.receivedData()     
    }

    addToCart = async (item) => {
        await this.props.addToCart(item)
        await this.props.countCart()
        await this.props.getCartPrice()
    }

    addToWishList = async (item) => {
        await this.props.addToWishList(item)
        await this.props.countWishList()
    }

    deleteFromWishList = async (item)=>{
        await this.props.deleteFromWishList(item)
        await this.props.countWishList()
      }
      
    deleteFromCart = async (item)=>{
        await this.props.deleteFromCart(item)
        await this.props.getCartPrice()
        await this.props.countCart()
    }

    receivedData() {   
        const postData = this.parsingData()
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),   
            postData
        })   
    }
    

    parsingData(){
        const slice = this.props.data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map((item, index) => 
        <div key={index+1} className='book_wrapper text-center cursor-pointer'>
            { this.props.cartList.findIndex(i=> i.id === item.id) > -1 ? 
                <MdRemoveCircle className='cursor-pointer add_icon' onClick={()=>this.deleteFromCart(item)} size='35px'/> :
                <AiFillPlusCircle className='cursor-pointer add_icon' onClick={()=>this.addToCart(item)} size='35px'/>
                 }

            { this.props.wishList.findIndex(i=> i.id === item.id) > -1 ? 
                <AiTwotoneStar className='cursor-pointer like_icon' onClick={()=>this.deleteFromWishList(item)} size='40px'/> :
                <AiOutlineStar className='cursor-pointer like_icon' onClick={()=>this.addToWishList(item)} size='40px'/> }
            <p>{item.price}</p>
            <h6>{item.title}</h6>
            <img src={item.image} width='150px' height='200px' alt="noImage"/>
            <Ribbon price={item.product_details.price}/>
        </div>)
        return postData
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    openPages=()=>{
        const newState = { ...this.state }
        newState.pagesHiden = !this.state.pagesHiden
        this.setState(newState)
    }

    render() {
        return (
            <div>
                { this.state.pagesHiden &&  this.state.pageCount > 1 &&
                    <div className='paginate_wrapper'>
                        <ReactPaginate
                        previousLabel={<FiChevronsLeft/>}
                        nextLabel={<FiChevronsRight/>}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                        <CgMoveLeft size='30px' className='cursor-pointer' onClick={this.openPages}/>
                    </div>}
                { !this.state.pagesHiden && this.state.pageCount > 1 &&
                    <div className='paginate_wrapper ml-2 cursor-pointer'>
                        <CgMoveRight size='30px' onClick={this.openPages}/>
                    </div>}
                <Zoom cascade >
                    <div className='books_wrapper'>{this.parsingData()}</div>
                </Zoom>
            </div>
        )
    }
}
