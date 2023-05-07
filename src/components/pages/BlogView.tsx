import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Blog, getBlog } from "../../utils/blog"
import Layout from "../Layout"
import Button from "../Button.styled"

export default function () {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState<Blog>()
  const [error, setError] = useState(false)

  useEffect(() => {
    getBlog(Number(id))
      .then((blog) => setBlog(blog))
      .catch((err) => {
        setError(true)
        console.error(err)
      })
  }, [])

  const widthStyle: React.CSSProperties = { maxWidth: 600, width: "95%" }

  return blog ? (
    <Layout>
      <h1>{blog.attributes.title}</h1>
      <div style={{ ...widthStyle, textAlign: "right", color: "rgb(100, 100, 100)" }}>
        {new Date(blog.attributes.writeDate).toLocaleDateString("ko-KR")}
      </div>
      <hr style={widthStyle} />
      <div style={{ ...widthStyle, wordBreak: "break-all" }}>
        <blog.content />
      </div>
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
