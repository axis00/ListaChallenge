import React, { useCallback, useState } from "react";
import { Container, Paper, Center, Avatar, ActionIcon, TextInput, MultiSelect, Button } from "@mantine/core";
import { nanoid } from "nanoid";

import { GrPowerCycle } from 'react-icons/gr'
import { useService } from "./serviceContext";
import Robot from "lib/core/Robot";
import { useNavigate } from "react-router-dom";

const AVATAR_BASE_URL = 'https://avatars.dicebear.com/api/bottts/'

function Create() {
  const { robotRepository } = useService();
  const navigate = useNavigate();
  const [avatarSrc, setAvatarSrc] = useState(`${AVATAR_BASE_URL}${nanoid()}.svg`);
  const [name, setName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const onClickNewAvatar = useCallback(() => setAvatarSrc(`${AVATAR_BASE_URL}${nanoid()}.svg`), []);

  const onClickCreate = useCallback(async () => {
    if (!robotRepository) return;
    const newRobot = Robot.create({
      name,
      purpose,
      avatar: avatarSrc,
    });

    await robotRepository.create(newRobot);
    navigate('/', { replace: true });
  }, [avatarSrc, name, navigate, purpose, robotRepository]);

  return (
    <Container>
      <Paper shadow="lg" p={10} radius="lg">
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
            onClick={onClickCreate}
          >
            Create
          </Button>
        </Center>
      </Paper>
    </Container>
  );
}

export default Create;
