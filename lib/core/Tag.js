"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var Tag = /** @class */ (function () {
    function Tag(id, name) {
        this.id = id;
        this.name = name;
    }
    Tag.create = function (_a) {
        var id = _a.id, name = _a.name;
        return new Tag(id !== null && id !== void 0 ? id : constants_1.INIT_ID, name);
    };
    return Tag;
}());
exports.default = Tag;
