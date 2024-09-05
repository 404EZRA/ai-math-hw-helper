import { BaseSyntheticEvent, useState } from 'react';
import { InlineMath } from 'react-katex';
import './App.css';
import Header from './components/Header';
import LatexTyping from './components/LatexTyping';
import Latex from 'react-latex-next';
import ButtonPanel from './components/ButtonPanel';

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [apiKey, setApiKey] = useState('');

    const handleInputChange = (e: BaseSyntheticEvent) => {
        setInput(e.target.value);
    };

    const renderContent = (text: string) => {
        const parts = text.split(/(\$.*?\$|)/g);
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
        setOutput(input);
    };

    const renderLatexOutput = () => {
        return <LatexTyping text={output} />;
    };

    const insertLatex = (latex: string) => {
        setInput(input + latex);
    }

    return (
    <div>
        <Header />
        <div className='content'>
            <div className="input-component">
                <div className="input-section">
                    <h2>Write your question here...</h2>
                    <ButtonPanel insertLatex={insertLatex}/>
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
    </div>
    )
}

export default App;
