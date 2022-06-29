import React from "react";
import RobotDTO from "lib/dto/RobotDTO";
import { Avatar, Chip, Chips, Container, Title } from "@mantine/core";

interface Props {
  robot: ReturnType<RobotDTO['toSerializable']>
}

const RobotListItem: React.FC<Props> = ({ robot }) => (
  <Container fluid style={{ display: 'flex', alignItems: 'center' }}>
    <Avatar size={50} src={robot.avatar} radius={999} />
    <Container>
      <Title order={3} my={5}>{robot.name}</Title>
      <Container style={{ display: 'flex' }}>
        <Chips multiple>
          {robot.tags.map((t) => (<Chip>{t.name}</Chip>))}
        </Chips>
      </Container>
    </Container>
  </Container>
)

export default RobotListItem;
