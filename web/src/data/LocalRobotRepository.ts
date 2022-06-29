import IRepository from "lib/core/IRepository";
import Robot from "lib/core/Robot";
import Tag from "lib/core/Tag";

class LocalRobotRepository implements IRepository<Robot> {
  async getMany(): Promise<Robot[]> {
    return [
      Robot.create({
        id: '1',
        name: 'ButterWorth',
        purpose: 'Pass Butter',
        avatar: 'https://avatars.dicebear.com/api/bottts/4324.svg',
        tags: [
          Tag.create({
            id: '1',
            name: 'Rick'
          })
        ],
      })
    ]
  }
  create(e: Robot): Promise<Robot> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<Robot> {
    throw new Error("Method not implemented.");
  }
  update(e: Robot): Promise<Robot> {
    throw new Error("Method not implemented.");
  }
  remove(id: string): Promise<undefined> {
    throw new Error("Method not implemented.");
  }
}

export default LocalRobotRepository;
