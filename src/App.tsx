import { BaseSyntheticEvent, useState } from 'react'
import ListGroup from './components/ListGroup'
import './App.css'
import Alert from './components/Alert'
import Button from './components/Button'
import Navbar from './components/Navbar'
import { BlockMath, InlineMath } from 'react-katex'
import LaTeXExample from './components/LatexExample'

function App() {
    // let items = [
    //     'New York',
    //     'San Francisco',
    //     'Tokyo',
    //     'Montreal',
    //     'Paris',
    // ];

    // const handleSelectItem = (item: string) => {
    //     console.log(item);
    // }

    // const [alertVisible, updateAlertVisible] = useState(false);

    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInputChange = (e: BaseSyntheticEvent) => {
        setInput(e.target.value);
    };

    const renderContent = (text: string) => {
        const parts = text.split(/(\$.*?\$|\$\$.*?\$\$)/g); // Regex to match LaTeX within $...$ or $$...$$
        return parts.map((part, index) => {
            console.log(part.slice(1, -1));
            if (part.startsWith('$') && part.endsWith('$')) {
                return <InlineMath key={index} math={part.slice(1, -1)} />;
            } 
            else {
                return <span key={index}>{part}</span>;
            }
        });
      };

    const handleGenerateOutput = () => {
        // Simulate AI response (for now, just reversing the input)
        setOutput(`${input.split('').reverse().join('')}`);
    };

    return (
    <div>
        {/* { alertVisible && <Alert onClose={() => updateAlertVisible(false)}>i want to die why is this so hard</Alert> }
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
        <Button color="secondary" onClick={() => updateAlertVisible(true)}>Click Me!</Button> */}
        <Navbar></Navbar>
        <div className="input-component">
            <div className="input-section">
                <h2>Write your question here...</h2>
                <textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your question here..."
                />
                <button onClick={handleGenerateOutput}>Generate AI Output</button>
                <div className="latex-preview">
                <h4>LaTeX Preview</h4>
                    <div>{renderContent(input)}</div>
                </div>
            </div>
        </div>
        <div className='output-component'>
            <div className="output-section">
                <h2>Calcubot Response</h2>
                <div className="output-box">{renderContent(output)}</div>
            </div>
        </div>
    </div>
    )
}

export default App;
