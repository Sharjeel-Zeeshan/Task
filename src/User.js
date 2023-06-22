import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


function User() {
    const [content, setContent] = useState({})
    
    const{id}=useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(json => setContent(json))
    },[id]);


    return (
        <>
           
           <p>{content.name}</p>
        </>
    )
}

export default User;
