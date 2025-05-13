import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Main from './Components/Main.jsx';
import ServiceOne from './Components/ServiceOne.jsx';
// import ServiceTwo from './pages/ServiceTwo.jsx';
// import ServiceThree from './pages/ServiceThree.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Main />
          </>
        } />
        <Route path="/service-one" element={<ServiceOne />} />
        {/* <Route path="/service-two" element={<ServiceTwo />} />
        <Route path="/service-three" element={<ServiceThree />} /> */}
      </Routes>
    </Router>
  );
}

export default App;