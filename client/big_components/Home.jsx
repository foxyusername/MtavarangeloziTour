import '../Home_css/Home.css';
import Header from '../Home_components/Header';
import Body  from "../Home_components/Body";
import Videos from '../Home_components/Videos';
import Contact from '../Home_components/Contact';
import Language from '../Home_components/Language';
import { useState } from 'react';

const Home=()=>{
  
  const [showLanguage,setshowLanguage]=useState(false);

  function getShowLanguage(data){
    setshowLanguage(data);
    console.log(data);
  } 

return <div className='Home_main_div'>
   <Header getShowLanguage={getShowLanguage} />
   <Body />
   <Videos/>
   <Contact />
  {showLanguage ? <Language getShowLanguage={getShowLanguage}/> : null}
</div>    
}

export default Home;