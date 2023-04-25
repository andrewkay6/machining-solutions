import { Link } from "react-router-dom";

interface Props {
    className: string;
}


const Footer = ({className} : Props) => {
    
    return (
        <div className={className}>
            <div className="footerText">
                © 2021, All Rights Reserved
            </div>
            <div className="footerContactContainer">
                <Link
                to={"/contact"}
                className="footerContactText"
                >
                    Contact Us
                </Link>

            </div>
        </div>
    );
    };

export default Footer;