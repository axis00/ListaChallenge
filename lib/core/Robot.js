"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var Robot = /** @class */ (function () {
    function Robot(id, name, purpose, tags) {
        if (tags === void 0) { tags = []; }
        this.id = id;
        this.name = name;
        this.purpose = purpose;
        this.tags = tags;
    }
    Robot.create = function (_a) {
        var id = _a.id, name = _a.name, purpose = _a.purpose, tags = _a.tags;
        return new Robot(id !== null && id !== void 0 ? id : constants_1.INIT_ID, name, purpose, tags);
    };
    return Robot;
}());
exports.default = Robot;
