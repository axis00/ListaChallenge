class Robot {
  public id: string;
  public name: string;
  public purpose: string;

  private constructor(id: string, name: string, purpose: string) {
    this.id = id;
    this.name = name;
    this.purpose = purpose;
  }

  static create(id: string | undefined, name: string, purpose: string) {
    const _id = id || 'tempId';
    return new Robot(_id, name, purpose);
  }
}

export default Robot;
