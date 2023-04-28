import { Link } from "react-router-dom";
import WebsiteCredits from "./WebsiteCredits";
interface Props {
    className: string;
}


const Footer = ({ className }: Props) => {

    const currentYear = new Date().getFullYear();

    return (
        <div className={className}>
            <div className="footerText">
                © {currentYear} Machining Solutions Inc.

            </div>


            <div className="footerContactContainer">
                <Link
                    to={"/contact"}
                    className="footerContactText"
                >
                    Contact Us
                </Link>

            </div>
            <div className="flexBreak" />
            -
            <div className="flexBreak" />
            <WebsiteCredits />
        </div>
    );
};

export default Footer;