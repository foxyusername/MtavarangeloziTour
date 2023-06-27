import "../Home_css/Videos.css";

export default function Videos(){

    let width=380;
    let height=300;

    return <div className="Videos_main_div">
     <div className="Videos_header"><h1>Videos to watch</h1></div>
     
    <div className="Videos_div"> 
        <div className="first_video">
        <h2>Experience the beauty of Mtavarangelozi with 4k video</h2>
    <iframe width={width} height={height} src="https://www.youtube.com/embed/WeQF3MVLaOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="second_video">
        <h2>Gain more knowledge about the history of church</h2>
    <iframe width={width} height={height} src="https://www.youtube.com/embed/78OY1wfPihQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className="third_video">
        <h2>See the impression of tourist</h2>
    <iframe width={width} height={height} src="https://www.youtube.com/embed/X8K_uXEzhbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>  
    </div>
    </div>
}