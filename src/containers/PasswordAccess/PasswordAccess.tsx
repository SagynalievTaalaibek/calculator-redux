import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  checkPassword,
  deleteLastInput,
  setInputValue,
} from './PasswordAccessSlice';

const PasswordAccess = () => {
  const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const passwordValue = useSelector(
    (state: RootState) => state.password.outputValue,
  );
  const access = useSelector((state: RootState) => state.password.access);

  const dispatch = useDispatch();

  const screenStyle = {
    backgroundColor: access
      ? 'green'
      : passwordValue === 'Access Denied'
        ? 'red'
        : 'white',
    padding: '10px 5px',
    minHeight: '20px',
    fontSize: '20px',
    border: '2px solid black',
    marginBottom: '10px',
  };

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
      <div style={screenStyle}>{passwordValue}</div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {numbers.map((number, index) => (
          <div
            style={{
              width: '100px',
              padding: '5px',
              border: '1px solid black',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            key={index}
            onClick={() => dispatch(setInputValue(number))}
          >
            {number}
          </div>
        ))}
        <button onClick={() => dispatch(deleteLastInput())}>&lt;</button>
        <button onClick={() => dispatch(checkPassword())}>E</button>
      </div>
    </div>
  );
};

export default PasswordAccess;
