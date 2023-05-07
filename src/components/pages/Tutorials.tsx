import { useNavigate, useParams } from "react-router-dom"
import Layout from "../Layout"
import { useEffect, useState } from "react"
import { Tutorial, TutorialKind, getTutorials } from "../../utils/tutorial"
import styled from "styled-components"
import Button from "../Button.styled"

export default function () {
  const { kind } = useParams()
  const navigate = useNavigate()
  const [tutorials, setTutorials] = useState<Tutorial[]>()
  const [error, setError] = useState(false)

  useEffect(() => {
    getTutorials(kind as TutorialKind)
      .then((tutorials) => setTutorials(tutorials))
      .catch((err) => {
        setError(true)
        console.error(err)
      })
  }, [])

  return tutorials ? (
    <Layout>
      <h1>{kind === "js" ? "JavaScript" : "TypeScript"} 튜토리얼 목록</h1>
      <List>
        {tutorials.map((tutorial, index) => (
          <ListItem key={index} onClick={() => navigate(`/tutorials/${kind}/${tutorial.id}`)}>
            <div className="title">{tutorial.attributes.title}</div>
            <div className="info">
              <div className="description">{tutorial.attributes.description}</div>
              <div className="write-date">
                {new Date(tutorial.attributes.writeDate).toLocaleDateString("ko-KR")}
              </div>
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
  width: 95%;
`

const ListItem = styled.li`
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
    max-width: 500px;
    word-break: break-all;
  }

  & .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .description {
    font-size: 14px;
  }

  & .write-date {
    color: rgb(100, 100, 100);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
  }
`
