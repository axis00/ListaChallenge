import Tag from "./Tag";
declare class Robot {
    id: string;
    name: string;
    purpose: string;
    tags: Tag[];
    private constructor();
    static create({ id, name, purpose, tags }: {
        id?: string;
        name: string;
        purpose: string;
        tags?: Tag[];
    }): Robot;
}
export default Robot;
