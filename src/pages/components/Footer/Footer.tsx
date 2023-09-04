import { Container } from 'react-bootstrap'
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-content">
                <div className="footer-left">
                    Made by <a href="https://www.linkedin.com/in/gracjan-prusik-b12041251/">Gracjan Prusik</a>
                </div>
                <div className="footer-right">
                    <a href="#">Sitemap</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </Container>
        </div>
    )
}

export default Footer
