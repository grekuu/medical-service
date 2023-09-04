import { Container } from 'react-bootstrap'
import './specialService.scss'
import SpecialServiceCard from './SpecialServiceCard/SpecialServiceCard'

const SpecialService = () => {
    return (
        <Container className="special-service-container">
            <div className="text-container">
                <h2>Special service for Out patients</h2>
                <p>Tosser cheesed off tinkety tonk old fruit arse over tit give us.</p>
            </div>
            <div className="special-service-card-container">
                <SpecialServiceCard img_src="/icon_medical_service1.png" title="Book same day appointments." />
                <SpecialServiceCard img_src="/icon_medical_service2.png" title="Specialized stroke services." />
                <SpecialServiceCard img_src="/icon_medical_service3.png" title="Testing for Traces & Impurities." />
            </div>
        </Container>
    )
}

export default SpecialService
