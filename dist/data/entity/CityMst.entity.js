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
const PlaceMst_entity_1 = require("./PlaceMst.entity");
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
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'population'
    }),
    __metadata("design:type", Number)
], CityMstEntity.prototype, "population", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'railway'
    }),
    __metadata("design:type", String)
], CityMstEntity.prototype, "railway", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'city_code'
    }),
    __metadata("design:type", Number)
], CityMstEntity.prototype, "cityCode", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'longitude'
    }),
    __metadata("design:type", String)
], CityMstEntity.prototype, "longitude", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'latitude'
    }),
    __metadata("design:type", String)
], CityMstEntity.prototype, "latitude", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'area'
    }),
    __metadata("design:type", Number)
], CityMstEntity.prototype, "area", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'residential_land'
    }),
    __metadata("design:type", Number)
], CityMstEntity.prototype, "residentialLand", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'field'
    }),
    __metadata("design:type", Number)
], CityMstEntity.prototype, "field", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'forest'
    }),
    __metadata("design:type", Number)
], CityMstEntity.prototype, "forest", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        name: 'wilderness'
    }),
    __metadata("design:type", Number)
], CityMstEntity.prototype, "wilderness", void 0);
__decorate([
    typeorm_1.OneToOne(type => PlaceMst_entity_1.PlaceMstEntity, placeMst => placeMst.cityMst),
    typeorm_1.JoinColumn([
        { name: "prefecture", referencedColumnName: "prefecture" },
        { name: "city", referencedColumnName: "city" }
    ]),
    __metadata("design:type", PlaceMst_entity_1.PlaceMstEntity)
], CityMstEntity.prototype, "placeMst", void 0);
CityMstEntity = __decorate([
    typeorm_1.Entity(constants.CITY_MST)
], CityMstEntity);
exports.CityMstEntity = CityMstEntity;
//# sourceMappingURL=CityMst.entity.js.map