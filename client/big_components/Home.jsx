import '../Home_css/Home.css';
import Header from '../Home_components/Header';
import Body  from "../Home_components/Body";
import Videos from '../Home_components/Videos';

const Home=()=>{
  return <div className='Home_main_div'>
   <Header />
   <Body />
   <Videos/>
</div>    
}

export default Home;