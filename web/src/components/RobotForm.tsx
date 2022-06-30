import { Container, Paper, Center, Avatar, ActionIcon, TextInput, MultiSelect, Button } from "@mantine/core";
import Robot from "lib/core/Robot";
import RobotDTO from "lib/dto/RobotDTO";
import { map } from "lodash";
import { nanoid } from "nanoid";
import React, { useCallback, useState } from "react";
import { GrPowerCycle } from "react-icons/gr";

const AVATAR_BASE_URL = 'https://avatars.dicebear.com/api/bottts/'

interface Props {
  mode: 'create' | 'edit';
  robot?: ReturnType<RobotDTO['toSerializable']>;
  onSave: (robot: RobotDTO) => void;
}

const RobotForm: React.FC<Props> = ({ mode, robot, onSave }) => {
  const [avatarSrc, setAvatarSrc] = useState(mode === "edit" && robot ? robot.avatar : `${AVATAR_BASE_URL}${nanoid()}.svg`);
  const [name, setName] = useState(mode === "edit" && robot ? robot.name : '');
  const [purpose, setPurpose] = useState(mode === "edit" && robot ? robot.purpose : '');
  const [tags, setTags] = useState<string[]>(mode === "edit" && robot ? map(robot.tags, 'name') : []);

  const onClickNewAvatar = useCallback(() => setAvatarSrc(`${AVATAR_BASE_URL}${nanoid()}.svg`), []);

  const onClickPrimaryAction = useCallback(async () => {
    const _robot = Robot.create({
      id: robot?.id,
      name,
      purpose,
      avatar: avatarSrc,
    });

    onSave(RobotDTO.fromDomainObject(_robot));
  }, [avatarSrc, name, onSave, purpose, robot?.id]);

  return (
    <Container p={50}>
      <Paper shadow="lg" p={20} radius="lg">
        <Center style={{ display: 'flex', flexDirection: 'column' }}>
          <Container>
            <Avatar size="xl" radius={999} src={avatarSrc} />
            <Center>
              <ActionIcon onClick={onClickNewAvatar} radius={999}>
                <GrPowerCycle />
              </ActionIcon>
            </Center>
          </Container>
          <Container style={{ display: 'flex', flexDirection: 'column' }}>
            <TextInput
              label="Robot Name"
              placeholder="ButterWorth"
              size="xl"
              my="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextInput
              label="Robot Purpose"
              placeholder="Pass butter"
              size="xl"
              my="lg"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
            <MultiSelect
              label="Tags"
              size="xl"
              data={[]}
              creatable
              my="lg"
              value={tags}
              onChange={(e) => setTags(e)}
            />
          </Container>
          <Button
            onClick={onClickPrimaryAction}
          >
            Save
          </Button>
        </Center>
      </Paper>
    </Container>
  )
}

export default RobotForm;
