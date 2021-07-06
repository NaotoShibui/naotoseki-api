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
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
let CityMstOutVo = class CityMstOutVo {
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], CityMstOutVo.prototype, "prefecture", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], CityMstOutVo.prototype, "prefName", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], CityMstOutVo.prototype, "city", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], CityMstOutVo.prototype, "cityName", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], CityMstOutVo.prototype, "activeImage", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], CityMstOutVo.prototype, "normalImage", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], CityMstOutVo.prototype, "population", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], CityMstOutVo.prototype, "railway", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], CityMstOutVo.prototype, "cityCode", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], CityMstOutVo.prototype, "longitude", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], CityMstOutVo.prototype, "latitude", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], CityMstOutVo.prototype, "area", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], CityMstOutVo.prototype, "residentialLand", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], CityMstOutVo.prototype, "field", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], CityMstOutVo.prototype, "forest", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], CityMstOutVo.prototype, "wilderness", void 0);
CityMstOutVo = __decorate([
    class_transformer_1.Exclude()
], CityMstOutVo);
Object.seal(CityMstOutVo);
exports.default = CityMstOutVo;
//# sourceMappingURL=CityMstOutVo.js.map