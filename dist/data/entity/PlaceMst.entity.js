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
exports.PlaceMstEntity = void 0;
const typeorm_1 = require("typeorm");
const constants = require("../../constants");
let PlaceMstEntity = class PlaceMstEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'prefecture'
    }),
    __metadata("design:type", String)
], PlaceMstEntity.prototype, "prefecture", void 0);
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'city'
    }),
    __metadata("design:type", String)
], PlaceMstEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'place'
    }),
    __metadata("design:type", String)
], PlaceMstEntity.prototype, "place", void 0);
__decorate([
    typeorm_1.Column({
        name: 'place_name'
    }),
    __metadata("design:type", String)
], PlaceMstEntity.prototype, "placeName", void 0);
__decorate([
    typeorm_1.Column({
        name: 'point_ratio_x'
    }),
    __metadata("design:type", Number)
], PlaceMstEntity.prototype, "pointRatioX", void 0);
__decorate([
    typeorm_1.Column({
        name: 'point_ratio_y'
    }),
    __metadata("design:type", Number)
], PlaceMstEntity.prototype, "pointRatioY", void 0);
PlaceMstEntity = __decorate([
    typeorm_1.Entity(constants.PLACE_MST)
], PlaceMstEntity);
exports.PlaceMstEntity = PlaceMstEntity;
//# sourceMappingURL=PlaceMst.entity.js.map