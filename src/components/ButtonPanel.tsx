import { useState } from 'react';
import Latex from 'react-latex-next';
import { AttachMoney, MoneyOff } from '@mui/icons-material';
import { Switch, Tooltip } from '@mui/material';
import './ButtonPanel.css';

interface ButtonPanelProps {
    insertLatex: (latex: string) => void;
}

const ButtonPanel = ({ insertLatex } : ButtonPanelProps) => {
    const [toggleInline, setToggleInline] = useState<boolean>(true);
    
    const handleToggleInline = () => {
        setToggleInline(!toggleInline);
    }

    const handleButtonClick = (latex: string) => {
        if (!toggleInline) {
            insertLatex(latex.slice(1, -1));
        } else {
            insertLatex(latex);
        }
    };

    const buttonGroups = [
        {
            items: [
                { label: '$\\log$', latex: '\\log' },
                { label: '$\\ln$', latex: '\\ln' },
                { label: '$\\exp$', latex: '\\exp' },
                { label: '$\\lg$', latex: '\\lg' },
            ],
        },
        {
            items: [
                { label: '$\\sin$', latex: '\\sin' },
                { label: '$\\cos$', latex: '\\cos' },
                { label: '$\\tan$', latex: '\\tan' },
            ],
            dropdownItems: [
                { label: '$\\csc$', latex: '\\csc' },
                { label: '$\\sec$', latex: '\\sec' },
                { label: '$\\cot$', latex: '\\cot' },
                { label: '$\\sinh$', latex: '\\sinh' },
                { label: '$\\cosh$', latex: '\\cosh'},
                { label: '$\\tanh$', latex: '\\tanh' },
                { label: '$\\coth$', latex: '\\coth' },
            ]
        },
        {
            items: [
                { label: '$x^{n}$', latex: 'x^{n}' },
                { label: '$x_{n}$', latex: 'x_{n}' },
                { label: '$\\sqrt{}$', latex: '\\sqrt{}' },
                { label: '$\\frac{a}{b}$', latex: '\\frac{}{}' },
                { label: '$\\sum_{}^{}$', latex: '\\sum_{}^{}' },
                { label: '$\\prod_{}^{}$', latex: '\\prod_{}^{}' },
                { label: '$\\int_{}^{}$', latex: '\\int_{}^{}' },
            ],
            dropdownItems: [
                { label: '$\\sqrt[n]{x}$', latex: '\\sqrt[n]{x}' },
                { label: '$\\oint_{}^{}$', latex: '\\oint_{}^{}' },
                { label: '$\\frac{d}{dx}$', latex: '\\frac{d}{dx}' },
                { label: '$\\frac{\\partial}{\\partial x}$', latex: '\\frac{\\partial}{\\partial x}' },
                { label: '$\\implies$', latex: '\\implies' },
                { label: '$\\iff$', latex: '\\iff' },
                { label: '$\\times$', latex: '\\times' },
                { label: '$\\#$', latex: '\\#' },
                { label: '$\\wedge$', latex: '\\wedge' },
                { label: '$\\vee$', latex: '\\vee'},
                { label: '$\\in$', latex: '\\in' },
                { label: '$\\notin$', latex: '\\notin' },
                { label: '$\\smallsetminus$', latex: '\\smallsetminus' },
                { label: '$\\lim_{x \\to 0}$', latex: '\\lim_{x \\to 0}'},
                { label: '$\\infty$', latex: '\\infty' },
                { label: '$\\pm$', latex: '\\pm' },
                { label: '$\\mp$', latex: '\\mp' },
                { label: '$\\emptyset$', latex: '\\emptyset'},
                { label: '$\\forall$', latex: '\\forall' },
                { label: '$\\exists$', latex: '\\exists' },
                { label: '$\\neq$', latex: '\\neq' },
                { label: '$\\Delta$', latex: '\\Delta'},
                { label: '$\\to$', latex: '\\to' },
                { label: '$|$', latex: '|'},
                { label: '$\\nmid$', latex: '\\nmid' },
                { label: '$\\{  \\}$', latex: '\\{  \\}' },
                { label: '$\\neg$', latex: '\\neg' },
                { label: '$\\approx$', latex: '\\approx'},
            ]
        },
        {
            items: [
                { label: '$\\lt$', latex: '\\lt' },
                { label: '$\\gt$', latex: '\\gt' },
                { label: '$\\le$', latex: '\\sqrt{}' },
                { label: '$\\ge$', latex: '\\ge' },
            ],
            dropdownItems: [
                { label: '$\\leqslant$', latex: '\\leqslant' },
                { label: '$\\geqslant$', latex: '\\geqslant' },
                { label: '$\\ll$', latex: '\\ll'},
                { label: '$\\gg$', latex: '\\gg'},
                { label: '$\\prec$', latex: '\\prec' },
                { label: '$\\succ$', latex: '\\succ' },
                { label: '$\\lesssim$', latex: '\\lesssim' },
                { label: '$\\gtrsim$', latex: '\\gtrsim'},
                { label: '$\\nless$', latex: '\\nless' },
                { label: '$\\ngtr$', latex: '\\ngtr' },
                { label: '$\\nleq$', latex: '\\nleq' },
                { label: '$\\ngeq$', latex: '\\ngeq'},
                { label: '$\\nleqslant$', latex: '\\nleqslant' },
                { label: '$\\ngeqslant$', latex: '\\ngeqslant' },
                { label: '$\\nprec$', latex: '\\nprec' },
                { label: '$\\nsucc$', latex: '\\nsucc'},
            ]
        },
        {
            items: [
                { label: '$\\alpha$', latex: '\\alpha' },
                { label: '$\\beta$', latex: '\\beta' },
                { label: '$\\gamma$', latex: '\\gamma' },
                { label: '$\\delta$', latex: '\\delta' },
                { label: '$\\epsilon$', latex: '\\epsilon' },
            ],
            dropdownItems: [
                { label: '$\\varepsilon$', latex: '\\varepsilon' },
                { label: '$\\zeta$', latex: '\\zeta' },
                { label: '$\\eta$', latex: '\\eta'},
                { label: '$\\theta$', latex: '\\theta' },
                { label: '$\\vartheta$', latex: '\\vartheta' },
                { label: '$\\iota$', latex: '\\iota' },
                { label: '$\\kappa$', latex: '\\kappa'},
                { label: '$\\lambda$', latex: '\\lambda' },
                { label: '$\\mu$', latex: '\\mu' },
                { label: '$\\nu$', latex: '\\nu' },
                { label: '$\\xi$', latex: '\\xi'},
                { label: '$o$', latex: 'o'},
                { label: '$\\pi$', latex: '\\pi' },
                { label: '$\\varpi$', latex: '\\varpi' },
                { label: '$\\rho$', latex: '\\rho' },
                { label: '$\\varrho$', latex: '\\varrho'},
                { label: '$\\sigma$', latex: '\\sigma'},
                { label: '$\\varsigma$', latex: '\\varsigma' },
                { label: '$\\tau$', latex: '\\tau' },
                { label: '$\\upsilon$', latex: '\\upsilon' },
                { label: '$\\phi$', latex: '\\phi'},
                { label: '$\\varphi$', latex: '\\varphi' },
                { label: '$\\chi$', latex: '\\chi' },
                { label: '$\\psi$', latex: '\\psi' },
                { label: '$\\omega$', latex: '\\omega'},
            ]
        },
        {
            items: [
                { label: '$\\bigcup_{}^{}$', latex: '\\bigcup_{}^{}' },
                { label: '$\\bigcap_{}^{}$', latex: '\\bigcap_{}^{}' },
            ],
            dropdownItems: [
                { label: '$\\bigvee_{}^{}$', latex: '\\bigvee_{}^{}' },
                { label: '$\\bigwedge_{}^{}$', latex: '\\bigwedge_{}^{}' },
                { label: '$\\bigoplus_{}^{}$', latex: '\\bigoplus_{}^{}' },
                { label: '$\\bigotimes_{}^{}$', latex: '\\bigotimes_{}^{}' },
                { label: '$\\coprod_{}^{}$', latex: '\\coprod_{}^{}'},
                { label: '$\\bigsqcup_{}^{}$', latex: '\\bigsqcup_{}^{}' },
            ]
        },
        {
            items: [
                { label: '$\\subset$', latex: '\\subset' },
                { label: '$\\cup$', latex: '\\cup' },
                { label: '$\\cap$', latex: '\\cap' },
            ],
            dropdownItems: [
                { label: '$\\subseteq$', latex: '\\subseteq' },
                { label: '$\\subsetneq$', latex: '\\subsetneq' },
                { label: '$\\nsubseteq$', latex: '\\nsubseteq' },
                { label: '$\\bigtriangleup$', latex: '\\bigtriangleup' },
                { label: '$\\bigtriangledown$', latex: '\\bigtriangledown'},
                { label: '$\\bigcirc$', latex: '\\bigcirc' },
                { label: '$\\triangleleft$', latex: '\\triangleleft' },
                { label: '$\\triangleright$', latex: '\\triangleright' },
                { label: '$\\square$', latex: '\\square'},
            ]
        },
        {
            items: [
                { label: '$\\gets$', latex: '\\gets' },
                { label: '$\\to$', latex: '\\to' },
                { label: '$\\longleftarrow$', latex: '\\longleftarrow' },
                { label: '$\\longrightarrow$', latex: '\\longrightarrow' },
                { label: '$\\leftrightarrow$', latex: '\\leftrightarrow' },
            ],
            dropdownItems: [
                { label: '$\\leftharpoonup$', latex: '\\leftharpoonup' },
                { label: '$\\rightharpoonup$', latex: '\\rightharpoonup' },
                { label: '$\\mapsto$', latex: '\\mapsto'},
                { label: '$\\longmapsto$', latex: '\\longmapsto' },
                { label: '$\\longleftrightarrow$', latex: '\\longleftrightarrow' },
                { label: '$\\leftharpoondown$', latex: '\\leftharpoondown' },
                { label: '$\\rightharpoondown$', latex: '\\rightharpoondown'},
                { label: '$\\leftrightharpoons$', latex: '\\leftrightharpoons' },
                { label: '$\\rightleftharpoons$', latex: '\\rightleftharpoons' },
                { label: '$\\updownarrow$', latex: '\\updownarrow' },
                { label: '$\\uparrow$', latex: '\\uparrow'},
                { label: '$\\downarrow$', latex: '\\downarrow'},
                { label: '$\\swarrow$', latex: '\\swarrow' },
                { label: '$\\searrow$', latex: '\\searrow' },
                { label: '$\\upuparrows$', latex: '\\upuparrows' },
                { label: '$\\curvearrowleft$', latex: '\\curvearrowleft'},
                { label: '$\\curvearrowright$', latex: '\\curvearrowright'},
                { label: '$\\nwarrow$', latex: '\\nwarrow' },
                { label: '$\\nearrow$', latex: '\\nearrow' },
                { label: '$\\rightrightarrows$', latex: '\\rightrightarrows' },
                { label: '$\\circlearrowright$', latex: '\\circlearrowright'},
                { label: '$\\rightarrowtail$', latex: '\\rightarrowtail' },
                { label: '$\\rightsquigarrow$', latex: '\\rightsquigarrow' },
                { label: '$\\looparrowright$', latex: '\\looparrowright' },
                { label: '$\\nrightarrow$', latex: '\\nrightarrow'},
            ]
        },
        {
            items: [
                { label: '$\\Leftarrow$', latex: '\\Leftarrow' },
                { label: '$\\Rightarrow$', latex: '\\Rightarrow' },
                { label: '$\\Leftrightarrow$', latex: '\\Leftrightarrow' },
            ],
            dropdownItems: [
                { label: '$\\Longleftarrow$', latex: '\\Longleftarrow' },
                { label: '$\\Longrightarrow$', latex: '\\Longrightarrow' },
                { label: '$\\Longleftrightarrow$', latex: '\\Longleftrightarrow' },
                { label: '$\\Uparrow$', latex: '\\Uparrow' },
                { label: '$\\Downarrow$', latex: '\\Downarrow'},
                { label: '$\\Updownarrow$', latex: '\\Updownarrow' },
                { label: '$\\nLeftarrow$', latex: '\\nLeftarrow' },
                { label: '$\\nRightarrow$', latex: '\\nRightarrow' },
                { label: '$\\nLeftrightarrow$', latex: '\\nLeftrightarrow'},
            ]
        },
        {
            items: [
                { label: '$\\overrightarrow{AB}$', latex: '\\overrightarrow{}' },
                { label: '$\\underrightarrow{AB}$', latex: '\\underrightarrow{}' },
            ],
            dropdownItems: [
                { label: '$\\widehat{abc}$', latex: '\\widehat{}' },
                { label: '$\\widetilde{abc}$', latex: '\\widetilde{}' },
                { label: '$\\overline{abc}$', latex: '\\overline{}' },
                { label: '$\\underline{abc}$', latex: '\\underline{}' },
                { label: '$\\overbrace{abc}$', latex: '\\overbrace{}'},
                { label: '$\\underbrace{abc}$', latex: '\\underbrace{}' },
                { label: '$\\overset{abc}{AB}$', latex: '\\overset{}{}'},
                { label: '$\\underset{abc}{AB}$', latex: '\\underset{}{}' },
            ]
        },
        {
            items: [
                { label: '$\\left(  \\right)$', latex: '\\left(  \\right)' },
                { label: '$\\left\\lfloor  \\right\\rfloor$', latex: '\\left\\lfloor  \\right\\rfloor' },
            ],
            dropdownItems: [
                { label: '$\\left\\{  \\right\\}$', latex: '\\left\\{  \\right\\}' },
                { label: '$\\left\\lceil  \\right\\rceil$', latex: '\\left\\lceil  \\right\\rceil' },
                { label: '$\\left|  \\right|$', latex: '\\left|  \\right|' },
                { label: '$\\left[  \\right]$', latex: '\\left[  \\right]' },
                { label: '$\\left\\|  \\right\\|$', latex: '\\left\\|  \\right\\|'},
                { label: '$\\left\\langle  \\right\\rangle$', latex: '\\left\\langle  \\right\\rangle' },
            ]
        },
        {
            items: [
                { label: '$\\mathrm{C}_{n}^{k}$', latex: '\\mathrm{C}_{}^{}' },
                { label: '$\\binom{n}{k}$', latex: '\\binom{}{}' },
            ],
        },
    ];

    return (
        <div className="button-panel">
            <div className='inline-toggle'>
                <MoneyOff />
                    <Tooltip title="Toggle auto inline math mode " placement='top'>
                        <Switch defaultChecked
                            checked={toggleInline}
                            onChange={handleToggleInline}
                        />
                    </Tooltip>
                <AttachMoney />
            </div>
            {buttonGroups.map((group, index) => (
                <div key={index} className="button-set-dropdown">
                    {group.items.map((button, idx) => (
                        <button key={idx} onClick={() => handleButtonClick(`$${button.latex}$`)}>
                            <Latex>{button.label}</Latex>
                        </button>
                    ))}
                    {group.dropdownItems && (
                        <div className="dropdown-content">
                            {group.dropdownItems.map((dropdownButton, dIdx) => (
                                <button key={dIdx} onClick={() => handleButtonClick(`$${dropdownButton.latex}$`)}>
                                    <Latex>{dropdownButton.label}</Latex>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ButtonPanel;
