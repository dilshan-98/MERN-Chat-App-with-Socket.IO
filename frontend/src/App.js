import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chats from './Pages/Chats';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} exact />
        <Route path='/chats' element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
