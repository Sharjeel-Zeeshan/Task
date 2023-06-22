import {Link, Outlet} from "react-router-dom"
import { useState, useEffect } from "react"


function Users() {

    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setContent((json)))
    }, []);


    return (
        <>  
        <Outlet/>
     
        <ul>
            {
                content.map((user) => {
                    return (
                        <> 
                        <li><Link to={`/users/${user.id}`}>{user.id}</Link></li>
                        </>
                    )
                }
                  
                )
            }
        </ul>
       
        </>
    )
}

export default Users;
