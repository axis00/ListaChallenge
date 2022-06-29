interface IRepository<T> {
  create(e: T): Promise<T>;
  get(id: string): Promise<T>;
  update(e: T): Promise<T>;
  remove(id: string): Promise<undefined>;
}