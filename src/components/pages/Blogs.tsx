import { useEffect, useState } from "react"
import Layout from "../Layout"
import { Blog, getBlogs } from "../../utils/blog"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from "../Button.styled"

export default function () {
  const [blogs, setBlogs] = useState<Blog[]>()
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getBlogs()
      .then((blogs) => setBlogs(blogs))
      .catch((err) => {
        setError(true)
        console.error(err)
      })
  }, [])

  return blogs ? (
    <Layout>
      <h1>글 목록</h1>
      <List>
        {blogs.map((blog, index) => (
          <ListItem key={index} onClick={() => navigate(`/blogs/${blog.id}`)}>
            <div className="title">{blog.attributes.title}</div>
            <div className="write-date">
              {new Date(blog.attributes.writeDate).toLocaleDateString("ko-KR")}
            </div>
          </ListItem>
        ))}
      </List>
      <Button onClick={() => navigate("/")}>메인 페이지</Button>
    </Layout>
  ) : error ? (
    <Layout>
      <div style={{ color: "rgb(200, 0, 0)" }}>오류가 발생하였습니다.</div>
      <Button onClick={() => navigate("/")}>메인 페이지</Button>
    </Layout>
  ) : (
    <Layout>로딩중...</Layout>
  )
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 600px;
  width: 100%;
`

const ListItem = styled.li`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  margin: 5px 0;

  & .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    max-width: 500px;
    word-break: break-all;
  }

  & .write-date {
    color: rgb(100, 100, 100);
    width: 100%;
    text-align: right;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
  }
`
