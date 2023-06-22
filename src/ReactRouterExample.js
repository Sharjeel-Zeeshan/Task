import { Route, Routes , Link } from "react-router-dom"
import { useState, useEffect } from "react"
function NotFound() {
    return (
        < img src="./images/notfound.jpg" />
    )
}

function UnderConstruction() {
    return (
        <h1>This page is under Construction</h1>
    )
}


function Home() {
    return (
        <h1>This is home component</h1>
    )
}

function Posts() {
    const [content, setContent] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json => setContent(json))

    }, []);
    return (
        <ul>
            {
                content.map((post) => {
                    return (
                        <> 
                        <li><Link to={`/posts/${post.id}`}>{post.id}</Link></li>
                        </>
                    )
                }
                  
                )
            }
        </ul>
    )
}

function Post() {
    const [content, setContent] = useState([]);
    const [post,setPost] = useState("");

    const handleClick = () => {
        
          const Post = Posts();
          setPost(Post);
        
    }
    return (
        <>
      <Link to="/posts" onClick={handleClick}>{post.id}</Link>
        </>
    )
}



function ReactRouterExample() {
    return (

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/UnderConstruction" element={<UnderConstruction />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/posts" element={<Posts />}>
                <Route path=":id" element={<Posts />} />
            </Route>
            <Route path="/posts" element={<Post />}>
                <Route path=":id" element={<Post />} />
            </Route>

        </Routes>


    )
}
export default ReactRouterExample;
