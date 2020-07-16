import React from 'react';
import UserHoc from '../hoc/user_hoc';

const User=(props)=>{
    // console.log(props)
    return(
        <div>
            User 1
        </div>
    )
};

const User1=(props)=>{
    // console.log(props)
    return(
        <div>
            User 2
        </div>
    )
};

export default UserHoc(User,User1,"hello");