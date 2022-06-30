import React, { useCallback } from "react";
import RobotDTO from "lib/dto/RobotDTO";
import { useNavigate, useParams } from "react-router-dom";

import { useService } from "./serviceContext";
import RobotForm from "./components/RobotForm";
import RobotLoader from "./components/RobotLoader";
import useLoadable from "./utils/useLoadable";


const EditRobot: React.FC = () => {
  const { id } = useParams();
  const { robotRepository } = useService();
  const [robot, isRobotLoading] = useLoadable<ReturnType<RobotDTO['toSerializable']>>(async () => {
    if (!id || !robotRepository ) return;
    const _robot = await robotRepository.get(id);
    return RobotDTO.fromDomainObject(_robot).toSerializable();
  }, [id]);

  const navigate = useNavigate();

  const onSave = useCallback(async (r: RobotDTO) => {
    if (!robotRepository) return;
    await robotRepository.update(r.toDomainObject());
    navigate(`/${r.id}`, { replace: true });
  }, [navigate, robotRepository]);

  if (isRobotLoading) return <RobotLoader />;
  if (!robot) return <div>Not Found</div>;

  return (<RobotForm mode="edit" onSave={onSave} robot={robot} />);
};

export default EditRobot;
