import IDataTransferObject from "./IDataTransferObject";
import TagDTO from "./TagDTO";

import Robot from "../core/Robot";

class RobotDTO implements IDataTransferObject<Robot> {
  public id: string;
  public name: string;
  public purpose: string;
  public avatar?: string;
  public tags: TagDTO[];

  private constructor(
    id: string,
    name: string,
    purpose: string,
    tags: TagDTO[] = [],
    avatar?: string,
  ) {
    this.id = id;
    this.name = name;
    this.purpose = purpose;
    this.tags = tags;
    this.avatar = avatar;
  }

  toSerializable() {
    return {
      id: this.id,
      name: this.name,
      purpose: this.purpose,
      tags: this.tags.map((t) => t.toSerializable()),
      avatar: this.avatar,
    };
  }

  toDomainObject(): Robot {
    return Robot.create({
      id: this.id,
      name: this.name,
      purpose: this.purpose,
      tags: this.tags.map((t) => t.toDomainObject()),
      avatar: this.avatar,
    })
  }

  static fromDomainObject(object: Robot): RobotDTO{
    return new RobotDTO(
      object.id,
      object.name,
      object.purpose,
      object.tags.map((t) => TagDTO.fromDomainObject(t)),
      object.avatar,
    )
  }

  static fromSerializable(record: ReturnType<RobotDTO['toSerializable']>) {
    return new RobotDTO(
      record.id,
      record.name,
      record.purpose,
      record.tags.map((r) => TagDTO.fromSerializable(r)),
      record.avatar,
    );
  }
}

export default RobotDTO;
