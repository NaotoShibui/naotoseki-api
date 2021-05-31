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
exports.SoundArchivesEntity = void 0;
const typeorm_1 = require("typeorm");
const constants = require("../../constants");
const CityMst_entity_1 = require("./CityMst.entity");
let SoundArchivesEntity = class SoundArchivesEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'title'
    }),
    __metadata("design:type", String)
], SoundArchivesEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'prefecture'
    }),
    __metadata("design:type", String)
], SoundArchivesEntity.prototype, "prefecture", void 0);
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'city'
    }),
    __metadata("design:type", String)
], SoundArchivesEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'place'
    }),
    __metadata("design:type", String)
], SoundArchivesEntity.prototype, "place", void 0);
__decorate([
    typeorm_1.PrimaryColumn({
        name: 'recording_date'
    }),
    __metadata("design:type", Date)
], SoundArchivesEntity.prototype, "recordingDate", void 0);
__decorate([
    typeorm_1.Column({
        name: 'download_link'
    }),
    __metadata("design:type", String)
], SoundArchivesEntity.prototype, "downloadLink", void 0);
__decorate([
    typeorm_1.Column({
        name: 'file_length'
    }),
    __metadata("design:type", String)
], SoundArchivesEntity.prototype, "fileLength", void 0);
__decorate([
    typeorm_1.Column({
        name: 'description'
    }),
    __metadata("design:type", String)
], SoundArchivesEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        name: 'is_normalized'
    }),
    __metadata("design:type", Boolean)
], SoundArchivesEntity.prototype, "isNormalized", void 0);
__decorate([
    typeorm_1.Column({
        name: 'is_noise_reducted'
    }),
    __metadata("design:type", Boolean)
], SoundArchivesEntity.prototype, "isNoiseReducted", void 0);
__decorate([
    typeorm_1.Column({
        name: 'is_repaired'
    }),
    __metadata("design:type", Boolean)
], SoundArchivesEntity.prototype, "isRepaired", void 0);
__decorate([
    typeorm_1.ManyToOne(type => CityMst_entity_1.CityMstEntity, city => city.soundArchives),
    typeorm_1.JoinColumn({ name: 'city' }),
    __metadata("design:type", CityMst_entity_1.CityMstEntity)
], SoundArchivesEntity.prototype, "cityMst", void 0);
SoundArchivesEntity = __decorate([
    typeorm_1.Entity(constants.SOUND_ARCHIVES)
], SoundArchivesEntity);
exports.SoundArchivesEntity = SoundArchivesEntity;
//# sourceMappingURL=SoundArchives.entity.js.map