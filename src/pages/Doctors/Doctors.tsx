import EmergencyBanner from '../components/EmergencyBanner/EmergencyBanner'
import PageBanner from '../components/PageBanner/PageBanner'
import QualifiedDoctors from '../components/QualifiedDoctors/QualifiedDoctors'
import './doctors.scss'

const Doctors = () => {
    return (
        <div className="doctors-container">
            <PageBanner background="/medical-page-banner-1.png" title="Doctors" />
            <QualifiedDoctors />
            <EmergencyBanner />
        </div>
    )
}

export default Doctors
