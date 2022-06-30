import { Container, Paper, Center, Skeleton } from "@mantine/core";

function RobotLoader() {
  return (
    <Container>
      <Paper shadow="lg" p={10} radius="lg">
        <Center style={{ display: 'flex', flexDirection: 'column' }}>
          <Container>
            <Skeleton circle height={80} m={10} />
          </Container>
          <Container style={{ display: 'flex', flexDirection: 'column' }}>
            <Skeleton height={20} width={300} m={10} />
            <Skeleton height={70} width={300} m={10} />
            <Container style={{ display: 'flex' }}>
              <Skeleton height={20} width={80} m={10}/>
              <Skeleton height={20} width={70} m={10}/>
            </Container>
          </Container>
        </Center>
      </Paper>
    </Container>
  )
}

export default RobotLoader;
