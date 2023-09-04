import { Container } from 'react-bootstrap'
import PageBanner from '../components/PageBanner/PageBanner'
import ProvideService from '../components/ProvideService/ProvideService'
import QualifiedDoctors from '../components/QualifiedDoctors/QualifiedDoctors'
import SpecialService from '../components/SpecialService/SpecialService'
import Testimonials from '../components/Testimonials/Testimonials'
import VideoSection from '../components/VideoSection/VideoSection'
import './aboutUs.scss'

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <PageBanner background="/medical-breadcamp_about.png" title="About us" />
            <SpecialService />
            <ProvideService />
            <VideoSection />
            <QualifiedDoctors />
            <Testimonials deviceType="desktop" />
            <div className="sponsors-section">
                <Container className="content-container">
                    <div className="sponsors-left">
                        <h2>Some of our medical specialties</h2>
                        <p>Quickly disseminate future-proof total linkage through ubiquitous networks.</p>
                    </div>
                    <div className="sponsors-right">
                        <div className="logos-container">
                            <img src="logo_spcialties1.png" alt="logo" loading="lazy" />
                            <img src="logo_spcialties2.png" alt="logo" loading="lazy" />
                            <img src="logo_spcialties3.png" alt="logo" loading="lazy" />
                            <img src="logo_spcialties4.png" alt="logo" loading="lazy" />
                            <img src="logo_spcialties5.png" alt="logo" loading="lazy" />
                            <img src="logo_spcialties6.png" alt="logo" loading="lazy" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default AboutUs
