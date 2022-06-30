import React, { useCallback } from "react";
import RobotDTO from "lib/dto/RobotDTO";
import { useNavigate } from "react-router-dom";

import { useService } from "./serviceContext";
import RobotForm from "./components/RobotForm";


const Create: React.FC = () => {
  const { robotRepository } = useService();
  const navigate = useNavigate();

  const onSave = useCallback(async (r: RobotDTO) => {
    if (!robotRepository) return;
    await robotRepository.create(r.toDomainObject());
    navigate('/', { replace: true });
  }, [navigate, robotRepository]);

  return (<RobotForm mode="create" onSave={onSave} />);
};

export default Create;
