import React from "react";

 const Greet = (prop) =>{
     console.log(prop)
     return(
         <div>
             <h1>
                 Hello world {prop.name}
             </h1>
             {prop.children}
       </div>
     )
 }

export default Greet;