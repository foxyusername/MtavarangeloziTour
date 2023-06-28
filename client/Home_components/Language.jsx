import "../Home_css/Language.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faCheck, faC} from '@fortawesome/free-solid-svg-icons';
export default function Language({getShowLanguage}){
   
    const [language,setLanguage]=useState('');
   
let georgian='Georgian'
let english='English'

    function ChangeLanguageView(){
  getShowLanguage(false);

}

function changeLanguageGeo(){
    setLanguage('Georgian');
    localStorage.setItem('language','Georgian');
}

function changeLanguageEng(){
    setLanguage('English');
    localStorage.setItem('language','English');
}

   return <div className="Language_main_div">
    <h1 id="exit_btn" onClick={ChangeLanguageView}>{<FontAwesomeIcon icon={faXmark} />}</h1>
    
<section>
     <div>
    <h1 onClick={changeLanguageGeo}>Georgian</h1>
    <h2>{localStorage.getItem('language')==='Georgian' || language==="Georgian" ? "\u2713" :"" }</h2>
    </div>
    <div className="second_div">
        <h1 onClick={changeLanguageEng}>English</h1>
       <h2>{localStorage.getItem('language')==="English" || language==="English" ? '\u2713' : ""}</h2>
    </div>
    </section>
    </div>
}