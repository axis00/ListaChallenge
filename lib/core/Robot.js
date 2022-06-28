"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Robot = /** @class */ (function () {
    function Robot(id, name, purpose) {
        this.id = id;
        this.name = name;
        this.purpose = purpose;
    }
    Robot.create = function (id, name, purpose) {
        var _id = id || 'tempId';
        return new Robot(_id, name, purpose);
    };
    return Robot;
}());
exports.default = Robot;
