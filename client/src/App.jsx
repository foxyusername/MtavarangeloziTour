import React,{lazy,Suspense} from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

//components import

const Home = lazy(() => import('../big_components/Home'));


function App() {
  return <Router>
    <Suspense fallback={<h1>loading...</h1>}>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </Suspense>
  </Router>

}

export default App
