"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nanoid_1 = require("nanoid");
var Robot = /** @class */ (function () {
    function Robot(id, name, purpose, tags, avatar) {
        if (tags === void 0) { tags = []; }
        this.id = id;
        this.name = name;
        this.purpose = purpose;
        this.tags = tags;
        this.avatar = avatar;
    }
    Robot.create = function (_a) {
        var id = _a.id, name = _a.name, purpose = _a.purpose, tags = _a.tags, avatar = _a.avatar;
        return new Robot(id !== null && id !== void 0 ? id : (0, nanoid_1.nanoid)(), name, purpose, tags, avatar);
    };
    return Robot;
}());
exports.default = Robot;
