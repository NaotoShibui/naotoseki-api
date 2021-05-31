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
exports.CityMstEntity = void 0;
const typeorm_1 = require("typeorm");
const constants = require("../../constants");
let CityMstEntity = class CityMstEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'prefecture'
    }),
    __metadata("design:type", String)
], CityMstEntity.prototype, "prefecture", void 0);
__decorate([
    typeorm_1.Column({
        name: 'pref_name'
    }),
    __metadata("design:type", String)
], CityMstEntity.prototype, "prefName", void 0);
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'city'
    }),
    __metadata("design:type", String)
], CityMstEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.Column({
        name: 'city_name'
    }),
    __metadata("design:type", String)
], CityMstEntity.prototype, "cityName", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'active_image'
    }),
    __metadata("design:type", String)
], CityMstEntity.prototype, "activeImage", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'normal_image'
    }),
    __metadata("design:type", String)
], CityMstEntity.prototype, "normalImage", void 0);
CityMstEntity = __decorate([
    typeorm_1.Entity(constants.CITY_MST)
], CityMstEntity);
exports.CityMstEntity = CityMstEntity;
//# sourceMappingURL=CityMst.entity.js.map