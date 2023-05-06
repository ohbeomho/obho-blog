import styled from "styled-components"
import Layout from "../Layout"
import { useEffect, useState } from "react"
import { Blog, getRecentBlogs } from "../../utils/blog"
import { useNavigate } from "react-router-dom"

export default function () {
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>()
  const navigate = useNavigate()

  useEffect(() => {
    getRecentBlogs().then((blogs) => setRecentBlogs(blogs))
  }, [])

  return (
    <Layout>
      <h1>OhBeomho's Blog</h1>
      <p style={{ textAlign: "center" }}>
        <a href="https://github.com/OhBeomho">OhBeomho</a>의 개인 블로그 사이트
        <br />
        <br />
        <Tag>프로그래밍</Tag>
        <Tag>TypeScript</Tag>
        <Tag>React</Tag>
      </p>
      <h3 style={{ marginTop: 60 }}>최근 올라온 글</h3>
      {recentBlogs && (
        <BlogList>
          {recentBlogs.map((blog, index) => (
            <BlogItem key={index} onClick={() => navigate(`/view/${blog.id}`)}>
              <div className="title">{blog.attributes.title}</div>
              <div className="write-date">
                {new Date(blog.attributes.writeDate).toLocaleDateString("ko-KR")}
              </div>
            </BlogItem>
          ))}
        </BlogList>
      )}
    </Layout>
  )
}

const Tag = styled.span`
  padding: 4px 8px;
  margin: 0 2px;
  border-radius: 10px;
  background-color: rgb(170, 170, 170);
  color: rgb(50, 50, 50);

  &::before {
    content: "#";
  }
`

const BlogList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const BlogItem = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;

  & .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    max-width: 250px;
    word-break: break-all;
  }

  & .write-date {
    color: rgb(100, 100, 100);
    float: right;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
  }
`
