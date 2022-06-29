import { useMemo } from 'react';
import { Center, Container, Paper } from '@mantine/core';
import Robot from 'lib/core/Robot';

import useLoadable from './utils/useLoadble';
import LocalRobotRepository from './data/LocalRobotRepository';
import RobotListItemLoader from './components/RobotListItemLoader';
import RobotListItem from './components/RobotListItem';
import RobotDTO from 'lib/dto/RobotDTO';

function App() {
  const [robots, isRobotsLoading] = useLoadable<Robot[]>(async () => new LocalRobotRepository().getMany());

  const loader = useMemo(
    () => Array(5).fill(null).map(() => (
      <Container my={20}>
        <RobotListItemLoader />
      </Container>
    )),
    [],
  );

  const list = useMemo(
    () => robots?.map((r) => (
      <Container my={20} key={r.id}>
        <RobotListItem robot={RobotDTO.fromDomainObject(r).toSerializable()}/>
      </Container>
    )),
    [robots]
  )

  return (
    <Container fluid>
      <Center p={10}>
        <Paper shadow="lg" p={10} radius="lg">
          {isRobotsLoading ? loader : list}
        </Paper>
      </Center>
    </Container>
    
  );
}

export default App;
