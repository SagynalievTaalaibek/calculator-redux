import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { calculate, deleteLastInput, setInputValue } from './CalculatorSlice';

const Calculator = () => {
  const symbols: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '+',
    '-',
    '/',
    '*',
  ];
  const inputValue = useSelector(
    (state: RootState) => state.calculate.inputValue,
  );

  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: '2px solid black',
        maxWidth: '600px',
        padding: '5px',
        marginTop: '20px',
        textAlign: 'end',
      }}
    >
      <div
        style={{
          padding: '10px 5px',
          minHeight: '20px',
          fontSize: '20px',
          border: '2px solid black',
          marginBottom: '10px',
        }}
      >
        {inputValue}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {symbols.map((symbol, index) => (
          <div
            style={{
              width: '100px',
              padding: '5px',
              border: '1px solid black',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            key={index}
            onClick={() => dispatch(setInputValue(symbol))}
          >
            {symbol}
          </div>
        ))}
        <div>
          <button onClick={() => dispatch(calculate())}>=</button>
          <button
            onClick={() => dispatch(deleteLastInput())}
            style={{ marginLeft: '5px' }}
          >
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
