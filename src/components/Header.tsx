import { BaseSyntheticEvent, useState } from "react";
import { Settings } from "@mui/icons-material";
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleInputChange = (e: BaseSyntheticEvent) => {
        setInput(e.target.value);
    };
        
    return (
        <header>
            <nav className='accordion'>
                <div className="accordian-header">
                    <Settings
                        className={`icon ${isOpen ? 'open' : ''}`} 
                        onClick={handleClick}
                        fontSize="large"
                    />
                </div>
                {isOpen && (
                <div className="accordion-content">
                    <input
                        className='api-key-input'
                        value={input}
                        onChange={handleInputChange}
                        placeholder="OpenAI API Key"
                    />
                </div>
            )}
            </nav>
        </header>
    )
}

export default Header;
