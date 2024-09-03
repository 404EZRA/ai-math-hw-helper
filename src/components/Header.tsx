import { useState } from "react";
import { Settings } from "@mui/icons-material";
import './Header.css';

const Header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        console.log('Settings Click!');
        setClicked(!clicked);
    }
        
    return (
        <header>
            <nav className='navbar'>
                <div className="navbar-container d-flex">
                    <Settings
                        className={`icon ${clicked ? 'clicked' : ''}`} 
                        onClick={handleClick}
                        fontSize="large"
                    />
                </div>
            </nav>
        </header>
    )
}

export default Header;
