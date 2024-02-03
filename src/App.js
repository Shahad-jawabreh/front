import './App.css';
import { Layout } from './layout/Layout.js';
import {Feedback} from './pages/feedback.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
     <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Layout/>}>
              <Route path='feedback' element={<Feedback/>} />
          </Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
