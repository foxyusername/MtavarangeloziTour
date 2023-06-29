import "../Home_css/Videos.css";

export default function Videos(){

    let width=380;
    let height=300;

    return <div className="Videos_main_div">
     <div className="Videos_header"><h1>{localStorage.getItem('language')==="English" ? 'Videos to watch' : 'ვიდეოები'}</h1></div>
     
    <div className="Videos_div"> 
        <div className="first_video">
        <h2>{localStorage.getItem('language')==="English" ? 'Experience the beauty of Mtavarangelozi with 4k video' : 'გაეცანი მთავარანგელოზის სილამაზეს 4K ვიდეოს საშუალებით'}</h2>
    <iframe width={width} height={height} src="https://www.youtube.com/embed/WeQF3MVLaOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="second_video">
        <h2>{localStorage.getItem('language')==='English' ? 'Gain more knowledge about the history of church' : ' მიიღე მეტი ინფორმაცია მონასტრის ისტორიის შესახებ'}</h2>
    <iframe width={width} height={height} src="https://www.youtube.com/embed/78OY1wfPihQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className="third_video">
        <h2>{localStorage.getItem('language')==="English" ? 'See the impression of tourist' : 'ნახე ტურისტის რეაქცია და ემოციები'}</h2>
    <iframe width={width} height={height} src="https://www.youtube.com/embed/X8K_uXEzhbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>  
    </div>
    </div>
}