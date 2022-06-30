import { nanoid } from 'nanoid'
import Tag from "./Tag";

class Robot {
  public id: string;
  public name: string;
  public purpose: string;
  public tags: Tag[];
  public avatar?: string;

  private constructor(
    id: string,
    name: string,
    purpose: string,
    tags: Tag[] = [],
    avatar?: string,
  ) {
    this.id = id;
    this.name = name;
    this.purpose = purpose;
    this.tags = tags;
    this.avatar = avatar;
  }

  static create({
    id,
    name,
    purpose,
    tags,
    avatar,
  }: { id?: string; name: string; purpose: string; tags?: Tag[]; avatar?: string; }) {
    return new Robot(id ?? nanoid(), name, purpose, tags, avatar);
  }
}

export default Robot;
