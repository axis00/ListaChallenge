import Tag from "../core/Tag";
import IDataTransferObject from "./IDataTransferObject";
declare class TagDTO implements IDataTransferObject<Tag> {
    id: string;
    name: string;
    constructor(id: string, name: string);
    static fromDomainObject(object: Tag): TagDTO;
    static fromSerializable(record: ReturnType<TagDTO['toSerializable']>): TagDTO;
    toSerializable(): {
        id: string;
        name: string;
    };
    toDomainObject(): Tag;
}
export default TagDTO;
