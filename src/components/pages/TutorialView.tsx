import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout";
import { Tutorial, TutorialKind, getTutorial } from "../../utils/tutorial";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button.styled";

export default function () {
  const { kind, id } = useParams();
  const navigate = useNavigate();
  const [tutorial, setTutorial] = useState<Tutorial>();
  const [error, setError] = useState(false);

  useEffect(() => {
    getTutorial(kind as TutorialKind, Number(id))
      .then((tutorial) => setTutorial(tutorial))
      .catch((err) => {
        setError(false);
        console.error(err);
      });
  }, []);

  const widthStyle: React.CSSProperties = { maxWidth: 600, width: "95%" };

  return tutorial ? (
    <Layout>
      <h1>{tutorial.attributes.title}</h1>
      <Info>
        <div>{kind === "js" ? "JavaScript 튜토리얼" : "TypeScript 튜토리얼"}</div>
        <div>{new Date(tutorial.attributes.writeDate).toLocaleDateString("ko-KR")}</div>
      </Info>
      <hr style={widthStyle} />
      <div style={{ ...widthStyle, wordBreak: "break-all" }}>
        <tutorial.content />
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
  );
}

const Info = styled.div`
  max-width: 600px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(100, 100, 100);
`;
