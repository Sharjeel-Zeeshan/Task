import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Not Found </h1>
           
            < img src="./images/notfound.jpg" />

            <button onClick={()=>{navigate('/')}}>Back to Home</button>

        </>
    )
}

export default NotFound;
