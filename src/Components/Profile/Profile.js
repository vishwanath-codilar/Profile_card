import React, { useEffect, useState } from 'react';
import "../scss/app.scss";

import Loader from '../contentloader/loader';

export default function Profile({ state }) {
  console.log(state);
  const [search,setSearchTearm]= useState("");
  console.log(search);
  const [user, setUser] = useState(null);
  var x = state;


  

  useEffect(() => {

    setTimeout(async() => {
      const response = await fetch('https://reqres.in/api/users?page=' + x);
      const data = await response.json();
      setUser(data.data);
    }, 1000);

  }, [x])

  // getUsers();
  return (
    <>
      <div className="search"><input type="text" placeholder="Search...." onChange={(event)=>{setSearchTearm(event.target.value);}} /> </div>
      <div className="row">
       
      {user === null ? [1,2,3,4,5,6].map((n)=> <Loader key={n}/>  ) : user.filter((el)=>{
        if(search === ""){
          return el;
        }else if(el.first_name.toLowerCase().startsWith(search.toLocaleLowerCase())){
          console.log(search)
          return el;
        }
      }).map((el) => {
            return (

              <div className=" col " key={el.id}>
                <div className="dp">
                  <img src={el.avatar} alt="img" />
                </div>
                <div className="username"> {el.first_name} {el.last_name}</div>
                <div className="mailid">{el.email}</div>
              </div>

            )
          })
        }
       
      </div>
      
    </>
  );

}
