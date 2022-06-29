import { INIT_ID } from "./constants";
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
    return new Robot(id ?? INIT_ID, name, purpose, tags, avatar);
  }
}

export default Robot;
