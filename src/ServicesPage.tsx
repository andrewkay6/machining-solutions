import { motion } from "framer-motion";

const ServicesPage = () => {
    return (
        <motion.div className="page"
        initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                minHeight: "0vh"
            }}
            exit={{ display: "none" }}
        >
          <div className="pageTitle">Services</div> 
          <div className="pageSubtitle">Custom Machining</div>
        <div className="pageParagraph coloredBackground">
          We offer custom machining of all sizes of carbon, graphite, nylon, Delrin 
          and bronze parts. With turning capacities up to 24” diameter and 
          large milling capacities, we have the equipment and knowledge to manufacture 
          most custom requirements. Let our 35+ years of machining experience help 
          you select the right grade for your application and provide you with parts 
          that meet your specifications and requirements.
        </div>
        <br/>
         
        <div className="pageSubtitle">CAD Drawings</div>
        <div className="pageParagraph coloredBackground">
          Many small shops may not have justification to buy a CAD program or may 
          not have anyone on staff who can operate the software. Machining Solutions 
          offers CAD drawing services for any industry and any type of part. Scaled, 
          dimensioned, section views, whatever your requirement, Machining Solutions 
          can meet your needs.
        </div>
        <br/>
        <div className="pageSubtitle">CAM Programs</div>
        <div className="pageParagraph coloredBackground">
        In a small shop which only has one or two CNC machines, it may be cost 
        prohibitive to buy an expensive CAM program for the occasional job which 
        may require it. Machining Solutions offers CAM program generating services 
        for any industry and any type of part and material. Programs are generated 
        to your tooling, spindle speed and feed rate requirements and are post 
        processed for your exact machine.
      </div >
      <p ><br/>
      </p>
      
      </motion.div>
      
    );
};

export default ServicesPage;