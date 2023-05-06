import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <header>
        <Navbar>
          <Link to="/" className="brand">
            Obho Blog
          </Link>
        </Navbar>
      </header>
      <Main>{children}</Main>
      <Footer>
        <p>
          Made by <a href="https://github.com/OhBeomho">OhBeomho</a>
        </p>
        <p>
          Source on <a href="https://github.com/OhBeomho/obho-blog">GitHub</a>
        </p>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Navbar = styled.nav`
  padding: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .brand {
    font-size: 26px;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  background-color: rgb(120, 120, 120);
  color: rgb(40, 40, 40);
  text-align: center;
`
