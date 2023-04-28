import {motion} from 'framer-motion'
import facultyPicture from './images/faculty.png'
import Gears from './Gears';
const HomePage = () => {

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: 1 ,
            minHeight: "0vh"}}
            exit={{ display: "none" }}
        className="page">
            <div className="pageTitle">CNC Machining Toronto – Graphite Machining</div>
            CNC graphite machining facility located in
                Kitchener and serving the greater Toronto area and beyond. Custom machining
                of all sizes carbon, graphite, nylon, Delrin and bronze parts. <p></p>
                <p>&nbsp; </p>
                <p><strong>Welcome
                    to Machining Solutions</strong> Canada's
                        Largest Dedicated Graphite CNC Machining Facility<br/>
                </p>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={facultyPicture} alt="Faculty" width="50%" height="auto"/>
                </div>
                <p ><br/>
                    Whether you are looking for production of custom CNC machined rods, bearings,
                    bushings or moulds manufactured from carbon, graphite, nylon, Delrin or
                    bronze or looking for a reliable source for carbon or graphite feeder
                    stock, Machining Solutions can meet your requirements. As the Toronto
                    Region's largest dedicated graphite machining facility, we have the expertise,
                    knowledge and experience to service your machining requirements, as well
                    as the buying power to ensure competitive pricing. Located in Kitchener,
                    Ontario, less than one hour from the Greater Toronto Area, Machining Solutions
                    offers the fastest production services to the Toronto Region. Machining
                    Solutions encompasses over 50 years of experience in the graphite and
                    high temperature applications industries. Drawing on our experience, Machining
                    Solutions will work with you to determine the best grade of carbon or
                    graphite for your application as well as provide complete CAD CAM services
                    if required. Couple this with our unparalleled attention to customer service
                    and you will quickly learn why so many Canadian companies are saying <strong>“NO”</strong>
                    to brokerage fees, <strong>“NO”</strong> to high freight costs,
                    <strong>“NO”</strong> to border delays by saying <strong>“YES”</strong>
                    to Machining Solutions.</p>
                <p><br/>
                    <strong>Experience
                        - Knowledge - Innovation <br/>
                    <br/>
                            CNC graphite machining facility located in Kitchener and
                                serving the greater Toronto area and beyond. Custom machining of all sizes
                                carbon, graphite, nylon, Delrin and bronze parts. </strong></p>

                <p><br/>
                </p>
                <p ><br/>
                </p>
           
        </motion.div>
    );
}

export default HomePage;