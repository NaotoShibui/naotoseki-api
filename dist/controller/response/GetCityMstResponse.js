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
let GetCityMstResponse = class GetCityMstResponse {
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetCityMstResponse.prototype, "prefecture", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetCityMstResponse.prototype, "prefName", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetCityMstResponse.prototype, "city", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetCityMstResponse.prototype, "cityName", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetCityMstResponse.prototype, "activeImage", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetCityMstResponse.prototype, "normalImage", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], GetCityMstResponse.prototype, "population", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetCityMstResponse.prototype, "railway", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], GetCityMstResponse.prototype, "cityCode", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetCityMstResponse.prototype, "longitude", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetCityMstResponse.prototype, "latitude", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], GetCityMstResponse.prototype, "area", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], GetCityMstResponse.prototype, "residentialLand", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], GetCityMstResponse.prototype, "field", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], GetCityMstResponse.prototype, "forest", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], GetCityMstResponse.prototype, "wilderness", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Array)
], GetCityMstResponse.prototype, "soundArchives", void 0);
GetCityMstResponse = __decorate([
    class_transformer_1.Exclude()
], GetCityMstResponse);
Object.seal(GetCityMstResponse);
exports.default = GetCityMstResponse;
//# sourceMappingURL=GetCityMstResponse.js.map