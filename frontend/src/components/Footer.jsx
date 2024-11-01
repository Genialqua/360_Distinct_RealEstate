import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    // Style for social links with hover effect
    const socialLinkStyle = {
        margin: '0 10px',
        color: '#000',
        textDecoration: 'none',
        padding: '5px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease', // Smooth transition for background color
    };

    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}> {/* Background color added here */}
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>Contact us: +234 903 237 3430<br/>   360 Distinct Real Estate &copy; {currentYear}</p>

                        <div className="social-links">
                            {[
                                { href: "https://www.facebook.com/360.distinctrealestate?mibextid=ZbWKwL", icon: faFacebook, label: "Facebook" },
                                { href: "https://www.instagram.com/360distinct.realestate/", icon: faInstagram, label: "Instagram" },
                                { href: "https://www.linkedin.com/company/360-distinct-real-estate/", icon: faLinkedin, label: "LinkedIn" },
                                { href: "https://x.com/360_distinct?t=naFNF5HqBjlycvwkRVf_cQ&s=09", icon: null, label: "Twitter" },
                                
                            ].map((social, index) => (
                                <a 
                                    href={social.href} 
                                    key={index} 
                                    aria-label={social.label}
                                    style={socialLinkStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'yellow'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    {social.icon ? (
                                        <FontAwesomeIcon icon={social.icon} size="lg" style={{ marginRight: '5px' }} />
                                    ) : (
                                        <span style={{ fontWeight: 'bold', fontSize: '1.2em', marginRight: '5px' }}>X</span>
                                    )}
                                    {social.label}
                                </a>
                            ))}
                        </div>

                        <a 
                            href="https://wa.me/message/NZPNDMFH4CE7M1" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-success"
                            style={{ marginTop: '10px' }}
                        >
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
