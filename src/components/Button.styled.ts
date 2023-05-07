import styled from "styled-components";

const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 6px;
  margin: 8px;
  border-radius: 6px;
  background-color: rgb(210, 210, 210);
  transition: all 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: rgb(180, 180, 180);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
  }
`;

export default Button;
