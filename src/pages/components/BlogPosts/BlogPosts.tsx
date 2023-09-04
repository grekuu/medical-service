import { Container } from 'react-bootstrap'
import './blogPosts.scss'
import BlogPost, { BlogPostProps } from './BlogPost/BlogPost'
import { useEffect, useState } from 'react'
import axios from 'axios'

const BlogPosts = () => {
    const [personData, setPersonData] = useState<BlogPostProps[]>()

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1&per_page=5').then((res) => {
            setPersonData(res.data.data)
        })
    }, [])

    return (
        <Container className="blog-posts-container">
            <h2>
                Latest blog posts <br /> and Articles
            </h2>
            <p>Tosser cheesed off tinkety tonk old fruit arse over tit give us.</p>
            {personData &&
                personData!.map((person: BlogPostProps) => {
                    return <BlogPost key={person.id} {...person} />
                })}
        </Container>
    )
}

export default BlogPosts
