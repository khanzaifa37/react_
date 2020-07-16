import React from 'react';
import "../css/index.css";

const Header=(props) =>{
        return(
            
               /* <header style={{background:`${this.state.active?'red':'blue'}`}}></header> */
                <header >
                <div className="logo"> LOGO </div>
                <input type="text" onChange={props.getKeyword}></input>
                
                </header>
            
        )
    
}


export default Header;