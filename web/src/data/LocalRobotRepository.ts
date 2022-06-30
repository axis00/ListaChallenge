import IRepository from "lib/core/IRepository";
import Robot from "lib/core/Robot";
import Tag from "lib/core/Tag";
import RobotDTO from "lib/dto/RobotDTO";
import { map } from "lodash";
import initDB from "./db";

class LocalRobotRepository implements IRepository<Robot> {
  private db?: IDBDatabase;

  async init() {
    this.db = await initDB();
  }

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
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(Error('NO_DATABASE'));
        return;
      }
      const transaction = this.db.transaction(['robots'], 'readwrite');
      const serializableRobot = RobotDTO.fromDomainObject(e).toSerializable();
      const data = {
        ...serializableRobot,
        tags: map(serializableRobot.tags, 'id'),
      }
      const addRobotRequest = transaction.objectStore('robots').add(data);

      addRobotRequest.onsuccess = () => {
        resolve(e);
      };

      addRobotRequest.onerror = () => {
        reject(Error('FAILED_TO_CREATE_ROBOT'))
      }
    });
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
