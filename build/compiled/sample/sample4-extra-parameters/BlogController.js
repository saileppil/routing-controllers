"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var JsonController_1 = require("../../src/decorator/JsonController");
var Get_1 = require("../../src/decorator/Get");
var Post_1 = require("../../src/decorator/Post");
var Put_1 = require("../../src/decorator/Put");
var Patch_1 = require("../../src/decorator/Patch");
var Delete_1 = require("../../src/decorator/Delete");
var QueryParam_1 = require("../../src/decorator/QueryParam");
var Param_1 = require("../../src/decorator/Param");
var Body_1 = require("../../src/decorator/Body");
var BlogController = /** @class */ (function () {
    function BlogController() {
    }
    BlogController.prototype.getAll = function (filter) {
        return [
            { id: 1, name: "Blog " + filter.keyword },
            { id: 2, name: "Blog " + filter.keyword }
        ];
    };
    BlogController.prototype.getOne = function (id, name) {
        return { id: id, name: name };
    };
    BlogController.prototype.post = function (blog) {
        return "Blog " + JSON.stringify(blog) + " !saved!";
    };
    BlogController.prototype.put = function (id) {
        return "Blog #" + id + " has been putted!";
    };
    BlogController.prototype.patch = function (id) {
        return "Blog #" + id + " has been patched!";
    };
    BlogController.prototype.remove = function (id) {
        return "Blog #" + id + " has been removed!";
    };
    __decorate([
        Get_1.Get("/blogs"),
        __param(0, QueryParam_1.QueryParam("filter", { required: true, parse: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BlogController.prototype, "getAll", null);
    __decorate([
        Get_1.Get("/blogs/:id"),
        __param(0, Param_1.Param("id")), __param(1, QueryParam_1.QueryParam("name")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], BlogController.prototype, "getOne", null);
    __decorate([
        Post_1.Post("/blogs"),
        __param(0, Body_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BlogController.prototype, "post", null);
    __decorate([
        Put_1.Put("/blogs/:id"),
        __param(0, Param_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], BlogController.prototype, "put", null);
    __decorate([
        Patch_1.Patch("/blogs/:id"),
        __param(0, Param_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], BlogController.prototype, "patch", null);
    __decorate([
        Delete_1.Delete("/blogs/:id"),
        __param(0, Param_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], BlogController.prototype, "remove", null);
    BlogController = __decorate([
        JsonController_1.JsonController()
    ], BlogController);
    return BlogController;
}());
exports.BlogController = BlogController;
//# sourceMappingURL=BlogController.js.map