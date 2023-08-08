import { Link, Outlet } from "react-router-dom"
function homePage() {
    return(
    <>
    <h1>HomePage</h1>
    <Link to={"/ebook"} ><input type="button" value={"E-book"}></input></Link>
    <Link to={"/music"} ><input type="button" value={"Music"}></input></Link>
    <Link to={"/movie"} ><input type="button" value={"Movie"}></input></Link>
    <Link to={"/videogame"} ><input type="button" value={"Video Game"}></input></Link>
    <Link to={"/inquiry"} ><input type="button" value={"Customer Inquiry"}></input></Link>
    <Outlet/>
    </>
    )
}

export default homePage