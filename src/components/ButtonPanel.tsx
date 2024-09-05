import Latex from 'react-latex-next';
import './ButtonPanel.css';

interface ButtonPanelProps {
    insertLatex: (text: string) => void;
}

const ButtonPanel = ({ insertLatex } : ButtonPanelProps) => {
    const handleButtonClick = (command: string) => {
        insertLatex(command);
    };

    return (
        <div className="button-panel">
            <div className='button-set'>
                <button onClick={() => handleButtonClick('x^{n}')}><Latex>{'$x^{n}$'}</Latex></button>
                <button onClick={() => handleButtonClick('x_{n}')}><Latex>{'$x_{n}$'}</Latex></button>
                <button onClick={() => handleButtonClick('\\sqrt{}')}><Latex>{'$\\sqrt{x}$'}</Latex></button>
                <button onClick={() => handleButtonClick('\\frac{}{}')}><Latex>{'$\\frac{a}{b}$'}</Latex></button>
                <button onClick={() => handleButtonClick('\\sum_{}^{}')}><Latex>{'$\\sum$'}</Latex></button>
                <button onClick={() => handleButtonClick('\\prod_{}^{}')}><Latex>{'$\\prod$'}</Latex></button>
                <button onClick={() => handleButtonClick('\\int_{}^{}')}><Latex>{'$\\int$'}</Latex></button>
            </div>
            <button onClick={() => handleButtonClick('\\alpha')}>α</button>
            <button onClick={() => handleButtonClick('\\beta')}>β</button>
        </div>
    );
};

export default ButtonPanel;
