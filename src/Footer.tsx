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
                <div className="footerContactText">
                    Contact Us
                </div>
                <div className="footerContactText">
                    123-456-7890
                </div>

            </div>
        </div>
    );
    };

export default Footer;