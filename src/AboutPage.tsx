import { motion } from "framer-motion";
import facilityPicture from './images/facility.png'

const About = () => {
    return (
        <motion.div className="page"
        initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                minHeight: "0vh"
            }}
            exit={{ display: "none" }}
        >
          <div className="pageTitle">
            About Us
          </div>
          
      <p >Founded 
        in 2009 to provide finished carbon and graphite parts to the underserviced 
        Canadian marketplace. Machining Solutions offers over 50 years of experience 
        in carbon and graphite machining and high temperature applications. We 
        also offer you a set of core business values that will provide a welcome 
        change to the status quo of dealing with the larger manufacturers. Simple 
        things, such as returning phone calls and emails promptly, issuing quotes 
        in a timely manner, making quality a priority through all aspects of our 
        business, communicating with our customers on the status of their orders 
        and following up with you to make sure that at the end of the day, our 
        customers are happy. Analysts look at sales projections, market share 
        analysis and earnings potential to determine the success of a business. 
        We are taking a completely different approach. We believe that following 
        our core business principles and striving for 100% customer satisfaction 
        will pave our path to growth and success.<br/>
        </p>

        <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={facilityPicture} alt="Faculty" width="50%" height="auto"/>
                </div>
        
      <strong>Fair 
        pricing, fair labour rates and top notch customer care, that’s the 
        Machining Solutions difference!</strong><br/>
        </motion.div>

      
    );
    };

export default About;