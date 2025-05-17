import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

interface Props {
  name: string;
}

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome Aboard</Preview>
      <Body style={body}>
        <Container>
          <Text style={heading}>Hello {name}</Text>
          <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};
const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
