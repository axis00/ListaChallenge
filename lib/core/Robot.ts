import { INIT_ID } from "./constants";
import Tag from "./Tag";

class Robot {
  public id: string;
  public name: string;
  public purpose: string;
  public tags: Tag[];

  private constructor(id: string, name: string, purpose: string, tags: Tag[] = []) {
    this.id = id;
    this.name = name;
    this.purpose = purpose;
    this.tags = tags;
  }

  static create({
    id,
    name,
    purpose,
    tags
  }: { id?: string; name: string; purpose: string; tags?: Tag[] }) {
    return new Robot(id ?? INIT_ID, name, purpose, tags);
  }
}

export default Robot;
