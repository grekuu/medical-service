import { Container } from 'react-bootstrap'
import './blogPost.scss'

export interface BlogPostProps {
    id: number
    first_name: string
    last_name: string
    avatar: string
}

const BlogPost = ({ id, first_name, last_name, avatar }: BlogPostProps) => {
    return (
        <Container>
            <div className="post-container" key={id} data-aos="zoom-in">
                <a href="#" className="date">
                    4 April
                </a>
                <div className="person">
                    <img src={avatar} alt="person" loading="lazy" />
                    <h3>
                        {first_name} {last_name}
                    </h3>
                </div>
                <div className="title">Hospital doctors examine patients so that.</div>
                <div className="read-more">
                    <a href="#">Read More &#8594;</a>
                </div>
            </div>
        </Container>
    )
}

export default BlogPost
