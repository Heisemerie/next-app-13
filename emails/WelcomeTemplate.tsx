import React from "react";
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
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
