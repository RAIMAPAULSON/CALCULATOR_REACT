import { useState } from 'react';
import './App.css'
function App() {
  const [inputValue, setInputValue] = useState("0");
  const [error, setError] = useState(null);
  const handleDisplay = (content) => {
    if (inputValue === "0" || error) {
      setInputValue(content);
      setError(error);
    } else {
      setInputValue(oldContent => oldContent + content);
    }
  }
  const handleResult = () => {
    try {
      const result = eval(inputValue);
      if (result === Infinity || isNaN(result)) {
        throw new Error('Invalid expression');
      }
      setInputValue(result.toString())
      setError(null);
    } catch (error) {
      setInputValue('');
      setError(error.message);
    }
  }
  const handleReset = () => {
    setInputValue('0');
    setError(null);
  }
  const handleDelete = () => {
    setInputValue(oldContent => oldContent.slice(0, -1) || '0')
  }

  return (
    <>
      <div style={{ minHeight: '100vh', width: '100%' }} className='main d-flex justify-content-center align-items-center bg-dark'>
        <div style={{ width: '480px' }} className='calc-container rounded'>
          <div className='d-flex justify-content-between'>
            <div><p className='heading'>calc</p></div>
            <div >
              <div className='numbers'>1 2 3</div>
              <div className='d-flex justify-content-between'>
                <div><p style={{ color: 'white', fontWeight: 'bolder' }} className='pe-3'>THEME</p></div>
                <div><button className='border red-button'><i className="fa-solid fa-circle" style={{ color: '#ef0b0b' }}></i></button></div>
              </div>
            </div>
          </div>
          <input type="text" className='input-container' value={inputValue} placeholder={error || '0'} readOnly />
          <div className='button-container'>
            <div className='first-row'>
              <button onClick={() => handleDisplay('7')} className='btn-content'>7</button>
              <button onClick={() => handleDisplay('8')} className='btn-content'>8</button>
              <button onClick={() => handleDisplay('9')} className='btn-content'>9</button>
              <button onClick={handleDelete} style={{ fontSize: '26px', color: 'white', boxShadow: '0 5px 1px -2px rgba(28, 34, 55, 0.829)' }}
                className='DEL'>DEL</button>
              <button onClick={() => handleDisplay('4')} className='btn-content'>4</button>
              <button onClick={() => handleDisplay('5')} className='btn-content'>5</button>
              <button onClick={() => handleDisplay('6')} className='btn-content'>6</button>
              <button onClick={() => handleDisplay('+')} className='btn-content'>+</button>
              <button onClick={() => handleDisplay('1')} className='btn-content'>1</button>
              <button onClick={() => handleDisplay('2')} className='btn-content'>2</button>
              <button onClick={() => handleDisplay('3')} className='btn-content'>3</button>
              <button onClick={() => handleDisplay('-')} className='btn-content'>-</button>
              <button onClick={() => handleDisplay('.')} className='btn-content'>.</button>
              <button onClick={() => handleDisplay('0')} className='btn-content'>0</button>
              <button onClick={() => handleDisplay('/')} className='btn-content'>/</button>
              <button onClick={() => handleDisplay('*')} className='btn-content'>x</button>
            </div>
            <div className='second-row'>
              <button onClick={handleReset} className='reset-content'>RESET</button>
              <button onClick={handleResult} className='equal-content'>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
