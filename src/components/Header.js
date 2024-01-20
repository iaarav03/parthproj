import { useState } from "react"
import { Link } from "react-router-dom";
import Logo from "../assets/images/unnamed.webp";



const Title  = ()=>(
    
    <a href="\">
    <img className="logo"
    src= {Logo} />
    </a>
)
export const Header = ()=>
{
     const [login,SetLogin] = useState(false);
    // const [title,setTitle] = useState("Food Villa")
    // const[isTitleToggle,setTitleToggle] = useState(true);
    const [isTitleToggled, setIsTitleToggled] = useState(false);


    const getTitle = isTitleToggled ? "New Food App" : "Food Villa";

    const toggleTitle = () => {
        setIsTitleToggled(!isTitleToggled);
    };


    return (
        
        <div className="bg-lime-800">
            <Title/>
            <h1>{getTitle}</h1>
            <button onClick={toggleTitle}>change Title</button>
            <div className="nav-items">
            <ul>
                <li><Link to = "./home">Home</Link></li>
                <li><Link to = "./about">About</Link></li>
                <li ><Link to = "./contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
            </div>
            {login?<button onClick={()=>SetLogin(false)}>Login</button>:<button onClick={()=>SetLogin(true)}>Logout</button>}
            
             
        </div>
    )
}
