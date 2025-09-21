import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/data?name=React')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      Some stuff
      <h1>{message}</h1>
      More Stuff
    </div>
  );
}

export default App;
