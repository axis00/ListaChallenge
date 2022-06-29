import Tag from "../core/Tag";
import IDataTransferObject from "./IDataTransferObject";

class TagDTO implements IDataTransferObject<Tag> {
  public id: string;
  public name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static fromDomainObject(object: Tag): TagDTO {
    return new TagDTO(
      object.id,
      object.name,
    );
  }

  static fromSerializable(record: ReturnType<TagDTO['toSerializable']>) {
    return new TagDTO(
      record.id,
      record.name,
    );
  }

  toSerializable() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  toDomainObject(): Tag {
    return Tag.create({
      id: this.id,
      name: this.name,
    });
  }
}

export default TagDTO;
