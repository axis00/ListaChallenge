import Robot from "./Robot";

interface IRobotRepository {
  create(robot: Robot): Promise<Robot>;
  get(id: string): Promise<Robot>;
  update(robot: Robot): Promise<Robot>;
  remove(id: string): Promise<undefined>;
}

export default IRobotRepository;