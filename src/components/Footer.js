import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
// import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                <span style={{ paddingLeft: 5 }}>
                        {}The Big Square 13,
                         00100 Nairobi, Kenya
                         +254 441234567
                         info@bakeryhaven.com
                    </span>
                </div>

                <div className="item2">
                    {/* <span style={{ paddingRight: 5 }}> </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "} */}
                    <span style={{ paddingLeft: 5 }}>
                        {} Opening times
Mon-Fri 9:00 - 19:00     Saturdays 9:00 - 16:00     Sundays 10:00 - 16:00

Public Holidays 10:00 - 15:00
                    </span>
                </div>
                <a
                    href="https://github.com/OyakiMasu/Ruby-Project"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="http://fb.com"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

            </div>
        </footer>
    );
};

export default Footer;