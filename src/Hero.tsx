import heroImage from "./images/hero.png";

const Hero = () => {
    return (
      <div className="heroContainer">
        <div className="heroImageContainer">
          <img className="heroImage" src={heroImage} alt="Hero" />
          <div className="heroTextContainer">
            <div className="heroText">
              Machining Solutions Inc.
            </div>
            <div className="heroText">
              Custom Carbon & Graphite Machining, Sales & Service.
            </div>
          </div>
        </div>
        {/* https://i.imgur.com/QgVb6wO.png */}
      </div>
    );
  };
  
  export default Hero;