import { Container } from 'react-bootstrap'
import './atYourService.scss'
import ServiceTypeBox from './ServiceTypeBox/ServiceTypeBox'

const AtYourService = () => {
    return (
        <div className="at-your-service-container">
            <Container>
                <h2>We’re at your service</h2>
                <h3>Tosser cheesed off tinkety tonk old fruit arse over tit give us.</h3>
                <div className="service-box-container">
                    <ServiceTypeBox
                        type="Medical Checkup"
                        title="The website of the Royal melbourne Hospital."
                        doc_name="Lance Bogrol"
                        doc_type="Founder"
                    />
                    <ServiceTypeBox
                        type="Blood Test"
                        title="Hospital doctors examine patients so that."
                        doc_name="Eric Widget"
                        doc_type="Dentist"
                    />
                </div>
            </Container>
        </div>
    )
}

export default AtYourService
