import "../Home_css/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons"

export default function Contact(){
   return <div className="Contact_main_div">
    <h1 className="Contact_header">Contact</h1>
   <div className="info_icons_div">
    <div className="Info_icons">
     <div className="Contact_info">
       <div className="info">
         <h2>Email: jamaspishvilinika@icloud.com</h2>
        <h2>Phone: 591-19-15-14</h2>
      </div>
     </div>
     <div className="Contact_icons">
   <div className="Icons_div">
   <a href="https://www.instagram.com/nika_jamaspishvili/"><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png" /></a>
  <a href="https://www.facebook.com/profile.php?id=100013425753100" ><img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-3-logo-png-transparent.png"/></a>
   <a href="https://twitter.com/NikaJama123"><img src="https://cdn.freebiesupply.com/logos/large/2x/twitter-3-logo-png-transparent.png"/></a>
    </div>
     </div>
     </div>
     </div>
    </div>
}