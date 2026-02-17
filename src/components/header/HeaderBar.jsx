import { useState } from "react"
import './Header.css'

export default function HeaderBar(){
    const [value,setValue] = useState("English")

    return(
        <div className="headerbar">
            <div className="headerbarelement">
                <div>
                    <h1>Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%!</h1>
                    <a>Shop Now</a>
                </div>
                <select className="selectoption" value={value} onChange={(e) => setValue(e.target.value)}>
                    <option value="English">English</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Italy">Italy</option>
                </select>
            </div>
        </div>
    )
}