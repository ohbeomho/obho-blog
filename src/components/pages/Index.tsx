import styled from "styled-components";
import Layout from "../Layout";
import { useEffect, useState } from "react";
import { Blog, getRecentBlogs } from "../../utils/blog";
import { useNavigate } from "react-router-dom";
import Button from "../Button.styled";

export default function () {
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>();
  const navigate = useNavigate();

  useEffect(() => {
    getRecentBlogs().then((blogs) => setRecentBlogs(blogs));
  }, []);

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
        <List>
          {recentBlogs.map((blog, index) => (
            <Card key={index} onClick={() => navigate(`/blogs/${blog.id}`)}>
              <div className="title">{blog.attributes.title}</div>
              <div className="sub">
                {new Date(blog.attributes.writeDate).toLocaleDateString("ko-KR")}
              </div>
            </Card>
          ))}
        </List>
      )}
      <Button onClick={() => navigate("/blogs")}>전체 글 보기</Button>
      <h3 style={{ marginTop: 60 }}>튜토리얼</h3>
      <List>
        <Card onClick={() => navigate("/tutorials/js")}>
          <div className="title">JavaScript 튜토리얼</div>
          <div className="sub">웹사이트 만들 때 필수인 JS 를 배워봅시다!</div>
        </Card>
        <Card onClick={() => navigate("/tutorials/ts")}>
          <div className="title">TypeScript 튜토리얼</div>
          <div className="sub">JS 의 슈퍼셋인 TS 를 배워봅시다!</div>
        </Card>
      </List>
    </Layout>
  );
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
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
  max-width: 600px;
  width: 95%;
`;

const Card = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  width: 220px;
  word-break: break-all;

  & .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  & .sub {
    color: rgb(100, 100, 100);
    float: right;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
  }
`;
