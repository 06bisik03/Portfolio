


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IntroPage from './intro/IntroPage';
import Mvp from './intro/Mvp';
function App() {
 

  return (
    <BrowserRouter>
    
      <Routes>
        <Route index element={<IntroPage />}/>
        <Route path="/mvp" element={<Mvp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
