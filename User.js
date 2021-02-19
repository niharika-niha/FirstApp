import React from "react";
const User=({details})=>{

return(
    <div>
    <div className="user-div">
        {
           details.length > 0 ?
              details.map((user1)=>(
                <div className="us-div">
                    <p>UserId: {user1.uid}</p>
                    <p>Uname: {user1.uname}</p>
                    <p>Password: {user1.pwd}</p>
                    <p>Email: {user1.email}</p>
                    <p>ContactNo: {user1.contact}</p>
                </div>
              ))
              :
              <h2>No data found</h2>
           }

         </div>
      </div>
    )
}
export default User