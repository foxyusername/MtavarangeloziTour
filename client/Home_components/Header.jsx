import "../Home_css/Header.css";
import { useState } from "react";
export default function Header({getShowLanguage}){
  
  const [showLanguage,setshowLanguage]=useState(false);
  
   function changeshowLanguage(){
    setshowLanguage(true);
    getShowLanguage(true);
   }

  return <div className="Header_main_div">
    
    <div className="Header_text">
        <h1>{localStorage.getItem('language')==="English" ? 'Discover the beauty of Mtavarangelozi' : 'აღმოაჩინე მთავარანგელოზის სილამაზე'}</h1>
    <p>{localStorage.getItem('language')==="English" ? '𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 𝐭𝐡𝐞 𝐛𝐫𝐞𝐚𝐭𝐡𝐭𝐚𝐤𝐢𝐧𝐠 𝐛𝐞𝐚𝐮𝐭𝐲 𝐨𝐟 𝐌𝐭𝐚𝐯𝐚𝐫𝐚𝐧𝐠𝐞𝐥𝐨𝐳𝐢 𝐂𝐡𝐮𝐫𝐜𝐡. 𝐄𝐱𝐩𝐥𝐨𝐫𝐞 𝐢𝐭𝐬 𝐜𝐚𝐩𝐭𝐢𝐯𝐚𝐭𝐢𝐧𝐠 𝐚𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞 𝐚𝐧𝐝 𝐫𝐢𝐜𝐡 𝐡𝐢𝐬𝐭𝐨𝐫𝐲.𝐔𝐧𝐯𝐞𝐢𝐥 𝐭𝐡𝐞 𝐬𝐩𝐥𝐞𝐧𝐝𝐨𝐫 𝐨𝐟 𝐌𝐭𝐚𝐯𝐚𝐫𝐚𝐧𝐠𝐞𝐥𝐨𝐳𝐢 𝐂𝐡𝐮𝐫𝐜𝐡 .': 'შეისწავლე მთავარანგელოზის უნიკალური სილამაზე, გამოიკვლიე მისი გამაოცებელი არქიტექტურა და მდიდარი ისტორია. ეწვიე დღესვე და იხილე საკუთარი თვალით'}</p>     
        <div className="language_button">   
        <button className="hireGuide">{localStorage.getItem('language')==="English" ? 'see more' : 'ნახე მეტი'}</button>
        <button className="language" onClick={changeshowLanguage}>{localStorage.getItem('language')==="English" ? "language" : 'ენა'}</button>
            </div>
</div>
<div className="Header_image">
<img src="https://2.bp.blogspot.com/-_uT8u3zGaSQ/WQMTpUSDFqI/AAAAAAAAAUQ/bHCGGWKnGw4cyKxG8t8oCoLLF16EenziQCLcB/s1600/%25E1%2583%2592%25E1%2583%25A0%25E1%2583%2594%25E1%2583%259B%25E1%2583%2598...jpg" />

  </div>   
     
    </div>
}