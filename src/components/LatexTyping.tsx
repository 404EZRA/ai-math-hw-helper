import { useState, useEffect } from 'react';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

interface LatexTypingProps {
    text: string;
}

function LatexTyping({ text = '', typeSpeed = 10 }) {
    text = text.replace(/\\textbf{([^}]*)}|\\text{([^}]*)}/g, '$1$2'); // Remove \text 
    text = text.replace(/\\begin{[^}]*}|\\end{[^}]*}/g, ''); // Remove \begins and \ends
    text = text.replace(/\\item/g, '•'); // Replace \item with bullets

    return (
        <div>
            <Latex>{text}</Latex>
        </div>
    );
}

export default LatexTyping;
