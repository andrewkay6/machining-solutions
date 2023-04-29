import { motion } from 'framer-motion'
const ContactPage = () => {
    return (
        <motion.div className="contactContainer page"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                minHeight: "0vh"
            }}
            exit={{ display: "none" }}
        >
            <div className="pageTitle"> Contact </div>
            <div className="contactInfoContainer">
                <ul className="contactInfo">
                    <li><b>Phone:</b> <a href="tel:5195690485">(519) 569-0485</a>
                    </li>

                    <li><b>Phone:</b> <a href="tel:5195691530">(519) 569-1530</a></li>
                    <li><b>Fax:</b> (888) 538-7616</li>
                    <li><b>Email:</b> <a href="mailto:sales@machiningsolutions.ca">sales@machiningsolutions.ca</a>
                    </li>
                    <li>
                        <b>Mail: </b>
                        70 Dumart Place
                        Kitchener, Ontario, Canada
                        N2K 3C7
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default ContactPage;