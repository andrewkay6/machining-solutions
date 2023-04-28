import heroImage from "./images/hero.png";
import { Link } from "react-router-dom";
interface Props {setPageState: (pageState: string) => void;}

const Hero = ({setPageState} : Props) => {
    return (
      <div className="heroContainer">
        <div className="heroImageContainer">
          <img className="heroImage" src={heroImage} alt="Hero"  />
          <div className="heroTextContainer">
            <div className="heroText">
              Machining Solutions Inc.
            </div>
            <div className="heroText">
              Custom Carbon & Graphite Machining, Sales & Service.
            </div>
            <br/>
            <Link className="heroButton" to="/contact" onClick={() => setPageState('contact')}>
                Contact Us
            </Link>

          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;