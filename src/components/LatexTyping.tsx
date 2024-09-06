import { useState, useEffect } from 'react';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

interface LatexTypingProps {
    text: string;
}

function LatexTyping({ text = '', typeSpeed = 10 }) {
    // text = "\\textbf{Quadratic Formula:}\n\n\\text{The quadratic equation is given by:}\n\n\\[ax^2 + bx + c = 0\\]\n\n\\text{The solution to the quadratic equation can be found using the quadratic formula:}\n\n\\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\]\n\n\\text{Where:}\n\\begin{itemize}\n    \\item a, b, and c are the coefficients of the equation,\n    \\item \\pm indicates that there are two possible solutions: one with the plus sign and one with the minus sign.\n\\end{itemize}\n\n\\textbf{Example:}\n\n\\text{Let's solve the quadratic equation } 2x^2 - 4x - 6 = 0.\n\n\\text{Here, } a = 2, b = -4, \\text{ and } c = -6. \\text{ Plugging these values into the quadratic formula:}\n\n\\[x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4(2)(-6)}}{2(2)}\\]\n\n\\text{Simplifying:}\n\n\\[x = \\frac{4 \\pm \\sqrt{16 + 48}}{4}\\]\n\n\\[x = \\frac{4 \\pm \\sqrt{64}}{4}\\]\n\n\\[x = \\frac{4 \\pm 8}{4}\\]\n\n\\text{So the solutions are:}\n\n\\[x_1 = \\frac{4 + 8}{4} = 3, \\quad x_2 = \\frac{4 - 8}{4} = -1\\]\n\n\\text{Thus, the solutions to the equation } 2x^2 - 4x - 6 = 0 \\text{ are } x = 3 \\text{ and } x = -1.";
    text = text.replace(/\\textbf{([^}]*)}|\\text{([^}]*)}/g, '$1$2'); // Remove \text 
    text = text.replace(/\\begin{[^}]*}|\\end{[^}]*}/g, ''); // Remove \begins and \ends
    text = text.replace(/\\item/g, '•'); // Replace \item with bullets
    console.log(text)

    return (
        <div>
            <Latex>{text}</Latex>
        </div>
    );
}

export default LatexTyping;
