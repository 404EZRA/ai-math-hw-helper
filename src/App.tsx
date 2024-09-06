import { BaseSyntheticEvent, useRef, useState } from 'react';
import { InlineMath } from 'react-katex';
import Header from './components/Header';
import LatexTyping from './components/LatexTyping';
import ButtonPanel from './components/ButtonPanel';
import 'katex/dist/katex.min.css';
import './App.css';

function App() {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [apiKey, setApiKey] = useState<string>('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleInputChange = (e: BaseSyntheticEvent) => {
        setInput(e.target.value);
    };

    const handleGenerateOutput = () => {
        setOutput(input);
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

    const renderLatexOutput = () => {
        return <LatexTyping text={output} />;
    };

    const insertLatex = (latex: string) => {
        var cursorPosition = textareaRef.current?.selectionStart;
        setInput(input.slice(0, cursorPosition) + latex + input.slice(cursorPosition, input.length + 1));
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
                        ref={textareaRef}
                        className='text-area'
                        rows={5}
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your question here..."
                    />
                    <button onClick={handleGenerateOutput}>Generate AI Output</button>
                    <div className="latex-preview">
                        <h4>LaTeX Preview</h4>
                        <span>LaTeX expressions must be wrapped between $. Example: {'$\\frac{a}{b} + \\frac{c}{d}$'}</span>
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
