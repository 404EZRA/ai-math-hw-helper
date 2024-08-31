import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const LaTeXExample = () => {
  return (
    <div>
      <h2>LaTeX in React</h2>
      <p>
        This is an inline equation: <InlineMath math="\frac{a}{b} = c" />.
      </p>
      <p>
        This is a block equation:
      </p>
      <BlockMath math="\int_a^b f(x) dx = F(b) - F(a)" />
    </div>
  );
}

export default LaTeXExample;
