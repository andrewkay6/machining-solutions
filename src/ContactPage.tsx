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

                    <li>Phone: <a href="tel:5195690485">(519) 569-0485</a>
                    </li>

                    <li>Phone: <a href="tel:5195691530">(519) 569-1530</a></li>
                    <li>Fax:  (888) 538-7616</li>
                    <li>Email: <a href="mailto:sales@machiningsolutions.ca">sales@machiningsolutions.ca</a>
                    </li>
                    <li>
                        Mail:
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