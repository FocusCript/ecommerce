import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import "./books.css";
import { CgMoveLeft, CgMoveRight  } from 'react-icons/cg'
import { FiChevronsLeft, FiChevronsRight  } from 'react-icons/fi'
import { data }  from '../../data/books'
import Ribbon from '../ribbon/ribbon';

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

    addToCart = async (item)  => {
        await this.props.addToCart(item)
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

    receivedData() {   
        const slice = this.props.data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map((item, index) => 
        <div key={index+1} className='book_wrapper text-center cursor-pointer'>
            <button className='btn btn-primary' onClick={()=>this.addToCart(item)}>CArt+</button>
            <button className='btn btn-primary' onClick={()=>this.props.addToWishList(item)}>Wish+</button>
            <p>{item.price}</p>
            <h6>{item.title}</h6>
            <img src={item.image} width='150px' height='200px' alt="noImage"/>
            <Ribbon price={item.product_details.price}/>
        </div>)

        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),   
            postData
        })   
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
                <div className='books_wrapper'>{this.state.postData}</div>
            </div>
        )
    }
}
