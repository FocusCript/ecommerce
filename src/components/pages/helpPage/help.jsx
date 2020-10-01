import React from 'react';
import './help.css'

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[
                {
                    category: 'ACCOUNT HELP',
                    textList: [
                        {
                            req: 'I have a Loyalty Card but cannot log in.',
                            answer: "We've made searching for titles simple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1234g3'
                        },
                        {
                            req: 'I want to create an account.',
                            answer: "We've made searching for titles simple . Begin by typing an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1323'
                        },
                        {
                            req: 'How do I log in?',
                            answer: "We've made searching for  but powerful. Begin by typing an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1243'
                        },
                    ]
                },
                {
                    category: 'ORDER HELP / ISSUES',
                    textList: [
                        {
                            req: 'How do I place an order?',
                            answer: "We'vple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'23452'
                        },
                        {
                            req: 'Can I pick up my order from a local store?',
                            answer: "We've made searching forping an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1231111'
                        },
                        {
                            req: 'How do I order a Gift Voucher online?',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'q3e52354'
                        },
                        {
                            req: 'I want to order multiple / bulk quantities.',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'q3232k54'
                        },
                        {
                            req: 'I am pre-ordering a product, will you send the order together?',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'q3uk2354'
                        },
                        {
                            req: 'Do you sell eBooks?',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'q32345ik354'
                        },
                    ]
                },
                {
                    category: 'PAYMENTS',
                    textList: [
                        {
                            req: 'What payment options do you allow?',
                            answer: "We'vple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1225dfg'
                        },
                        {
                            req: 'Can I use my Loyalty credit online?',
                            answer: "We've made searching forping an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'dfgyu312'
                        },
                    ]
                },
                {
                    category: 'RETURNS',
                    textList: [
                        {
                            req: 'How do I make a return?',
                            answer: "We'vple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'236fgh13'
                        },
                    ]
                },
                {
                    category: 'DELIVERY HELP',
                    textList: [
                        {
                            req: 'Do I have to pay for shipping?',
                            answer: "We'vple but powerful. Begin by  a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'qweqw11'
                        },
                        {
                            req: 'When will my order be shipped?',
                            answer: "We've made searching forping an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'weeeq'
                        },
                        {
                            req: 'Do you ship outside of Australia??',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'123443qqq'
                        },
                        {
                            req: 'How do I track my order?',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1243q35qq'
                        },
                        {
                            req: 'Do you offer Express Post?',
                            answer: "We've made searching  an author, a title, or an ISBN into the search bar at the top of any page. ThriftBooks now offers over 13 million titles but you'll get the results quickly. If you don't see what you want in the results, you can use the filters to look for specific items by Genre, Format (this is where you can search for Large Print), condition, language, and price. From a desktop computer, filters can be found along the left side of your search results. From a tablet, phone, or our mobile app, click Sort & Filter to access and apply filters.",
                            id:'1243qqwqq'
                        },
                    ]
                }
            ],
         }
    }

    closePrevText=(prevKey)=>{
        this.setState({...this.state, [prevKey]: false})
    }

    handleSwitch = (e)=>{
        if(this.state.currentOpenedId) this.closePrevText(this.state.currentOpenedId)
        const { id } = e.target
        this.setState({
            [id]: !this.state[id],  
            currentOpenedId: [id]  
        })
    }

    reqRes() {
        return (
            <div className='pb-5'>
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
                                { this.state[item.id] && <p className='card card-body'>{item.answer}</p>}
                          </div>
                       ))}
                   </div>
                ))}
            </div>
        )
    }

    render() { 
        return ( 
        <div>
            {this.reqRes()}
        </div> 
        );
    }
}
 
export default Help;


