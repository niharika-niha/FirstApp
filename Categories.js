import React from 'react';
import {Link} from 'react-router-dom';
const Categories=props=>{
    console.log(props.match.url);
    return(
        <div>
            <Link to={'${props.match.url}/67'}>product id 67</Link>
            <Link to={'${props.match.url}/80'}>product id 80</Link>

            <Link to={'${props.match.url}/90'}>product id 90</Link>

        </div>
    )
}
export default Categories;