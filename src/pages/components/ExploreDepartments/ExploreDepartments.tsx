import { Container } from 'react-bootstrap'
import './exploreDepartments.scss'
import DepartmentCard from './DepartmentCard/DepartmentCard'

const ExploreDepartments = () => {
    return (
        <Container className="explore-departments-container">
            <h2>
                Explore manlab <br /> Departments
            </h2>
            <h3>Tosser cheesed off tinkety tonk old fruit arse over tit give us.</h3>
            <div className="cards-container">
                <DepartmentCard img_src="/medical-service-1.png" title="Medical & Surgical" type="Production" />
                <DepartmentCard img_src="/medical-service-2.png" title="Tooth Fillings" type="Dental Hygiene" />
                <DepartmentCard img_src="/medical-service-3.png" title="Test Analysis" type="Blood Test" />
                <DepartmentCard img_src="/medical-service-4.png" title="Dental Surgery" type="Kidney Solution" />
                <DepartmentCard img_src="/medical-service-5.png" title="Critical Care" type="Medical Checkup" />
                <DepartmentCard img_src="/medical-service-6.png" title="Non-invasive" type="Operation" />
                <DepartmentCard img_src="/medical-service-7.png" title="Pediatric Dentistry" type="Blood Test" />
                <DepartmentCard img_src="/medical-service-8.png" title="Precise Diagnosis" type="Kidney Solution" />
            </div>
        </Container>
    )
}

export default ExploreDepartments
