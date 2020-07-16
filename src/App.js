import React,{Component } from 'react';
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

class App extends Component{
  
  state={
    news:JSON,
    filtered:[]
  }
  
  getKeyword=(event)=>{
    // console.log(event.target.value);
    let keyword=event.target.value;
    let filtered=this.state.news.filter((item)=>{
      return item.title.indexOf(keyword) >-1;
    })
    this.setState( {
      filtered
    })
   
  }
  render()
  {
    const {news,filtered}=this.state;
    return(
      <div>
        <Header getKeyword={this.getKeyword}/>
        <NewsList news={filtered.length===0? news : filtered} />
      </div>
      
    )
  }
}

export default App;