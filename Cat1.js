import React from 'react';
const Cat1=props=>{
    console.log(props);
    return(
        <div>
            <h1>id:{props.match.params.id}</h1>
            <h1>name:{props.match.params.name}(optl)</h1>

        </div>
    )
}
export default Cat1;