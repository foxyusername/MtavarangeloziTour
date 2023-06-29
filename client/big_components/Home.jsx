import '../Home_css/Home.css';
import Header from '../Home_components/Header';
import Body  from "../Home_components/Body";
import Videos from '../Home_components/Videos';
import Contact from '../Home_components/Contact';
import Language from '../Home_components/Language';
import { useState,useRef, useEffect, useReducer } from 'react';
const Home=()=>{

  const [showLanguage,setshowLanguage]=useState(false);
  const [scrollTo,setScrollTo]=useState('false');

  let component_ref=useRef();

  function scroll(){
    setScrollTo('scroll');
    setScrollTo('false');
  console.log(scrollTo);
  component_ref.current.scrollIntoView({behavior: 'smooth'});  
}

  function getShowLanguage(data){
    setshowLanguage(data);
    console.log(data);
  } 
return <div className='Home_main_div'>
   <Header getShowLanguage={getShowLanguage} scroll={scroll}/>
   <Body scroll={scroll}/>
   <div ref={component_ref}>
   <Videos/>
   </div>
   <Contact />
  {showLanguage ? <Language getShowLanguage={getShowLanguage}/> : null}
</div>    
}

export default Home;