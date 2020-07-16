import React from 'react';
import {css} from 'glamor';

const NewsListItem=(props)=>{
    
    let news_item=css({
        padding:'20px',
        boxSizing:'border-box',
        borderBottom:'1px solid grey',
        ':hover':{
            color:'red'
        },
        '@media(max-width:800px)': {
            color:'blue'
        }
    });

    let item_grey=css({
        background:'#f1f1f1'
    });

    return(
        <div className={`${news_item} ${item_grey}`}>
            <h3>{props.item.title}</h3>
            <p>{props.item.feed}</p>
        </div>
    )
}

export default NewsListItem;