import IDataTransferObject from "./IDataTransferObject";
import TagDTO from "./TagDTO";
import Robot from "../core/Robot";
declare class RobotDTO implements IDataTransferObject<Robot> {
    id: string;
    name: string;
    purpose: string;
    avatar?: string;
    tags: TagDTO[];
    private constructor();
    toSerializable(): {
        id: string;
        name: string;
        purpose: string;
        tags: {
            id: string;
            name: string;
        }[];
        avatar: string | undefined;
    };
    toDomainObject(): Robot;
    static fromDomainObject(object: Robot): RobotDTO;
    static fromSerializable(record: ReturnType<RobotDTO['toSerializable']>): RobotDTO;
}
export default RobotDTO;
