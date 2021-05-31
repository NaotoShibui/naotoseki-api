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
let GetSoundArchivesResponse = class GetSoundArchivesResponse {
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetSoundArchivesResponse.prototype, "title", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetSoundArchivesResponse.prototype, "prefecture", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetSoundArchivesResponse.prototype, "city", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetSoundArchivesResponse.prototype, "place", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Date)
], GetSoundArchivesResponse.prototype, "recordingDate", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetSoundArchivesResponse.prototype, "downloadLink", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetSoundArchivesResponse.prototype, "fileLength", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], GetSoundArchivesResponse.prototype, "description", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean)
], GetSoundArchivesResponse.prototype, "isNormalized", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean)
], GetSoundArchivesResponse.prototype, "isNoiseReducted", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean)
], GetSoundArchivesResponse.prototype, "isRepaired", void 0);
GetSoundArchivesResponse = __decorate([
    class_transformer_1.Exclude()
], GetSoundArchivesResponse);
Object.seal(GetSoundArchivesResponse);
exports.default = GetSoundArchivesResponse;
//# sourceMappingURL=GetSoundArchivesResponse.js.map