import React,{lazy,Suspense} from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faSpinner} from '@fortawesome/free-solid-svg-icons';
import "./App.css";
//components import

const Home = lazy(() => import('../big_components/Home'));



function App() {
  return <Router>
    <Suspense fallback={<div className="Loading_page"><h1>Loading  {<FontAwesomeIcon icon={faSpinner} />}</h1></div>}>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </Suspense>
  </Router>

}

export default App
