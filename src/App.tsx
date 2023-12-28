import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PasswordAccess from './containers/PasswordAccess/PasswordAccess';

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => navigate('/')}>Password Access</button>
        <button
          onClick={() => navigate('/calculator')}
          style={{ marginLeft: '10px', backgroundColor: 'blue' }}
        >
          Calculator
        </button>
      </div>
      <div>
        <Routes>
          <Route path={'/'} element={<PasswordAccess />} />
          <Route path={'/calculator'} element={''} />
          <Route
            path={'*'}
            element={<h1 style={{ marginTop: '50px' }}>Not found</h1>}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
