import React, { useMemo } from "react";
import { Container, Center, Paper, Button, Box } from "@mantine/core";
import { range } from "lodash";
import RobotDTO from "lib/dto/RobotDTO";
import Robot from "lib/core/Robot";

import RobotListItem from "./components/RobotListItem";
import RobotListItemLoader from "./components/RobotListItemLoader";
import useLoadable from "./utils/useLoadable";
import { useService } from "./serviceContext";
import { Link } from "react-router-dom";

const ListRobots: React.FC = () => {
  const { robotRepository } = useService();

  const [robots, isRobotsLoading] = useLoadable<Robot[]>(async () => {
    if (robotRepository) {
      return robotRepository.getMany();
    }

    return [];
  }, [robotRepository]);

  const loader = useMemo(
    () => range(5).map((n) => (
      <Container my={20} key={n}>
        <RobotListItemLoader />
      </Container>
    )),
    [],
  );

  const list = useMemo(() => (
    <>
      {robots?.map((r) => (
        <Box my={20} key={r.id} component={Link} to={`/${r.id}`}>
          <RobotListItem robot={RobotDTO.fromDomainObject(r).toSerializable()}/>
        </Box>
      ))}
      <Container my={20}>
        <Center>
          <Button component={Link} to="/create">Add Robot</Button>
        </Center>
      </Container>
    </>
  ), [robots]);

  return (
    <Container p={50}>
      <Center p={10}>
        <Paper shadow="lg" p={10} radius="lg">
          {isRobotsLoading ? loader : list}
        </Paper>
      </Center>
    </Container>
  )
}

export default ListRobots;
