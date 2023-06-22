import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import NotFound from "./NotFound";
import Users from "./Users";
import NavBar from "./NavBar";
import User from "./User";


function ReactRouter() {
    return (
        <>        <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Blog" element={<Blog />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/users" element={<Users />}>
                    <Route path=":id" element={<User />} />
                </Route>
            </Routes>
        </>

    )


}
export default ReactRouter;
