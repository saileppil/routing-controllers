"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FakeService_1 = require("../../FakeService");
var Middleware_1 = require("../../../../../src/decorator/Middleware");
var QuestionMiddleware = /** @class */ (function () {
    function QuestionMiddleware() {
    }
    QuestionMiddleware.prototype.use = function (request, response, next) {
        FakeService_1.defaultFakeService.questionMiddleware();
        return next();
    };
    QuestionMiddleware = __decorate([
        Middleware_1.Middleware({ type: "before" })
    ], QuestionMiddleware);
    return QuestionMiddleware;
}());
exports.QuestionMiddleware = QuestionMiddleware;
//# sourceMappingURL=QuestionMiddleware.js.map