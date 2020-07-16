import React from 'react';
import {Link} from 'react-router-dom';

const Posts=()=>{
    return(
        <div>
            <ul>
                <li><Link to="/posts/1">POST 1</Link></li>
                <li><Link to="/posts/2">POST 2</Link></li>
                <li><Link to="/posts/3">POST 3</Link></li>
            </ul>
        </div>
    )
};

export default Posts;