import React from "react";
import { Container, Skeleton } from "@mantine/core";

const RobotListItemLoader: React.FC = () => (
  <Container fluid style={{ display: 'flex', alignItems: 'center' }}>
    <Skeleton circle height={50} />
    <Container>
      <Skeleton height={20} my={5}/>
      <Container style={{ display: 'flex' }}>
        <Skeleton height={20} width={40} mx={5} />
        <Skeleton height={20} width={60} mx={5} />
      </Container>
    </Container>
  </Container>
)

export default RobotListItemLoader;