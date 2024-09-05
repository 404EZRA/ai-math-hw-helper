import { BaseSyntheticEvent, useState } from "react";
import { Settings, Visibility, VisibilityOff } from "@mui/icons-material";
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleInputChange = (e: BaseSyntheticEvent) => {
        setInput(e.target.value);
    };

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }
        
    return (
        <header>
            <nav className='header'>
                <div className="accordian-header">
                    <Settings
                        className={`settings-icon ${isOpen ? 'open' : ''}`} 
                        onClick={handleClick}
                        fontSize="large"
                    />
                </div>
                {isOpen && (
                <div className="accordion-content">
                    <h4>Settings</h4>
                    <div className="api-key-component">
                        <input
                            type={isVisible ? 'text' : 'password'}
                            className='api-key-input'
                            value={input}
                            onChange={handleInputChange}
                            placeholder="OpenAI API Key*"
                        />
                        <div className="visibility-button">
                            {isVisible ? <VisibilityOff onClick={handleVisibility} /> : <Visibility onClick={handleVisibility} />}
                        </div>
                    </div>
                    <span className="disclaimer">*ChatGPT API Key is required in order for this application to function properly.</span>
                </div>
            )}
            </nav>
        </header>
    )
}

export default Header;
