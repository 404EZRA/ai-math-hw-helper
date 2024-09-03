import { BaseSyntheticEvent, useState } from 'react';
import { InlineMath } from 'react-katex';
import './App.css';
import Header from './components/Header';
import LatexTyping from './components/LatexTyping';
import Latex from 'react-latex-next';

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInputChange = (e: BaseSyntheticEvent) => {
        setInput(e.target.value);
    };

    const renderContent = (text: string) => {
        const parts = text.split(/(\$.*?\$|\$\$.*?\$\$)/g); // Regex to match LaTeX within $...$ or $$...$$
        return parts.map((part, index) => {
            if (part.startsWith('$') && part.endsWith('$')) {
                return <InlineMath key={index} math={part.slice(1, -1)} />;
            } 
            else {
                return <span key={index}>{part}</span>;
            }
        });
      };

    const handleGenerateOutput = () => {
        // setOutput(`${input.split('').reverse().join('')}`);
        setOutput(input);
    };

    const renderLatexOutput = () => {
        return <LatexTyping text={output} />;
    };

    return (
    <div>
        <Header />
        <div className="input-component">
            <div className="input-section">
                <h2>Write your question here...</h2>
                <textarea
                    className='text-area'
                    rows={10}
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your question here..."
                />
                <button onClick={handleGenerateOutput}>Generate AI Output</button>
                <div className="latex-preview">
                    <h4>LaTeX Preview</h4>
                        <div className='latex-preview-container'>{renderContent(input)}</div>
                </div>
            </div>
        </div>
        <div className='output-component'>
            <div className="output-section">
                <h2>Calcubot Response</h2>
                <div className="output-box">
                    {renderLatexOutput()}
                </div>
            </div>
        </div>
    </div>
    )
}

export default App;
