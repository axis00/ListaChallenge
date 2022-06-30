import { useCallback } from "react";
import { Container, Paper, Center, Avatar, Chips, Chip, Title, Text, Button, ActionIcon } from "@mantine/core";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiDeleteBin2Line } from "react-icons/ri";

import RobotDTO from "lib/dto/RobotDTO";

import RobotLoader from "./components/RobotLoader";
import { useService } from "./serviceContext";
import useLoadable from "./utils/useLoadable";

const ViewRobot: React.FC = () => {
  const { id } = useParams();
  const { robotRepository } = useService();
  const navigate = useNavigate();

  const [robot, isRobotLoading] = useLoadable<ReturnType<RobotDTO['toSerializable']>>(async () => {
    if (!id || !robotRepository ) return;
    const _robot = await robotRepository.get(id);
    return RobotDTO.fromDomainObject(_robot).toSerializable();
  }, [id]);

  const onClickDelete = useCallback(async () => {
    if (!id || !robotRepository ) return;
    await robotRepository?.remove(id);
    navigate('/', { replace: true });
  }, [id, navigate, robotRepository]);

  if (isRobotLoading) return <RobotLoader />;
  if (!robot) return <div>Not Found</div>;

  return (
    <Container p={50}>
      <Paper shadow="lg" p={20} radius="lg">
        <Center style={{ display: 'flex', flexDirection: 'column' }}>
          <Container>
            <Avatar size="xl" radius={999} src={robot.avatar} />
          </Container>
          <Container style={{ display: 'flex', flexDirection: 'column' }}>
            <Title order={2} my={10}>{robot.name}</Title>
            <Text size="lg" my={10}>{robot.purpose}</Text>
            <Container style={{ display: 'flex' }} my={10}>
              <Chips multiple>
                {robot.tags.map((t) => (<Chip>{t.name}</Chip>))}
              </Chips>
            </Container>
            <Container style={{ display: 'flex', alignItems: 'center' }}>
              <Button component={Link} to={`/${id}/edit`} size="md">
                Edit
              </Button>
              <ActionIcon color="red" mx={10} size="xl" onClick={onClickDelete}>
                <RiDeleteBin2Line size={20} />
              </ActionIcon>
            </Container>
          </Container>
        </Center>
      </Paper>
    </Container>
  )
}

export default ViewRobot;
