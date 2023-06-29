import "../Home_css/Body.css";

export default function Body(){
    return <div className="Body_main_div">
        <div className="About_div">
        <img src="https://res.cloudinary.com/dldonwgcr/image/upload/v1687765497/%E1%83%92%E1%83%A0%E1%83%94%E1%83%9B%E1%83%98-2_bzn1xq.jpg"/>
        <p>{localStorage.getItem('language')==="English" ?  'Mtavarangelozi Church, a 16th-century marvel. Built in 1569 by King Levan, it showcases Georgian architectural style with brick and stone. Remarkably, it stands without a foundation, defying the norms of its time. Experience the legacy of the living king and his family within these sacred walls.':"მთავარანგელოზის ეკლესია დაარსდა მეთექვსმეტე საუკუნეში 1569 წელს კახთა მეფე ლევანის მიერ მას ხშირად გრემის მონასტერადაც მოიხენიებენ.მთავარანგელოზის ნაგებობა გვიჩვენებს შუა ხანების საქართველოს არქიტექტურულ სტილს. იგი დგას საძირკველის გარეშე რაც იწვევს დღემდღე გაოცებას ათასობით ტურისტში."}</p>
        </div>

        <div className="interier_div">
        
        <img src="https://res.cloudinary.com/dldonwgcr/image/upload/v1687765480/mtavarangelozi_room_m7faoi.jpg" />
        <p>{localStorage.getItem('language')==='English' ? "Located in the first tower from the west, the main room of Mtavarangelozi Church is a place of prayer, mass, and significant events like the King's coronation. Built with granite, its interior boasts exquisite frescoes that adorn the walls, offering a glimpse into the rich history and devotion of the church": "პირველი კოშკი რომელიც მდებარეობს დასავლეთით გამოიყენებოდა ლოცვების,წირვისა და მნიშვნელოვანი ცერემონიებისთვის როგორიცაა მეფედ კურთხევა და მონათვლა. მისი ინტერიერი არის დაფარული სხვადასხვა ფრესკებითა და ჩანახატებით"}</p>
         
        </div>

        <div className="upperMuseum_div">
        <img src="https://res.cloudinary.com/dldonwgcr/image/upload/v1687765436/Gremi-museum-2_b41ply.jpg"/>
        <p>{localStorage.getItem('language')==="English" ? 'The second tower of Mtavarangelozi Church served as the residence for the royal family. Today, it houses a captivating museum displaying original portraits and household items discovered in Gremi. Ascend the stairs to explore additional rooms and be rewarded with breathtaking views from the tower': "მეორე კოშკი გამოიყენებოდა როგორც მეფის ოჯახის საცხოვრებელი ადგილი. დღესღეისობით, იგი მოიცავს გამაოგნებელ მუზეუმს რომელიც გვთავაზობს კახეთის მეფეების პორტრეტებსა და საცხოვრებელ ნივთებს. კოშკში გამავალი საფეხურები კი უკავშირდება მთავარანგელოზის მთავარ სამხედრო დასაზვერ კოშკურას სადაც იშლება ულამაზესი ხედი."}</p>
        
        </div>

        <div className="boulvarMuseum_div">
        <img src="https://res.cloudinary.com/dldonwgcr/image/upload/v1687765460/Gremi-museum-1_mayp1x.jpg"/>
        <p>{localStorage.getItem('language')==="English" ? 'Discover the lively boulevard of Mtavarangelozi, featuring charming little churches, cozy cafes, and a captivating museum. Uncover fascinating historical objects unearthed through previous excavations. Immerse yourself in the rich heritage and vibrant culture.': 'მოინახულე მთავარანგელოზის მრავალფეროვანი ბულვარი, რომელიც გვთავაზობს ცალკეულ პატარა ეკლესიებს, წყნარ კაფეს, და გამაოგნებელ მუზეუმს სადაც შეისწავლი ისტორიული ნივთებს რომელიც აღმოჩენილ იქნა გათხრების შედეგად. გაეცანი გრემის მონასტრის მდიდრულ კულტურას.'}</p>

        </div>
    
    </div>
}