import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import pages
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        {/* <Route path="/login" element={<Home/>}/>
        <Route path="/register" element={<Home/>}/>
        <Route path="/author" element={<Home/>}/>
        <Route path="*" element={<Home/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
