import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function ({ children }: PropsWithChildren) {
  return <CodeBlock>{children}</CodeBlock>;
}

const CodeBlock = styled.span`
  background-color: rgb(220, 220, 220);
  font-family: monospace;
  padding: 3px;
`;
