import React from 'react';
const btn=props=>{
    return(
        <h1 onClick={props.onClick}> {props.name}</h1>    
        )
}
export default btn;