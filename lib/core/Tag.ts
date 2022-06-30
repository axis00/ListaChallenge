import { nanoid } from "nanoid";

class Tag {
  public id: string;
  public name: string;

  private constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static create({ id, name }: { id?: string; name: string }) {
    return new Tag(id ?? nanoid(), name);
  }
}

export default Tag;
