import { INIT_ID } from "./constants";

class Tag {
  public id: string;
  public name: string;

  private constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static create({ id, name }: { id?: string; name: string }) {
    return new Tag(id ?? INIT_ID, name);
  }
}

export default Tag;
