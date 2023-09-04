import { Container } from 'react-bootstrap'
import './pageBanner.scss'
import { GoDotFill } from 'react-icons/go'

interface PageBannerProps {
    background: string
    title: string
}

const PageBanner = ({ background, title }: PageBannerProps) => {
    return (
        <div className="page-banner-container" style={{ backgroundImage: `url(${background})` }}>
            <Container className="content-container">
                <h6 data-aos="zoom-in-up">{title}</h6>
                <div className="nav-info">
                    <span>Home</span>
                    <GoDotFill className="dot" />
                    <span>{title}</span>
                </div>
            </Container>
        </div>
    )
}

export default PageBanner
