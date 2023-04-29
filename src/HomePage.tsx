import {motion} from 'framer-motion'
import Hero from './Hero';
// import Gears from './Gears';
interface Props {setPageState: (pageState: string) => void;}
const HomePage = ({setPageState} : Props) => {

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: 1 ,
            minHeight: "0vh"}}
            exit={{ display: "none" }}
        className="page"
        style={{marginTop: "0"}}> 
            <Hero setPageState={setPageState} />

                <div className='pageSubtitle' style={{fontWeight: "bold"}}>
                    Welcome to Machining Solutions - Canada's Largest Dedicated Graphite CNC Machining Facility
                </div>
                <div className='pageParagraph' style={{textAlign: "center"}}>
                    We are a CNC graphite machining facility located in
                    Kitchener and serving the greater Toronto area and beyond. We do custom machining
                    of carbon, graphite, nylon, Delrin and bronze parts in all sizes. 
                </div>
                <br/>

                <div className='pageSubtitle' style={{fontWeight: "bold"}}>
                    Experience - Knowledge - Innovation
                </div>
                <div className='pageParagraph' >
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
                    and you will quickly learn why so many Canadian companies are saying:
                    
                    <br/><br/>
                    <div className='pageParagraph' style={{textAlign: 'center'}}>
                        <div> <b style={{color: "red"}}>NO</b> to brokerage fees </div>
                        <div> <b style={{color: "red"}}>NO</b> to high freight costs </div>
                        <div> <b style={{color: "red"}}>NO</b> to border delays </div>
                        <br/>
                        <div><b>by saying <b style={{color: "green"}}>YES</b> to Machining Solutions.</b></div>

                    </div>
                     
                    
                    
                </div>
                <br/>
                

                
           
        </motion.div>
    );
}

export default HomePage;