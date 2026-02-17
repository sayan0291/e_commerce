import {NavLink} from "react-router-dom"

export default function Header(){
    return(
        <>
            <header>
                <div>
                    <div>
                        <h1 className="logo">EXCLUSIVE</h1>
                    </div>
                    <nav>
                        <NavLink className="navlink" to="/home">Home</NavLink>
                        <NavLink className="navlink" to="/contact">Contact</NavLink>
                        <NavLink className="navlink" to="/about">About</NavLink>
                        <NavLink className="navlink" to="/sign-up">Sign UP</NavLink>
                    </nav>
                    <div className="searchsection">
                        <div className="search">
                            <input type="text" placeholder="What Are You Looing For ?" />
                            <img src="/src/Images/Search.png" alt="search icon" />
                        </div>
                        <div className="cart">
                            <img src="/src/Images/Wish.png" alt="wish list" />
                            <img src="/src/Images/Cart1.png" alt="cart" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}