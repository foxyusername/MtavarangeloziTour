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
         <h2>{localStorage.getItem('language')==="English" ? 'Email: jamaspishvilinika@icloud.com' : 'ფოსტა: jamaspishvilinika@icloud.com'}</h2>
        <h2>{localStorage.getItem('language')==="English" ? 'Phone: 591-19-15-14' : 'მობილური: 591-19-15-14'}</h2>
      </div>
     </div>
     <div className="Contact_icons">
   <div className="Icons_div">
   <a href="https://www.instagram.com/nika_jamaspishvili/"><img src="https://res.cloudinary.com/dldonwgcr/image/upload/v1687887822/580b57fcd9996e24bc43c521_dxinvr.png" /></a>
  <a href="https://www.facebook.com/profile.php?id=100013425753100" ><img src="https://res.cloudinary.com/dldonwgcr/image/upload/v1687887977/facebook-3-logo-png-transparent_akbymd.png"/></a>
   <a href="https://twitter.com/NikaJama123"><img src="https://res.cloudinary.com/dldonwgcr/image/upload/v1687887966/twitter-3-logo-png-transparent_b1qzil.png"/></a>
    </div>
     </div>
     </div>
     </div>
    </div>
}