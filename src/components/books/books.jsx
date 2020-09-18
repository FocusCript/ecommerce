import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "./books.css";

export default class Books extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 20,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }

  componentDidMount() {
    this.receivedData()
    }

  receivedData() {
      axios
          .get(`https://jsonplaceholder.typicode.com/photos`)
        //   .get(`https://picsum.photos/v2/list`)
          .then(res => {
              const data = res.data;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map(pd => 
              <div className='book_wrapper'>
                  <p>{data.url}</p>
                  <img src={pd.thumbnailUrl} alt=""/>
              </div>)

              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                 
                  postData
              })
              console.log(res)
          });
         
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

  render() {
      return (
          <div>
              <div className='books_wrapper'>{this.state.postData}</div>
              <div className='paginate_wrapper'>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
              </div>
          </div>

      )
  }
}
