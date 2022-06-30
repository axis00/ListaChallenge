import IRepository from "lib/core/IRepository";
import Robot from "lib/core/Robot";
import RobotDTO from "lib/dto/RobotDTO";
import initDB from "./db";

class LocalRobotRepository implements IRepository<Robot> {
  private db?: IDBDatabase;

  async init() {
    this.db = await initDB();
  }

  async getMany(): Promise<Robot[]> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(Error('NO_DATABASE'));
        return;
      }
      const transaction = this.db.transaction(['robots'], 'readonly');
      const robotRequest = transaction.objectStore('robots').getAll();

      robotRequest.onsuccess = () => {
        resolve(robotRequest.result.map(
          (r) => RobotDTO.fromSerializable(r).toDomainObject()
        ))
      }

      robotRequest.onerror = () => {
        reject(Error('Failed to read robots'));
      }
    })
  }
  create(e: Robot): Promise<Robot> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(Error('NO_DATABASE'));
        return;
      }
      const transaction = this.db.transaction(['robots'], 'readwrite');
      const serializableRobot = RobotDTO.fromDomainObject(e).toSerializable();

      const addRobotRequest = transaction.objectStore('robots').add(serializableRobot);

      addRobotRequest.onsuccess = () => {
        resolve(e);
      };

      addRobotRequest.onerror = () => {
        reject(Error('FAILED_TO_CREATE_ROBOT'))
      }

      transaction.commit();
    });
  }

  get(id: string): Promise<Robot> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(Error('NO_DATABASE'));
        return;
      }
      const transaction = this.db.transaction(['robots'], 'readonly');
      const robotRequest = transaction.objectStore('robots').get(id);

      robotRequest.onsuccess = () => {
        resolve(RobotDTO.fromSerializable(robotRequest.result).toDomainObject())
      }

      robotRequest.onerror = () => {
        reject(Error('Failed to read robots'));
      }
    });
  }
  update(e: Robot): Promise<Robot> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(Error('NO_DATABASE'));
        return;
      }
      const transaction = this.db.transaction(['robots'], 'readwrite');
      const serializableRobot = RobotDTO.fromDomainObject(e).toSerializable();
      const updateRequest = transaction.objectStore('robots').put(serializableRobot);

      updateRequest.onsuccess = () => {
        resolve(e)
      }

      updateRequest.onerror = () => {
        reject(Error('Failed to update robot'));
      }
    });
  }
  remove(id: string): Promise<undefined> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(Error('NO_DATABASE'));
        return;
      }
      const transaction = this.db.transaction(['robots'], 'readwrite');
      const updateRequest = transaction.objectStore('robots').delete(id);

      updateRequest.onsuccess = () => {
        resolve(undefined);
      }

      updateRequest.onerror = () => {
        reject(Error('Failed to delete robot'));
      }
    });
  }
}

export default LocalRobotRepository;
