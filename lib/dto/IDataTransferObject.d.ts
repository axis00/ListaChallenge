interface IDataTransferObject<T> {
    toSerializable(): Record<string, unknown>;
    toDomainObject(): T;
}
export default IDataTransferObject;
