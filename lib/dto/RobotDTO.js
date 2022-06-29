"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TagDTO_1 = __importDefault(require("./TagDTO"));
var Robot_1 = __importDefault(require("../core/Robot"));
var RobotDTO = /** @class */ (function () {
    function RobotDTO(id, name, purpose, tags, avatar) {
        if (tags === void 0) { tags = []; }
        this.id = id;
        this.name = name;
        this.purpose = purpose;
        this.tags = tags;
        this.avatar = avatar;
    }
    RobotDTO.prototype.toSerializable = function () {
        return {
            id: this.id,
            name: this.name,
            purpose: this.purpose,
            tags: this.tags.map(function (t) { return t.toSerializable(); }),
            avatar: this.avatar,
        };
    };
    RobotDTO.prototype.toDomainObject = function () {
        return Robot_1.default.create({
            id: this.id,
            name: this.name,
            purpose: this.purpose,
            tags: this.tags.map(function (t) { return t.toDomainObject(); }),
        });
    };
    RobotDTO.fromDomainObject = function (object) {
        return new RobotDTO(object.id, object.name, object.purpose, object.tags.map(function (t) { return TagDTO_1.default.fromDomainObject(t); }), object.avatar);
    };
    RobotDTO.fromSerializable = function (record) {
        return new RobotDTO(record.id, record.name, record.purpose, record.tags.map(function (r) { return TagDTO_1.default.fromSerializable(r); }), record.avatar);
    };
    return RobotDTO;
}());
exports.default = RobotDTO;
