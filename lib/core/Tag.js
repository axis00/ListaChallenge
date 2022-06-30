"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nanoid_1 = require("nanoid");
var Tag = /** @class */ (function () {
    function Tag(id, name) {
        this.id = id;
        this.name = name;
    }
    Tag.create = function (_a) {
        var id = _a.id, name = _a.name;
        return new Tag(id !== null && id !== void 0 ? id : (0, nanoid_1.nanoid)(), name);
    };
    return Tag;
}());
exports.default = Tag;
