"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tag_1 = __importDefault(require("../core/Tag"));
var TagDTO = /** @class */ (function () {
    function TagDTO(id, name) {
        this.id = id;
        this.name = name;
    }
    TagDTO.fromDomainObject = function (object) {
        return new TagDTO(object.id, object.name);
    };
    TagDTO.fromSerializable = function (record) {
        return new TagDTO(record.id, record.name);
    };
    TagDTO.prototype.toSerializable = function () {
        return {
            id: this.id,
            name: this.name,
        };
    };
    TagDTO.prototype.toDomainObject = function () {
        return Tag_1.default.create({
            id: this.id,
            name: this.name,
        });
    };
    return TagDTO;
}());
exports.default = TagDTO;
