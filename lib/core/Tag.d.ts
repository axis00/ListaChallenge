declare class Tag {
    id: string;
    name: string;
    private constructor();
    static create({ id, name }: {
        id?: string;
        name: string;
    }): Tag;
}
export default Tag;
