import '../Home_css/Home.css';
import Header from '../Home_components/Header';
import Body  from "../Home_components/Body";
import Videos from '../Home_components/Videos';
import Contact from '../Home_components/Contact';

const Home=()=>{
  return <div className='Home_main_div'>
   <Header />
   <Body />
   <Videos/>
   <Contact />
</div>    
}

export default Home;