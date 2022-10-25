import React from "react";
import { useEffect,useState } from "react";

const Users = () => {
const [users, setUsers] = useState([])
// Çektiğimiz veri gelene kadar kullanıcıya ekranda bilgi vermek için bir state daha kullandım.
const[loading, setLoading] = useState(true)

// Api çekme işlemlerinde veri ilk kez çekmek için useEffect Hook'unu kullanıyoruz. 
// Bu çektiğimiz veriyide göstermek için useState Hook'unu kullanıyoruz. 
    useEffect(()=>{
        try {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((data)=>setUsers(data))
            .then(()=>setLoading(false))
            
            
        } catch (error) { console.log(error)
            
        }
        
    },[]);

  return (
    <div className="users">
        <h1>Users Information</h1>

        {loading && <div className="load">Loading...</div>}
        <ul>
{users.map((user)=>

<li key={user.id}>{user.name} </li>)}

        </ul>



    </div>
  )
}

export default Users