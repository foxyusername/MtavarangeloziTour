import "../Home_css/Header.css";

export default function Header(){
   return <div className="Header_main_div">
    
    <div className="Header_text">
        <h1>Discover the beauty of Mtavarangelozi</h1>
        <p>Experience the breathtaking beauty of Mtavarangelozi Church. Explore its captivating architecture and rich history. Enhance your visit with our knowledgeable guides, available for personalized tours. Unveil the splendor of Mtavarangelozi Church today.</p>
     
        <div className="language_button">   
        <button className="hireGuide">𝐡𝐢𝐫𝐞 𝐠𝐮𝐢𝐝𝐞</button>
        <button className="language">𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞</button>
            </div>
</div>
<div className="Header_image">
  <img src="https://res.cloudinary.com/dldonwgcr/image/upload/v1687689946/gremigremis-monasteri-gremi-monastery-monastyr-gremi-2_mzjazs.jpg" />
  </div>
   
     
    </div>
}