import React from 'react';
import Footer from '../../footer/footer';
import Navbar from '../../navigation/nav';
import './help.css'
import { ChevronRight } from 'react-bootstrap-icons'
import { ChevronDown } from 'react-bootstrap-icons'

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[
                {
                    category: 'Shoping',
                    textList: [
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching for titles simple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'123'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching for titles simple . Begin by typing an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1323'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching for  but powerful. Begin by typing an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1243'
                        },
                    ]
                },
                {
                    category: 'Payment',
                    textList: [
                        {
                            req: 'How do i find a book?',
                            answer: "We'vple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'23452'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching forping an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1231111'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'q32354'
                        },
                    ]
                },
                {
                    category: 'Search',
                    textList: [
                        {
                            req: 'How do i find a book?',
                            answer: "We'vple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'12335dfg'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching forping an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'dfgyu312'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'3245gjjk'
                        },
                    ]
                },
                {
                    category: 'LogOut',
                    textList: [
                        {
                            req: 'How do i find a book?',
                            answer: "We'vple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'236fgh13'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching forping an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'341jj'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'36j24'
                        },
                    ]
                },
                {
                    category: 'Registration',
                    textList: [
                        {
                            req: 'How do i find a book?',
                            answer: "We'vple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'qweqw11'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching forping an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'weeeq'
                        },
                        {
                            req: 'How do i find a book?',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1243qqq'
                        },
                    ]
                }
            ],
         }
    }

    componentDidMount(){
        this.setKeysProp()
    }

    setKeysProp = ()=>{
        this.state.data.map((_,i)=>{
            this.setState({ [_.id]: false })
        })
    }

    handleSwitch = (e, itemId)=>{
        const { id } = e.target
        this.setState({
            [id]: !this.state[id]
        })
        console.log(itemId)
    }

    reqRes() {
        return (
            <div>
                <div className='d-flex justify-content-center mt-5 mb-3'><h2>Help & Support</h2></div>
                {this.state.data.map((_,i)=>(
                   <div className='reqResText_wrapper'>
                       <h2 className='text-danger'>{_.category}</h2>
                       {_.textList.map((item,index)=>(
                          <div>
                             <div className='d-flex align-items-center'>
                                {this.state[item.id] && <div className='arrow-down hover'></div>}
                                {!this.state[item.id] && <div className='arrow-right hover'></div>}
                               
                                <h4  id={item.id} onClick={e=>this.handleSwitch(e)}>{item.req}</h4>
                             </div>
                                <p className={this.state[item.id] ? '' : 'd-none'}>{item.answer}</p>
                          </div>
                       ))}
                   </div>
                ))}
            </div>
        )
    }

    render() { 
        // const { data, openText} = this.state
        return ( 
        <div>
            
                {this.reqRes()}
            
        </div> 
        );
    }
}
 
export default Help;


