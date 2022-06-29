import Tag from "./Tag";
declare class Robot {
    id: string;
    name: string;
    purpose: string;
    tags: Tag[];
    avatar?: string;
    private constructor();
    static create({ id, name, purpose, tags, avatar, }: {
        id?: string;
        name: string;
        purpose: string;
        tags?: Tag[];
        avatar?: string;
    }): Robot;
}
export default Robot;
