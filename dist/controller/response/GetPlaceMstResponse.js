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
const GetCityMstResponse_1 = require("./GetCityMstResponse");
const GetSoundArchivesResponse_1 = require("./GetSoundArchivesResponse");
let GetPlaceMstResponse = class GetPlaceMstResponse {
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetPlaceMstResponse.prototype, "prefecture", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetPlaceMstResponse.prototype, "city", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetPlaceMstResponse.prototype, "place", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetPlaceMstResponse.prototype, "placeName", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], GetPlaceMstResponse.prototype, "pointRatioX", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], GetPlaceMstResponse.prototype, "pointRatioY", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", GetSoundArchivesResponse_1.default)
], GetPlaceMstResponse.prototype, "soundArchives", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", GetCityMstResponse_1.default)
], GetPlaceMstResponse.prototype, "cityMst", void 0);
GetPlaceMstResponse = __decorate([
    class_transformer_1.Exclude()
], GetPlaceMstResponse);
Object.seal(GetPlaceMstResponse);
exports.default = GetPlaceMstResponse;
//# sourceMappingURL=GetPlaceMstResponse.js.map